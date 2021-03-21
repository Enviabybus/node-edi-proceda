import { EdiDecimal } from '../../formatters';
import { EdiSchema } from '../../types';

export const dadosComplementaresNf: EdiSchema = {
  name: 'dadosComplementaresNf',
  identifier: '307',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'tipoPeriodoDeEntrega',
    start: 4,
    end: 4,
    mandatory: true,
  }, {
    name: 'dataInicialDeEntrega',
    start: 5,
    end: 12,
    pattern: /^\d+$/,
  }, {
    name: 'horaInicialDeEntrega',
    start: 13,
    end: 16,
    pattern: /^\d+$/,
  }, {
    name: 'dataFinalDeEntrega',
    start: 17,
    end: 24,
    pattern: /^\d+$/,
  }, {
    name: 'horaFinalDeEntrega',
    start: 25,
    end: 28,
    pattern: /^\d+$/,
  }, {
    name: 'naturezaDaNf',
    start: 29,
    end: 29,
    seq: 7,
  }, {
    name: 'tipoDeEntrega',
    start: 30,
    end: 33,
    format: Number,
    seq: 7,
  }, {
    name: 'TipoDeCarga',
    start: 34,
    end: 63,
    seq: 7,
  }, {
    name: 'origem',
    start: 64,
    end: 67,
    seq: 7,
  }, {
    name: 'observacaoConhecimento',
    start: 69,
    end: 108,
    seq: 8,
  }, {
    name: 'pedido',
    start: 109,
    end: 128,
    seq: 9,
  }, {
    name: 'aliquotaIcms',
    start: 129,
    end: 132,
    seq: 10,
    format: EdiDecimal(2),
  }, {
    name: 'baseCalculoIcms',
    start: 133,
    end: 147,
    seq: 11,
    format: EdiDecimal(2),
  }, {
    name: 'cfopDaNf',
    start: 148,
    end: 152,
    seq: 12,
    format: Number,
  }, {
    name: 'referenciaDeEntrega',
    start: 152,
    end: 240,
    seq: 13,
  }],
};

export enum TipoPeriodoDeEntrega {
  NaData = 1, // Campos 3, 4, 5 e 6
  AteAData = 2, // Campos 5 e 6
}

export enum NaturezaDaNf {
  Saida = 'S', // Remessa
  Entrada = 'E', // Reversa ou coleta
  EntradaSemNotaFiscal = 'I', // Reversa ou coleta
  Vale = 'V',
}

export default dadosComplementaresNf;
