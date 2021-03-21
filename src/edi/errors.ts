export class EdiParserError extends Error { }

export class EdiParserFieldError extends EdiParserError {
  constructor(message: string, reg: string) {
    super(`[REGISTRO: ${reg}] ${message}`);
  }
}

export class EdiParserMandatoryFieldError extends EdiParserFieldError {
  constructor(reg: string) {
    super('Campo mandatório ausente', reg);
  }
}

export class EdiParserParamsError extends EdiParserError {
  constructor(message: string, lineNumber: number, reg: string, seq: number, attrName: string, start: number, end: number) {
    super(`[LINHA ${lineNumber}, REGISTRO: ${reg}, SEQ: ${seq}, CAMPO: ${attrName}, POSIÇÃO: ${start} a ${end}] ${message}`);
  }
}

export class EdiParserMandatoryValueError extends EdiParserParamsError {
  constructor(lineNumber: number, reg: string, seq: number, attrName: string, start: number, end: number) {
    super('Valor mandatório ausente', lineNumber, reg, seq, attrName, start, end);
  }
}

export class EdiParserPatternError extends EdiParserParamsError {
  constructor(lineNumber: number, reg: string, seq: number, attrName: string, start: number, end: number) {
    super('Valor com padrão inválido', lineNumber, reg, seq, attrName, start, end);
  }
}
