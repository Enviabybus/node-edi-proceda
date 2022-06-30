import { EdiSchema } from '../../..';
import dadosDeNotaFiscalSchema from './313-dados-de-nota-fiscal.schema';

export const mercadoriaDaNotaFiscalSchema: EdiSchema = {
  name: 'mercadoriaDaNotaFiscal',
  identifier: '314',
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
    format: Number,
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
    format: Number,
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
    format: Number,
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
    format: Number,
  }, {
    name: 'especieDeAcondicionamento4',
    start: 167,
    end: 181,
  }, {
    name: 'mercadoriaDaNotaFiscal4',
    start: 182,
    end: 211,
  }, {
    name: 'filler',
    start: 212,
    end: 240,
  }],
  complement: dadosDeNotaFiscalSchema,
};

export default mercadoriaDaNotaFiscalSchema;
