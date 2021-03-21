import { EdiSchema } from '../../types';
import dadosComplementaresSchema from './308-dados-complementares.schema';
import dadosDoDestinatarioSchema from './312-dados-do-destinatario.schema';
import dadosDoConsignatario from './315-dados-do-consignatario.schema';
import dadosParaRedespacho from './316-dados-para-redespacho.schema';
import dadosDoResponsavel from './317-dados-do-responsavel.schema';

export const dadosDoRemetenteSchema: EdiSchema = {
  name: 'dadosDoRemetente',
  identifier: '311',
  mandatory: true,
  multiple: true,
  params: [{
    name: 'identificadorDeRegistro',
    start: 1,
    end: 3,
    mandatory: true,
  }, {
    name: 'cnpj',
    start: 4,
    end: 17,
    mandatory: true,
  }, {
    name: 'inscricaoEstadual',
    start: 18,
    end: 32,
  }, {
    name: 'endereco',
    start: 33,
    end: 72,
  }, {
    name: 'cidade',
    start: 73,
    end: 107,
  }, {
    name: 'cep',
    start: 108,
    end: 116,
  }, {
    name: 'uf',
    start: 117,
    end: 125,
  }, {
    name: 'dataEmbarque',
    start: 126,
    end: 133,
    pattern: /^\d{8}$/,
  }, {
    name: 'razaoSocial',
    start: 134,
    end: 173,
  }, {
    name: 'numeroEndereco',
    start: 174,
    end: 178,
  }, {
    name: 'complementoEndereco',
    start: 179,
    end: 198,
  }],
  complement: dadosComplementaresSchema,
  includes: [
    dadosDoDestinatarioSchema,
    dadosDoConsignatario,
    dadosParaRedespacho,
    dadosDoResponsavel,
  ],
};

export default dadosDoRemetenteSchema;
