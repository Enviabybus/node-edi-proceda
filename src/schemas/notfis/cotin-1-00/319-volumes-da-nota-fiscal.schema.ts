import { EdiDecimal } from '../../../edi/formatters';
import { EdiSchema } from '../../../types';
import mercadoriaDaNotaFiscal from './314-mercadoria-da-nota-fiscal.schema';

export const volumesDaNotaFiscal: EdiSchema = {
  name: 'volumesDaNotaFiscal',
  identifier: '319',
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'cargaExpedicao',
    start: 4,
    end: 23,
    format: Number,
  }, {
    name: 'peso',
    start: 24,
    end: 30,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'pesoAferido',
    start: 31,
    end: 37,
    format: EdiDecimal(2),
  }, {
    name: 'pesoCubado',
    start: 38,
    end: 44,
    format: EdiDecimal(2),
  }, {
    name: 'comprimento',
    start: 45,
    end: 51,
    format: EdiDecimal(3),
  }, {
    name: 'largura',
    start: 52,
    end: 58,
    format: EdiDecimal(3),
  }, {
    name: 'altura',
    start: 59,
    end: 65,
    format: EdiDecimal(3),
  }, {
    name: 'codigoDeBarras',
    start: 66,
    end: 105,
  }, {
    name: 'canalDeVenda',
    start: 106,
    end: 109,
  }, {
    name: 'referenciaParceiro',
    start: 110,
    end: 129,
  }],
  complement: mercadoriaDaNotaFiscal,
};

export default volumesDaNotaFiscal;
