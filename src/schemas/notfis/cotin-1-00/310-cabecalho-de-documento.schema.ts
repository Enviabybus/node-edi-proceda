import { EdiSchema } from '../../../types';

export const cabecalhoDeDocumentoSchema: EdiSchema = {
  name: 'cabecalhoDeDocumento',
  identifier: '310',
  mandatory: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'identificacaoDeDocumento',
    start: 4,
    end: 17,
    mandatory: true,
  }],
};

export default cabecalhoDeDocumentoSchema;
