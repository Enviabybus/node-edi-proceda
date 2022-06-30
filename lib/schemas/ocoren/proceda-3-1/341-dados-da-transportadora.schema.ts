import { EdiSchema } from '../../..';
import cabecalhoDeDocumentoSchema from './340-cabecalho-de-documento.schema';
import ocorrenciaNaEntrega from './342-ocorrencia-na-entrega.schema';

export const dadosDaTransportadora: EdiSchema = {
  name: 'dadosDaTransportadora',
  identifier: '341',
  mandatory: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
    format: Number,
  }, {
    name: 'cnpj',
    start: 4,
    end: 17,
    mandatory: true,
    format: Number,
  }, {
    name: 'razaoSocial',
    start: 18,
    end: 57,
  }, {
    name: 'filler',
    start: 58,
    end: 120,
  }],
  complement: cabecalhoDeDocumentoSchema,
  includes: [ ocorrenciaNaEntrega ],
};

export default dadosDaTransportadora;
