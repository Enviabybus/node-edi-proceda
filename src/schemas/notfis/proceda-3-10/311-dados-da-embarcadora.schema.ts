import { EdiSchema } from '../../..';
import cabecalhoDeDocumentoSchema from './310-cabecalho-de-documento.schema';
import dadosDoDestinatarioSchema from './312-dados-do-destinatario.schema';

export const dadosDaEmbarcadoraSchema: EdiSchema = {
  name: 'dadosDaEmbarcadora',
  identifier: '311',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    format: Number,
    mandatory: true,
  }, {
    name: 'cnpj',
    start: 4,
    end: 17,
    mandatory: true,
  }, {
    name: 'inscricaoEstadualEmbarcadora',
    start: 18,
    end: 32,
  }, {
    name: 'logradouro',
    start: 33,
    end: 72,
  }, {
    name: 'municipio',
    start: 73,
    end: 107,
  }, {
    name: 'codigoPostal',
    start: 108,
    end: 116,
  }, {
    name: 'uf',
    start: 117,
    end: 125,
  }, {
    name: 'dataDoEmbarqueDasMercadorias',
    start: 126,
    end: 133,
    mandatory: true,
  }, {
    name: 'razaoSocial',
    start: 134,
    end: 173,
    mandatory: true,
  }, {
    name: 'filler',
    start: 174,
    end: 240,
  }],
  complement: cabecalhoDeDocumentoSchema,
  includes: [
    dadosDoDestinatarioSchema,
  ],
};

export default dadosDaEmbarcadoraSchema;
