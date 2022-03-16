import { EdiSchema } from '../../..';
import dadosDeNotaFiscalSchema from './313-dados-de-nota-fiscal.schema';

export const dadosDoResponsavelSchema: EdiSchema = {
  name: 'dadosDoResponsavel',
  identifier: '317',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    format: Number,
    mandatory: true,
  }, {
    name: 'razaoSocial',
    start: 4,
    end: 43,
    mandatory: true,
  }, {
    name: 'cnpj',
    start: 44,
    end: 57,
    format: Number,
    mandatory: true,
  }, {
    name: 'inscricaoEstadual',
    start: 58,
    end: 72,
  }, {
    name: 'logradouro',
    start: 73,
    end: 112,
    mandatory: true,
  }, {
    name: 'bairro',
    start: 113,
    end: 132,
  }, {
    name: 'cidade',
    start: 133,
    end: 167,
    mandatory: true,
  }, {
    name: 'cep',
    start: 168,
    end: 176,
    mandatory: true,
  }, {
    name: 'codigoDeMunicipio',
    start: 177,
    end: 185,
  }, {
    name: 'uf',
    start: 186,
    end: 194,
    mandatory: true,
  }, {
    name: 'numeroDeComunicacao',
    start: 195,
    end: 229,
  }, {
    name: 'filler',
    start: 230,
    end: 240,
  }],
  complement: dadosDeNotaFiscalSchema,
};

export default dadosDoResponsavelSchema;
