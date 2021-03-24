import { EdiSchema } from '../../../';

export const cabecalhoDeIntercambioSchema: EdiSchema = {
  name: 'cabecalhoDeIntercambio',
  identifier: '000',
  mandatory: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
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
  }, {
    name: 'hora',
    start: 80,
    end: 83,
    mandatory: true,
  }, {
    name: 'nomeDoArquivo',
    start: 84,
    end: 95,
    mandatory: true,
  }],
};

export default cabecalhoDeIntercambioSchema;
