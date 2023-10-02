# EDI Proceda

Essa lib tem a intenção de facilitar o parsing de arquivos de EDI simplesmente trascrevendo a documentação de cada modelo para o código.

## Instalação

```console
npm install @enviabybus/edi-proceda --save
```

## Utilização

Tendo um Schema de EDI Proceda já definido:

```js
const EDI = require('@enviabybus/edi-proceda').default;
const NotfisCotin = require('@enviabybus/schemas/notfis/cotin-1-00').default;

const notfis = fs.readFileSync('./algum-arquivo-notfis.txt').toString();
EDI.parse(NotfisCotin, notfis);
```

Exemplo de resultado:

```json
{
    "cabecalhoDeIntercambio": {
        "identificadorDeRegistro": "000",
        "identificacaoDoRemetente": "TRANSP ORIGEM",
        "identificacaoDoDestinatario": "TRANSP DESTINO",
        "data": "021018",
        "hora": "1524",
        "nomeDoArquivo": "0210181524"
    },
    "cabecalhoDeDocumento": {
        "identificadorDeRegistro": "310",
        "identificacaoDeDocumento": "021018152400"
    },
    "dadosDoRemetente": [
        {
            "identificadorDeRegistro": "311",
            "cnpj": "99985524000146",
            "inscricaoEstadual": null,
            "endereco": "RUA SERRA DE BOTUCATU",
            "cidade": "SAO PAULO",
            "cep": "03317000",
            "uf": "SP",
            "dataEmbarque": null,
            "razaoSocial": "FILIAL REMETENTE",
            "numeroEndereco": null,
            "complementoEndereco": null,
            "dadosDoDestinatario": [
                {
                    "identificadorDeRegistro": "312",
                    "razaoSocial": "PESSOA DESTINATARIO",
                    "cnpjCpf": "44664483880",
                    "inscricaoEstadual": null,
                    "logradouro": "RUA CATARINA CUBAS",
                    "bairro": "LAJEADO",
                    "cidade": "SAO JOAO DA BOA VISTA",
                    "cep": "08450350",
                    "uf": "SP",
                    "areaDeFrete": null,
                    "numeroDeComunicacao": "1936316508",
                    "identificacaoDestinatario": null,
                    "pontoDeReferencia": "193",
                    "complementoDeEndereco": null,
                    "numeroDeEndereco": null,
                    "dadosDeNotaFiscal": [
                        {
                            "identificadorDeRegistro": "313",
                            "numRomaneioColeta": "446366436",
                            "codigoRota": null,
                            "meioDeTransporte": null,
                            "tipoDoTransporte": null,
                            "tipoDeCarga": null,
                            "condicaoDeFrete": "C",
                            "serie": 21,
                            "numero": 615482,
                            "dataDeEmissao": "12092018",
                            "naturezaDaMercadoria": null,
                            "especieAcondicionamento": null,
                            "volume": 1,
                            "valorDaMercadoria": 99.34,
                            "pesoTotal": 1.3,
                            "pesoDensidadeCubagem": 0,
                            "incidenciaDeIcms": null,
                            "seguroEfetuado": null,
                            "valorDoSeguro": 0,
                            "valorASerCobrado": 0,
                            "placaCaminhaoCarreta": null,
                            "planoDeCargaRapida": null,
                            "valorFretePesoVolume": 0,
                            "valorAdValorem": 0,
                            "valorTotalDasTaxas": 0,
                            "valorTotalDoFrete": 0,
                            "acaoDoDocumento": null,
                            "valorDoIcms": 0,
                            "valorIcmsRetidoSubst": 0,
                            "indicacaoDeBonificacao": null,
                            "filler": null,
                            "chaveNfe": 4.018094796095009e+43,
                            "dadosComplementaresNf": {
                                "identificadorDeRegistro": "307",
                                "tipoPeriodoDeEntrega": "0",
                                "dataInicialDeEntrega": null,
                                "horaInicialDeEntrega": null,
                                "dataFinalDeEntrega": null,
                                "horaFinalDeEntrega": null,
                                "naturezaDaNf": null,
                                "tipoDeEntrega": null,
                                "TipoDeCarga": null,
                                "origem": null,
                                "observacaoConhecimento": "4",
                                "pedido": null,
                                "aliquotaIcms": null,
                                "baseCalculoIcms": null,
                                "cfopDaNf": null,
                                "referenciaDeEntrega": null
                            },
                            "volumesDaNotaFiscal": [
                                {
                                    "identificadorDeRegistro": "319",
                                    "cargaExpedicao": null,
                                    "peso": 0,
                                    "pesoAferido": 0,
                                    "pesoCubado": 0,
                                    "comprimento": 0,
                                    "largura": 0,
                                    "altura": 0,
                                    "codigoDeBarras": null,
                                    "canalDeVenda": null,
                                    "referenciaParceiro": null
                                }
                            ]
                        }
                    ]
                }
            ],
            "dadosDoConsignatario": {
                "identificadorDeRegistro": "315",
                "razaoSocial": "TRANSP ORIGEM",
                "cnpj": "88984738000181",
                "inscricaoEstadual": "165258305112",
                "endereco": "ALAMEDA XINGU",
                "bairro": null,
                "cidade": null,
                "cep": "06455030",
                "codigoDeMunicipio": null,
                "uf": null,
                "numeroDeComunicacao": null,
                "numeroEndereco": null,
                "complementoEndereco": null
            },
            "dadosParaRedespacho": {
                "identificadorDeRegistro": "316",
                "razaoSocial": null,
                "cnpj": null,
                "inscricaoEstadual": null,
                "endereco": null,
                "bairro": null,
                "cidade": null,
                "cep": null,
                "codigoDeMunicipio": null,
                "uf": null,
                "areaDeFrete": null,
                "numeroDeComunicacao": null,
                "chaveDocumentoAnterior": "40180912528761000108570010000003001000009884",
                "serieDocumentoAnterior": null,
                "numeroDocumentoAnterior": null,
                "dataEmissaoDocumentoAnterior": null,
                "valorDocumentoAnterior": null
            },
            "dadosDoResponsavel": {
                "identificadorDeRegistro": "317",
                "razaoSocial": "TRANSP ORIGEM",
                "cnpj": "88984738000181",
                "inscricaoEstadual": "165258305112",
                "endereco": "ALAMEDA XINGU",
                "bairro": null,
                "cidade": null,
                "cep": "06455030",
                "codigoDeMunicipio": null,
                "uf": null,
                "numeroDeComunicacao": null,
                "numeroEndereco": null,
                "complementoEndereco": null
            }
        }
    ]
}
```

