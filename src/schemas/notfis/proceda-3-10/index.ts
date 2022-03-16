import { EdiSchema } from '../../..';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import cabecalhoDeDocumentoSchema from './310-cabecalho-de-documento.schema';
import dadosDaEmbarcadoraSchema from './311-dados-da-embarcadora.schema';
import dadosDoDestinatarioSchema from './312-dados-do-destinatario.schema';
import dadosDeNotaFiscalSchema from './313-dados-de-nota-fiscal.schema';
import valoresTotaisDocumentoSchema from './318-valores-totais-documento.schema';
import dadosComplementaresNfSchema from './333-dados-complementares-nf.schema';

const proceda_3_10: EdiSchema[] = [
  cabecalhoDeIntercambioSchema,
  cabecalhoDeDocumentoSchema,
  dadosDaEmbarcadoraSchema,
  dadosDoDestinatarioSchema,
  dadosDeNotaFiscalSchema,
  dadosComplementaresNfSchema,
  valoresTotaisDocumentoSchema,
];

export default proceda_3_10;
