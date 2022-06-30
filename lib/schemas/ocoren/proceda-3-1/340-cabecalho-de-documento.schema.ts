import { EdiSchema } from '../../..';
import dadosDaTransportadora from './341-dados-da-transportadora.schema';

export const cabecalhoDeDocumentoSchema: EdiSchema = {
  name: 'cabecalhoDeDocumento',
  identifier: '340',
  mandatory: true,
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
  includes: [ dadosDaTransportadora ],
};

export default cabecalhoDeDocumentoSchema;
