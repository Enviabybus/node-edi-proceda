import { EdiSchema } from '../../..';

export const cabecalhoDeIntercambioSchema: EdiSchema = {
  name: 'cabecalhoDeIntercambio',
  identifier: '000',
  mandatory: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
    format: Number,
  }, {
    name: 'identificacaoDoRemetente',
    start: 4,
    end: 38,
    mandatory: true,
  }, {
    name: 'identificacaoDoDestinatario',
    start: 39,
    end: 73,
    mandatory: true,
  }, {
    name: 'data',
    start: 74,
    end: 79,
    mandatory: true,
    format: Number,
  }, {
    name: 'hora',
    start: 80,
    end: 83,
    mandatory: true,
    format: Number,
  }, {
    name: 'identificacaoDoIntercambio',
    start: 84,
    end: 95,
    mandatory: true,
  }, {
    name: 'filler',
    start: 96,
    end: 120,
  }],
};

export default cabecalhoDeIntercambioSchema;