## API de definição de Schema

```js
const schema = [
  {
    name: 'cabecalhoDeIntercambio',      // Nome do Registro
    identifier: '000',                   // Identificador do Registro
    mandatory: true,                     // Registro mandatório? (opcional, padrão: false)
    params: [                            // Definição dos campos
      {
        name: 'identificadorDeRegistro', // Nome do campo
        start: 1,                        // Posição inicial
        end: 3,                          // Posição final
        mandatory: true,                 // Registro mandatório? (opcional, padrão: false)
        pattern: /\d+/,                  // Validação de padrão (opcional)
      }
    ],
  },
  {
    name: 'dadosDoRemetente',
    identifier: '311',
    mandatory: true,
    multiple: true,                      // Habilita várias intercorrências do Registro, caso false só será considerado o primeiro.
    params: [{
      name: 'cep',
      start: 108,
      end: 116,
      format: Number,                    // Função de formatação
    }],
    complement: {                        // Dados complementares devem estar exatamente após a linha desse schema
      name: 'dadosComplementares',
      identifier: '308',
      params: [],
    },
    includes: [                          // Dados do destinatário pertencerão ao remetente anterior
      {
        name: 'dadosDoDestinatario',
        identifier: '308',
        mandatory: true,
        multiple: true,
        params: [],
      }
    ],
  }
]
```

## Como contribuir

Você pode ajudar:

- Definindo schemas de outros modelos de EDI
- Corrigindo possíveis bugs e melhorando o código
