import { EdiSchema } from '../../..';

export const dadosComplementaresNfSchema: EdiSchema = {
  name: 'dadosComplementaresNf',
  identifier: '333',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    format: { type: 'number' },
    mandatory: true,
  }, {
    name: 'codigoDaOperacaoFiscal',
    start: 4,
    end: 7,
    format: { type: 'number' },
    mandatory: true,
  }, {
    name: 'tipoPeriodoDeEntrega',
    start: 8,
    end: 8,
    mandatory: true,
  }, {
    name: 'dataInicialDeEntrega',
    start: 9,
    end: 16,
    format: { type: 'number' },
    pattern: /^\d+$/,
  }, {
    name: 'horaInicialDeEntrega',
    start: 17,
    end: 20,
    format: { type: 'number' },
    pattern: /^\d+$/,
  }, {
    name: 'dataFinalDeEntrega',
    start: 21,
    end: 28,
    format: { type: 'number' },
    pattern: /^\d+$/,
  }, {
    name: 'horaFinalDeEntrega',
    start: 29,
    end: 32,
    format: { type: 'number' },
    pattern: /^\d+$/,
  }, {
    name: 'identificacaoLocalDeDesembarque',
    start: 23,
    end: 47,
  }, {
    name: 'calculoDeFreteDiferenciado',
    start: 48,
    end: 48,
    format: { type: 'boolean', true: 'S', false: 'N' },
    mandatory: true,
  }, {
    name: 'identificacaoTabelaDePrecoDeFrete',
    start: 49,
    end: 58,
  }, {
    name: 'cnpjDoEmissorDaNotaFiscal',
    start: 59,
    end: 73,
    format: { type: 'number' },
  }, {
    name: 'serieDaNotaFiscal',
    start: 74,
    end: 76,
  }, {
    name: 'numeroDaNotaFiscal',
    start: 77,
    end: 84,
    format: { type: 'number' },
  }, {
    name: 'cnpjDoEmissorDaNotaFiscal2',
    start: 85,
    end: 99,
    format: { type: 'number' },
  }, {
    name: 'serieDaNotaFiscal2',
    start: 100,
    end: 102,
  }, {
    name: 'numeroDaNotaFiscal2',
    start: 103,
    end: 110,
    format: { type: 'number' },
  }, {
    name: 'cnpjDoEmissorDaNotaFiscal3',
    start: 111,
    end: 125,
    format: { type: 'number' },
  }, {
    name: 'serieDaNotaFiscal3',
    start: 126,
    end: 128,
  }, {
    name: 'numeroDaNotaFiscal3',
    start: 129,
    end: 136,
    format: { type: 'number' },
  }, {
    name: 'cnpjDoEmissorDaNotaFiscal4',
    start: 137,
    end: 151,
    format: { type: 'number' },
  }, {
    name: 'serieDaNotaFiscal4',
    start: 152,
    end: 154,
  }, {
    name: 'numeroDaNotaFiscal4',
    start: 155,
    end: 162,
    format: { type: 'number' },
  }, {
    name: 'cnpjDoEmissorDaNotaFiscal5',
    start: 163,
    end: 177,
    format: { type: 'number' },
  }, {
    name: 'serieDaNotaFiscal5',
    start: 178,
    end: 180,
  }, {
    name: 'numeroDaNotaFiscal5',
    start: 181,
    end: 188,
    format: { type: 'number' },
  }, {
    name: 'valorDeDespesasAdicionais',
    start: 189,
    end: 203,
    format: { type: 'number', precision: 2 },
  }, {
    name: 'tipoDeVeiculo',
    start: 204,
    end: 208,
  }, {
    name: 'filialEmissaoConhecimento',
    start: 209,
    end: 218,
  }, {
    name: 'serieDoConhecimento',
    start: 219,
    end: 223,
  }, {
    name: 'numeroDoConhecimento',
    start: 224,
    end: 235,
  }, {
    name: 'filler',
    start: 236,
    end: 240,
  }],
};

export enum TipoPeriodoDeEntrega {
  APartirDaData = 3,
  AteAData = 2,
  NaData = 1,
  NoPeriodo = 4,
  SemData = 0,
}

export default dadosComplementaresNfSchema;
