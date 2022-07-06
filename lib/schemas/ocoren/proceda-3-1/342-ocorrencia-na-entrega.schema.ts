import { EdiSchema } from '../../../';
import dadosDaTransportadora from './341-dados-da-transportadora.schema';
import complementoDeOcorrencia from './343-complemento-de-ocorrencia.schema';

export const ocorrenciaNaEntrega: EdiSchema = {
  name: 'ocorrenciaNaEntrega',
  identifier: '342',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
    format: Number,
  }, {
    name: 'cnpjDaEmpresaEmissora',
    start: 4,
    end: 17,
    format: Number,
  }, {
    name: 'serie',
    start: 18,
    end: 20,
    format: Number,
  }, {
    name: 'numero',
    start: 21,
    end: 28,
    mandatory: true,
    format: Number,
  }, {
    name: 'codigoDeOcorrencia',
    start: 29,
    end: 30,
    mandatory: true,
    format: Number,
  }, {
    name: 'data',
    start: 31,
    end: 38,
    mandatory: true,
    format: Number,
  }, {
    name: 'hora',
    start: 39,
    end: 42,
    format: Number,
  }, {
    name: 'codigoDeObservacao',
    start: 43,
    end: 44,
    format: Number,
  }, {
    name: 'comentarios',
    start: 45,
    end: 114,
  }, {
    name: 'filler',
    start: 115,
    end: 120,
  }],
  complement: dadosDaTransportadora,
  includes: [complementoDeOcorrencia],
};

export enum CodigoDeObservacao {
  RecusaTotal = '01',
  RecusaParcial = '02',
  EntregaPorAcordo = '03',
}

export default ocorrenciaNaEntrega;
