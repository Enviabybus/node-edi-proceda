import { EdiSchema } from '../../..';
import cabecalhoDeDocumentoSchema from './340-cabecalho-de-documento.schema';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';

const proceda_3_1: EdiSchema[] = [
  cabecalhoDeIntercambioSchema,
  cabecalhoDeDocumentoSchema,
];

export default proceda_3_1;
