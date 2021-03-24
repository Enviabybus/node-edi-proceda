import { EdiDecimal } from '../../../edi/formatters';
import { EdiSchema } from '../../../';

export const dadosParaRedespacho: EdiSchema = {
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
  }, {
    name: 'cnpj',
    start: 44,
    end: 57,
  }, {
    name: 'inscricaoEstadual',
    start: 58,
    end: 72,
  }, {
    name: 'endereco',
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
    end: 176,
  }, {
    name: 'codigoDeMunicipio',
    start: 177,
    end: 185,
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
    name: 'chaveDocumentoAnterior',
    start: 234,
    end: 277,
  }, {
    name: 'serieDocumentoAnterior',
    start: 278,
    end: 280,
  }, {
    name: 'numeroDocumentoAnterior',
    start: 281,
    end: 289,
  }, {
    name: 'dataEmissaoDocumentoAnterior',
    start: 290,
    end: 297,
    pattern: /^\d+$/,
  }, {
    name: 'valorDocumentoAnterior',
    start: 298,
    end: 307,
    format: EdiDecimal(2),
  }],
};

export default dadosParaRedespacho;
