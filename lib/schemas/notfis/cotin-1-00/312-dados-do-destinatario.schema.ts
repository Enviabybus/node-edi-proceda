import { EdiSchema } from '../../../';
import dadosComplementaresSchema from './308-dados-complementares.schema';
import dadosDeNotaFiscal from './313-dados-de-nota-fiscal.schema';

export const dadosDoDestinatarioSchema: EdiSchema = {
  name: 'dadosDoDestinatario',
  identifier: '312',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'razaoSocial',
    start: 4,
    end: 43,
  }, {
    name: 'cnpjCpf',
    start: 44,
    end: 57,
    mandatory: true,
    pattern: /^\d+$/,
  }, {
    name: 'inscricaoEstadual',
    start: 58,
    end: 72,
  }, {
    name: 'logradouro',
    start: 73,
    end: 112,
  }, {
    name: 'bairro',
    start: 113,
    end: 132,
  }, {
    name: 'cidade',
    start: 133,
    end: 167,
  }, {
    name: 'cep',
    start: 168,
    end: 185,
    mandatory: true,
  }, {
    name: 'uf',
    start: 186,
    end: 194,
  }, {
    name: 'areaDeFrete',
    start: 195,
    end: 198,
  }, {
    name: 'numeroDeComunicacao',
    start: 199,
    end: 233,
  }, {
    name: 'identificacaoDestinatario',
    start: 234,
    end: 234,
  }, {
    name: 'pontoDeReferencia',
    start: 235,
    end: 240,
  }, {
    name: 'complementoDeEndereco',
    start: 241,
    end: 294,
  }, {
    name: 'numeroDeEndereco',
    start: 295,
    end: 300,
  }],
  complement: dadosComplementaresSchema,
  includes: [
    dadosDeNotaFiscal,
  ],
};

export enum IdentificacaoDestinatario {
  Cnpj = '1',
  Cpf = '2',
  CodigoDoCliente = '3',
}

export default dadosDoDestinatarioSchema;
