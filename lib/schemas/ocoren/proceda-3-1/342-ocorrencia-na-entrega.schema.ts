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
  }, {
    name: 'cnpjDaEmpresaEmissora',
    start: 4,
    end: 17,
  }, {
    name: 'serie',
    start: 18,
    end: 20,
  }, {
    name: 'numero',
    start: 21,
    end: 28,
    mandatory: true,
  }, {
    name: 'codigoDeOcorrencia',
    start: 29,
    end: 30,
    mandatory: true,
  }, {
    name: 'data',
    start: 31,
    end: 38,
    mandatory: true,
  }, {
    name: 'hora',
    start: 39,
    end: 42,
  }, {
    name: 'codigoDeObservacao',
    start: 43,
    end: 44,
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
