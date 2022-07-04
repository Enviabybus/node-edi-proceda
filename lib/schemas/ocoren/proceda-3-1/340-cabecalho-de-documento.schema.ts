import { EdiSchema } from '../../..';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import dadosDaTransportadora from './341-dados-da-transportadora.schema';

export const cabecalhoDeDocumentoSchema: EdiSchema = {
  name: 'cabecalhoDeDocumento',
  identifier: '340',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
    format: Number,
  }, {
    name: 'identificacaoDoDocumento',
    start: 4,
    end: 17,
    mandatory: true,
  }, {
    name: 'filler',
    start: 18,
    end: 120,
  }],
  complement: cabecalhoDeIntercambioSchema,
  includes: [ dadosDaTransportadora ],
};

export default cabecalhoDeDocumentoSchema;
