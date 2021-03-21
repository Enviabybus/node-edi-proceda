import { EdiDecimal } from '../../formatters';
import { EdiSchema } from '../../types';
import dadosComplementaresNf from './307-dados-complementares-nf.schema';
import volumesDaNotaFiscal from './319-volumes-da-nota-fiscal.schema';

export const dadosDeNotaFiscal: EdiSchema = {
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
    mandatory: true,
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
    pattern: /\d{8}/,
  }, {
    name: 'naturezaDaMercadoria',
    start: 49,
    end: 63,
  }, {
    name: 'especieAcondicionamento',
    start: 64,
    end: 78,
  }, {
    name: 'volume',
    start: 79,
    end: 85,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'valorDaMercadoria',
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
    name: 'incidenciaDeIcms',
    start: 113,
    end: 113,
  }, {
    name: 'seguroEfetuado',
    start: 114,
    end: 114,
    format: (v): boolean => /S/i.test(v),
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
    name: 'valorIcmsRetidoSubst',
    start: 226,
    end: 237,
    format: EdiDecimal(2),
  }, {
    name: 'indicacaoDeBonificacao',
    start: 238,
    end: 238,
    format: (v): boolean => /S/i.test(v),
  }, {
    name: 'filler',
    start: 239,
    end: 258,
  }, {
    name: 'chaveNfe',
    start: 259,
    end: 302,
    format: Number,
  }],
  complement: dadosComplementaresNf,
  includes: [
    volumesDaNotaFiscal,
  ],
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

export enum IncidenciaDeIcms {
  Sim = 'S',
  Nao = 'N',
  Isento = 'I',
  Diferido = 'D',
  Reduzido = 'R',
  Presumido = 'P',
  Substituido = 'T',
}

export enum AcaoDoDocumento {
  Inclusao = 'I',
  ExclusaoCancelamento = 'E',
}

export default dadosDeNotaFiscal;
