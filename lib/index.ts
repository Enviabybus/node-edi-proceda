
import { JSONSchema4Object } from 'json-schema';

import {
  EdiParserMandatoryFieldError,
  EdiParserMandatoryValueError,
  EdiParserPatternError,
} from './edi/errors';

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

export interface EdiParamSchema {
  seq?: number,
  name: string;
  start: number;
  end: number;
  mandatory?: boolean;
  pattern?: RegExp;
  format?: (v: string) => string | number | boolean;
}
// #endregion typings

const EDI = {
  parse: (schemas: EdiSchema[], fileContent: string, validate = true): JSONSchema4Object => {
    return parseFile(schemas, fileContent, validate);
  },

  notfis: {

  },
};

function parseFile(schemas: EdiSchema[], Edi: string, validate: boolean, startLineNumber = 1): JSONSchema4Object {
  const lines = Edi.split('\n').map(l => l.trim());

  return schemas.reduce((obj, schema) => {
    const list: JSONSchema4Object[] = [];

    lines.forEach((line, index) => {
      if (!line.startsWith(schema.identifier)) { return; }

      const lineNumber = index + startLineNumber;
      let complement: JSONSchema4Object = {};
      let includes: JSONSchema4Object = {};

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

    obj[name] = value && schema.format ? schema.format(value) : value;
    return obj;
  }, {} as JSONSchema4Object);
}

export default EDI;
