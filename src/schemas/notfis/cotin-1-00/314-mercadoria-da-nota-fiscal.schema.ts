import { EdiDecimal } from '../../../edi/formatters';
import { EdiSchema } from '../../../';

export const mercadoriaDaNotaFiscal: EdiSchema = {
  name: 'mercadoriaDaNotaFiscal',
  identifier: '313',
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'quantidadeDeVolumes',
    start: 4,
    end: 10,
    mandatory: true,
    format: EdiDecimal(2),
  }, {
    name: 'especieDeAcondicionamento',
    start: 11,
    end: 25,
    mandatory: true,
  }, {
    name: 'mercadoriaDaNotaFiscal',
    start: 26,
    end: 55,
    mandatory: true,
  }, {
    name: 'quantidadeDeVolumes2',
    start: 56,
    end: 62,
    format: EdiDecimal(2),
  }, {
    name: 'especieDeAcondicionamento2',
    start: 63,
    end: 77,
  }, {
    name: 'mercadoriaDaNotaFiscal2',
    start: 78,
    end: 107,
  }, {
    name: 'quantidadeDeVolumes3',
    start: 108,
    end: 114,
    format: EdiDecimal(2),
  }, {
    name: 'especieDeAcondicionamento3',
    start: 115,
    end: 129,
  }, {
    name: 'mercadoriaDaNotaFiscal3',
    start: 130,
    end: 159,
  }, {
    name: 'quantidadeDeVolumes4',
    start: 160,
    end: 166,
    format: EdiDecimal(2),
  }, {
    name: 'especieDeAcondicionamento4',
    start: 167,
    end: 181,
  }, {
    name: 'mercadoriaDaNotaFiscal4',
    start: 182,
    end: 211,
  }],
};

export default mercadoriaDaNotaFiscal;
