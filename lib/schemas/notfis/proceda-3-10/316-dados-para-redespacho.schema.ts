import { EdiSchema } from '../../..';
import dadosDaEmbarcadoraSchema from './311-dados-da-embarcadora.schema';

export const dadosParaRedespachoSchema: EdiSchema = {
  name: 'dadosParaRedespacho',
  identifier: '316',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
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
    mandatory: true,
  }, {
    name: 'inscricaoEstadual',
    start: 58,
    end: 72,
  }, {
    name: 'endereco',
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
    name: 'areaDeFrete',
    start: 195,
    end: 198,
  }, {
    name: 'numeroDeComunicacao',
    start: 199,
    end: 233,
  }, {
    name: 'filler',
    start: 234,
    end: 340,
  }],
  complement: dadosDaEmbarcadoraSchema,
};

export default dadosParaRedespachoSchema;
