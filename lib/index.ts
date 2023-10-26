/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSONSchema4Object } from 'json-schema';
import Lodash from 'lodash';

import { EdiBuildMandatoryFieldError } from './errors/edi-build.error';
import {
  EdiParserMandatoryFieldError,
  EdiParserMandatoryValueError,
  EdiParserPatternError,
} from './errors/edi-parser.error';

// #region typings
export interface EdiSchema {
  name: string;
  identifier: string;
  mandatory?: boolean;
  multiple?: boolean;
  params: EdiParamSchema[];
  complement?: EdiSchema;
  includes?: EdiSchema[];
}

type booleanTypeFormat = { type: 'boolean', true: string, false: string };
type numberTypeFormat = { type: 'number', precision?: number };
type stringTypeFormat = { type: 'string' };

export interface EdiParamSchema {
  seq?: number,
  name: string;
  start: number;
  end: number;
  mandatory?: boolean;
  pattern?: RegExp;
  format?: stringTypeFormat | numberTypeFormat | booleanTypeFormat,
}
// #endregion typings

const EDI = {
  parse: (schemas: EdiSchema[], fileContent: string, validate = true): JSONSchema4Object => {
    return parseFile(schemas, fileContent, validate);
  },
  build: (schemas: EdiSchema[], jsonContent: JSONSchema4Object, validate = true): string => {
    return buildFile(schemas, jsonContent, validate);
  },
};

function buildFile(schemas: EdiSchema[], data: JSONSchema4Object, validate = true): string {
  const schemaContent: string[] = [];

  schemas.forEach(schema => {
    const object = data[schema.name];
    let complement = '';
    let includes = '';

    const objects = Lodash((schema.multiple ? object : [object]) as JSONSchema4Object[]).compact().value();

    objects.forEach(object => {
      const line = schema.params.reduce((content, param) => {
        const value = (object[param.name] || '') as any;

        if (validate && param.mandatory && object[param.name] == null) {
          throw new EdiBuildMandatoryFieldError(param.name);
        }

        return content.concat(formatBuildParam(value, param));
      }, '');

      if (schema.includes) { includes = buildFile(schema.includes, object, validate); }

      if (schema.complement) { complement = buildFile([schema.complement], object, validate); }

      return schemaContent.push(Lodash([line, complement, includes]).compact().value().join('\n'));
    });
  });

  return schemaContent.join('\n');
}

function parseFile(schemas: EdiSchema[], Edi: string, validate: boolean, startLineNumber = 1): JSONSchema4Object {
  const lines = Edi.split('\n').map(l => l.trim());

  return schemas.reduce((obj, schema) => {
    const list: JSONSchema4Object[] = [];

    lines.forEach((line, index) => {
      if (!line.startsWith(schema.identifier)) { return; }

      const lineNumber = index + startLineNumber;
      let complement = {};
      let includes = {};

      if (schema.complement) {
        complement = parseFile([schema.complement], lines.slice(0, 1).join('\n'), validate, lineNumber + 1);
      }

      if (schema.includes) {
        const lastIncludesLinesIndex = lines.slice(index + 1).findIndex(l => l.startsWith(schema.identifier));
        let includesLines = lines.slice(index + 1);
        if (lastIncludesLinesIndex >= 0) { includesLines = includesLines.slice(0, lastIncludesLinesIndex); }
        includes = parseFile(schema.includes, includesLines.join('\n'), validate, lineNumber + 1);
      }

      list.push({
        linha: lineNumber,
        ...parseParams(schema, schema.params, line, lineNumber, validate),
        ...complement,
        ...includes,
      });
    });

    if (list.length > 0) { obj[schema.name] = schema.multiple ? list : list[0]; }
    if (validate && schema.mandatory && !obj[schema.name]) {
      throw new EdiParserMandatoryFieldError(schema.identifier);
    }

    return obj;
  }, {} as JSONSchema4Object);
}

function parseParams(
  registerSchema: EdiSchema,
  paramsSchemas: EdiParamSchema[],
  line: string,
  lineNumber: number,
  validate: boolean,
): JSONSchema4Object {
  const { identifier: reg } = registerSchema;

  return paramsSchemas.reduce((obj, schema, index) => {
    const {
      end,
      name,
      seq = index + 1,
      start,
    } = schema;
    const length = end - start + 1;
    const value = line.substr(start - 1, length).trim() || null;

    if (validate && schema.mandatory && !value) {
      throw new EdiParserMandatoryValueError(lineNumber, reg, seq, name, start, end);
    }
    if (validate && value && schema.pattern && !schema.pattern.test(value)) {
      throw new EdiParserPatternError(lineNumber, reg, seq, name, start, end);
    }

    obj[name] = value && schema.format ? formatParseParam(value, schema.format) : value;
    return obj;
  }, {} as JSONSchema4Object);
}

function formatParseParam(value: string, format: stringTypeFormat
  | numberTypeFormat
  | booleanTypeFormat
): string | number | boolean {
  switch (format.type) {
    case 'boolean' : return format.true === value;
    case 'number' : return Number(value) / 10 ** (format.precision || 0);
    default : return value;
  }
}

function formatBuildParam(value: string | number | boolean, { format, end, start }: EdiParamSchema): string {
  const paramSize = end - start + 1;

  switch (format?.type) {
    case 'boolean' :
      return value ? format.true : format.false;
    case 'number' :
      value = format ? Number(value).toFixed(format.precision).replace('.', '') : value.toString();
      return value.padStart(paramSize, '0').substring(0, paramSize);
    default :
      return value.toString().padEnd(paramSize, ' ').substring(0, paramSize);
  }
}

export default EDI;
