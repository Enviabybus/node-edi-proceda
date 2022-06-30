import { EdiSchema } from '../../..';
import cabecalhoDeDocumentoSchema from './310-cabecalho-de-documento.schema';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import dadosDaEmbarcadoraSchema from './311-dados-da-embarcadora.schema';
import valoresTotaisDocumentoSchema from './318-valores-totais-documento.schema';

const proceda_3_10: EdiSchema[] = [
  cabecalhoDeIntercambioSchema,
  cabecalhoDeDocumentoSchema,
  dadosDaEmbarcadoraSchema,
  valoresTotaisDocumentoSchema,
];

export default proceda_3_10;
