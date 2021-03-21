import { EdiSchema } from '../../types';
import cabecalhoDeDocumentoSchema from './310-cabecalho-de-documento.schema';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import dadosDoRemetenteSchema from './311-dados-do-remetente.schema';
import valoresTotaisDocumento from './318-valores-totais-documento.schema';

const cotin_1_00: EdiSchema[] = [
  cabecalhoDeIntercambioSchema,
  cabecalhoDeDocumentoSchema,
  dadosDoRemetenteSchema,
  valoresTotaisDocumento,
];

export default cotin_1_00;
