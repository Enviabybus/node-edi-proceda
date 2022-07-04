import { EdiSchema } from '../../..';
import cabecalhoDeDocumentoSchema from './340-cabecalho-de-documento.schema';
import cabecalhoDeIntercambioSchema from './000-cabecalho-de-intercambio.schema';
import complementoDeOcorrencia from './343-complemento-de-ocorrencia.schema';
import dadosDaTransportadora from './341-dados-da-transportadora.schema';
import ocorrenciaNaEntrega from './342-ocorrencia-na-entrega.schema';

const proceda_3_1: EdiSchema[] = [
  cabecalhoDeIntercambioSchema,
  cabecalhoDeDocumentoSchema,
  dadosDaTransportadora,
  ocorrenciaNaEntrega,
  complementoDeOcorrencia,
];

export default proceda_3_1;
