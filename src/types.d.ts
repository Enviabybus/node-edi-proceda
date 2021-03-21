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
