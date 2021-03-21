import { EdiSchema } from '../../../types';

export const dadosDoConsignatario: EdiSchema = {
  name: 'dadosDoConsignatario',
  identifier: '315',
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
  }, {
    name: 'numeroDeComunicacao',
    start: 195,
    end: 229,
  }, {
    name: 'numeroEndereco',
    start: 230,
    end: 234,
  }, {
    name: 'complementoEndereco',
    start: 235,
    end: 254,
  }],
};

export default dadosDoConsignatario;
