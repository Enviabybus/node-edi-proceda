import { EdiSchema } from '../../../';
import ocorrenciaNaEntrega from './342-ocorrencia-na-entrega.schema';

export const complementoDeOcorrencia: EdiSchema = {
  name: 'complementoDeOcorrencia',
  identifier: '343',
  mandatory: false,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
    format: Number,
  }, {
    name: 'cnpjDaEmpresaContratanteDoFrete',
    start: 4,
    end: 17,
    format: Number,
  }, {
    name: 'filialEmissoraDoConhecimento',
    start: 18,
    end: 27,
  }, {
    name: 'serieDoConhecimento',
    start: 28,
    end: 32,
  }, {
    name: 'numeroDoConhecimento',
    start: 33,
    end: 44,
  }, {
    name: 'filler',
    start: 45,
    end: 120,
    mandatory: true,
  }],
  complement: ocorrenciaNaEntrega,
};

export default complementoDeOcorrencia;
