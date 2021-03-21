import { EdiSchema } from '../../types';

export const dadosComplementaresSchema: EdiSchema = {
  name: 'dadosComplementares',
  identifier: '308',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'email',
    start: 4,
    end: 63,
  }, {
    name: 'telefonePrincipal',
    start: 64,
    end: 98,
  }, {
    name: 'tipoDoEstabelecimento',
    start: 99,
    end: 99,
  }, {
    name: 'contribuinte',
    start: 100,
    end: 100,
    format: (v: string): boolean => /^S$/i.test(v),
  }, {
    name: 'pais',
    start: 101,
    end: 140,
  }, {
    name: 'inscricaoSuframa',
    start: 141,
    end: 160,
  }, {
    name: 'validadeInscSuframa',
    start: 161,
    end: 168,
  }, {
    name: 'codigoDoMunicipioDeOrigem',
    start: 169,
    end: 176,
  }, {
    name: 'ufInicioPrestacao',
    start: 177,
    end: 178,
  }, {
    name: 'codigoDoMunicipioDeDestino',
    start: 179,
    end: 186,
  }, {
    name: 'ufFimPrestacao',
    start: 187,
    end: 188,
  }],
};

export enum TipoDoEstabelecimento {
  Comercial = 'C',
  Industrial = 'I',
  Residencial = 'R',
}

export default dadosComplementaresSchema;
