import { EdiDecimal } from '../../../edi/formatters';
import { EdiSchema } from '../../..';
import dadosDoDestinatarioSchema from './312-dados-do-destinatario.schema';
import dadosComplementaresNfSchema from './333-dados-complementares-nf.schema';

export const dadosDeNotaFiscalSchema: EdiSchema = {
  name: 'dadosDeNotaFiscal',
  identifier: '313',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'numRomaneioColeta',
    start: 4,
    end: 18,
  }, {
    name: 'codigoRota',
    start: 19,
    end: 25,
  }, {
    name: 'meioDeTransporte',
    start: 26,
    end: 26,
    format: Number,
  }, {
    name: 'tipoDoTransporte',
    start: 27,
    end: 27,
    format: Number,
  }, {
    name: 'tipoDeCarga',
    start: 28,
    end: 28,
    format: Number,
  }, {
    name: 'condicaoDeFrete',
    start: 29,
    end: 29,
    mandatory: true,
  }, {
    name: 'serie',
    start: 30,
    end: 32,
    format: Number,
  }, {
    name: 'numero',
    start: 33,
    end: 40,
    mandatory: true,
    format: Number,
  }, {
    name: 'dataDeEmissao',
    start: 41,
    end: 48,
    mandatory: true,
  }, {
    name: 'naturezaDaMercadoria',
    start: 49,
    end: 63,
    mandatory: true,
  }, {
    name: 'especieAcondicionamento',
    start: 64,
    end: 78,
    mandatory: true,
  }, {
    name: 'quantidadeDeVolumes',
    start: 79,
    end: 85,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'valorTotalDaNota',
    start: 86,
    end: 100,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'pesoTotal',
    start: 101,
    end: 107,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'pesoDensidadeCubagem',
    start: 108,
    end: 112,
    format: EdiDecimal(2),
  }, {
    name: 'tipoDeIcms',
    start: 113,
    end: 113,
    mandatory: true,
  }, {
    name: 'seguroEfetuado',
    start: 114,
    end: 114,
    format: (v): boolean => /S/i.test(v),
    mandatory: true,
  }, {
    name: 'valorDoSeguro',
    start: 115,
    end: 129,
    format: EdiDecimal(2),
  }, {
    name: 'valorASerCobrado',
    start: 130,
    end: 144,
    format: EdiDecimal(2),
  }, {
    name: 'placaCaminhaoCarreta',
    start: 145,
    end: 151,
  }, {
    name: 'planoDeCargaRapida',
    start: 152,
    end: 152,
    format: (v): boolean => /S/i.test(v),
  }, {
    name: 'valorFretePesoVolume',
    start: 153,
    end: 167,
    format: EdiDecimal(2),
  }, {
    name: 'valorAdValorem',
    start: 168,
    end: 182,
    format: EdiDecimal(2),
  }, {
    name: 'valorTotalDasTaxas',
    start: 183,
    end: 197,
    format: EdiDecimal(2),
  }, {
    name: 'valorTotalDoFrete',
    start: 198,
    end: 212,
    format: EdiDecimal(2),
  }, {
    name: 'acaoDoDocumento',
    start: 213,
    end: 213,
  }, {
    name: 'valorDoIcms',
    start: 214,
    end: 225,
    format: EdiDecimal(2),
  }, {
    name: 'valorDoIcmsRetido',
    start: 226,
    end: 237,
    format: EdiDecimal(2),
  }, {
    name: 'indicacaoDeBonificacao',
    start: 238,
    end: 238,
    format: (v): boolean => /S/i.test(v),
  }, {
    name: 'chaveCte',
    start: 239,
    end: 240,
  }],
  complement: dadosDoDestinatarioSchema,
  includes: [dadosComplementaresNfSchema],
};

export enum MeioDeTransporte {
  Rodoviario = '1',
  Aereo = '2',
  Maritimo = '3',
  Fluvial = '4',
  Ferroviario = '5',
}

export enum TipoDoTransporte {
  CargaFechada = '1',
  CargaFracionada = '2',
}

export enum TipoDeCarga {
  Fria = '1',
  Seca = '2',
  Mista = '3',
}

export enum CondicaoDeFrete {
  Cif = 'C',
  Fob = 'F',
}

export enum TipoDeIcms {
  AliquotaNormal = 'S',
  Diferido = 'D',
  Isento = 'N',
  Presumido = 'P',
  Reduzido = 'R',
  Substituicao = 'T',
}

export enum AcaoDoDocumento {
  Inclusao = 'I',
  ExclusaoCancelamento = 'E',
}

export default dadosDeNotaFiscalSchema;