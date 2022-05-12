import { EdiSchema } from '../../..';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import dadosDaEmbarcadora from './311-dados-da-embarcadora.schema';
import valoresTotaisDocumento from './318-valores-totais-documento.schema';

export const cabecalhoDeDocumentoSchema: EdiSchema = {
  name: 'cabecalhoDeDocumento',
  identifier: '310',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    format: Number,
  }, {
    name: 'identificacaoDeDocumento',
    start: 4,
    end: 17,
  }, {
    name: 'filler',
    start: 18,
    end: 240,
  }],
  complement: cabecalhoDeIntercambioSchema,
  includes: [
    dadosDaEmbarcadora,
    valoresTotaisDocumento,
  ],
};

export default cabecalhoDeDocumentoSchema;
