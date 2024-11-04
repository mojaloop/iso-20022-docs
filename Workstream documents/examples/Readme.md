# ISO20022 Message Payload examples
Here is a series of Audit Topic messages, that capture the headers and payloads of the ISO 20022 messages in Mojaloop.
All these payloads are in the JSON formatted ISO 20022 standard.

## Discovery
### **PUT /parties acmt.024.001.04**

```json
[
    {
        "partitionID": 5,
        "offset": 27,
        "timestamp": 1730725057487,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "51ed0e684340297457943a76fb802e9b",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "195bc1a7-47d9-43aa-b472-6bef7725e9f7",
                "content": {
                    "headers": {
                        "host": "extapi.region-stg.devbaremetal.moja-onprem.net",
                        "content-type": "application/vnd.interoperability.iso20022.parties+json;version=1.0",
                        "date": "Mon, 04 Nov 2024 12:57:37 GMT",
                        "fspiop-source": "test-mwk-dfsp",
                        "fspiop-destination": "test-zmw-dfsp",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiJmNzIzMzhmMDA4ZWI5YWIzIn0=,tx_callback_start_ts=1730725057316",
                        "traceparent": "00-51ed0e684340297457943a76fb802e9b-f72338f008eb9ab3-33",
                        "fspiop-http-method": "PUT",
                        "fspiop-uri": "/parties/MSISDN/16665551002",
                        "fspiop-signature": "{\"signature\":\"ai6RJJ_m4vshb3v4YzjgIi4v1N6Jy4DUOhKzNc24LVtj0k6qMxKboRbjvgwYB1k-SASJNeqkCs1LFDfbXXcuPoL1nLLd6JEmXl0KT9u5__ryaVxPkTdk3lqodrltilpvzoRnlcWys7ToeTOaBRqYtmt0D5EcIJttlrJEgDbNrmhaQZ00oLVc_eSX-3wQAKE5Fj6wxWpcnWHy_T6f_G-gDlpde13EAz1JD2XWASmuvvHCq0KbJHX8EOsBKjTfwJxxUvDDzKsYuBGC4CKkg4uCKyymzDgh8viPeIoRztLgIXwqZe8khDCjGUZ-HGl1ABujfnBeOIo9keZ6CnXYMSBKzw\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvcGFydGllcy9NU0lTRE4vMTY2NjU1NTEwMDIiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQVVQiLCJGU1BJT1AtU291cmNlIjoidGVzdC1td2stZGZzcCIsIkZTUElPUC1EZXN0aW5hdGlvbiI6InRlc3Qtem13LWRmc3AiLCJEYXRlIjoiTW9uLCAwNCBOb3YgMjAyNCAxMjo1NzozNyBHTVQifQ\"}",
                        "traceid": "28a933e1-3733-407a-a210-76d3a514b825",
                        "fspiop-proxy": "proxy-mwk",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiZDM4ZGIwMmUtNGQ3Mi00MzA0LWFlMjItNmJhZDNjNWUxOWZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiMzIxMjQ1ZjAtMDU1My00YjEzLWJkMTYtM2U5NDc2OGY1N2NlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktbXdrIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS4zOC4xNCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1wcm94eS1td2siLCJjbGllbnRBZGRyZXNzIjoiMTAuMS4zOC4xNCIsImNsaWVudF9pZCI6InByb3h5LW13ayJ9.rdWJIwPtM3wVMniF05WmkZ8ZrwqwvxrELqd8GYbqG2cSaPJEfEMJzlw_lo1QgJ5zaZe5BQd9mJ88FKhOqKKZLZ_t2MFGaBgR0o7RBqtTm9nWhs1rttdqf9f25ni_pirisQ2ATkp-6Qcqtmnss9wOsx71NxrkEGKnCO4-cohumIskA0un0jVOHM1FUbY3xpBEWSbcVQnpAkX2H5FCIKGX5bnOUJv3PAK0cMQh5WQWxsjZ8IWFQ1xOuKzRC2XbucFIo6QXu_ckQau1kYTjZCySuKlOu_kg5VT-saj4HBc93Bja-rV0PJbWsLRri0f4kuxoXCVlORgudQuCHPJLSTIKMg",
                        "user-agent": "axios/1.7.7",
                        "content-length": "469",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-request-id": "8ee76034-cbcc-4845-958b-1cad7dfabf0c",
                        "x-envoy-attempt-count": "1",
                        "x-envoy-internal": "true",
                        "x-b3-traceid": "b47b7b858718cf516ced20442a3cd0d2",
                        "x-b3-spanid": "d2bb8e6d6abd7a66",
                        "x-b3-parentspanid": "6ced20442a3cd0d2",
                        "x-b3-sampled": "0"
                    },
                    "payload": {
                        "Assgnmt": {
                            "MsgId": "01JBVM14S6SC453EY9XB9GXQB5",
                            "CreDtTm": "2024-11-04T12:57:37.318Z",
                            "Assgnr": {
                                "Agt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-mwk-dfsp"
                                        }
                                    }
                                }
                            },
                            "Assgne": {
                                "Agt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-zmw-dfsp"
                                        }
                                    }
                                }
                            }
                        },
                        "Rpt": {
                            "Vrfctn": true,
                            "OrgnlId": "MSISDN/16665551002",
                            "UpdtdPtyAndAcctId": {
                                "Pty": {
                                    "Id": {
                                        "PrvtId": {
                                            "Othr": {
                                                "SchmeNm": {
                                                    "Prtry": "MSISDN"
                                                },
                                                "Id": "16665551002"
                                            }
                                        }
                                    },
                                    "Nm": "Chikondi Banda"
                                },
                                "Agt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-mwk-dfsp"
                                        }
                                    }
                                },
                                "Acct": {
                                    "Ccy": "MWK"
                                }
                            }
                        }
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "8775285c-5fd8-4bcb-b3a8-7c6466a08c42",
                        "type": "audit",
                        "action": "start",
                        "createdAt": "2024-11-04T12:57:37.486Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "PartiesByTypeAndIDPut",
                        "traceId": "51ed0e684340297457943a76fb802e9b",
                        "spanId": "d171f0ea1b2b2183",
                        "sampled": 1,
                        "flags": "33",
                        "parentSpanId": "f72338f008eb9ab3",
                        "startTimestamp": "2024-11-04T12:57:37.483Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiJkMTcxZjBlYTFiMmIyMTgzIn0=,tx_callback_start_ts=1730725057316",
                            "transactionType": "party",
                            "transactionAction": "put",
                            "source": "test-mwk-dfsp",
                            "destination": "test-zmw-dfsp"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "d171f0ea1b2b2183"
                            },
                            "tx_callback_start_ts": "1730725057316"
                        }
                    },
                    "protocol.createdAt": 1730725057487
                }
            },
            "encoding": "json"
        }
    }
]
```

## Conversion Agreement
### **POST /fxQuotes pacs.091.001**
```json
[
    {
        "partitionID": 5,
        "offset": 28,
        "timestamp": 1730725059651,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "f84e786b7db78d3b4625469372b577ea",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "869c3040-e7f4-4448-8a7e-11e9787deb75",
                "content": {
                    "headers": {
                        "host": "extapi.region-stg.devbaremetal.moja-onprem.net",
                        "accept": "application/vnd.interoperability.iso20022.fxQuotes+json;version=2",
                        "content-type": "application/vnd.interoperability.iso20022.fxQuotes+json;version=2.0",
                        "date": "Mon, 04 Nov 2024 12:57:39 GMT",
                        "fspiop-source": "test-zmw-dfsp",
                        "fspiop-destination": "test-fxp",
                        "fspiop-http-method": "POST",
                        "fspiop-signature": "{\"signature\":\"L7224sG2zNFiLZAZnVDqY4bIupGn6XQ7jEaS7ozMHl4Rpt9ak9pvAfEoT3lD95-jlZ_KifHygO_GgZP-n1EkhuevQC4g6lqT9PmHMsvj-niYIUiDtg91otj-RAKff_T7ybjq4i3FByzKH6chg99a0mO5R6aRuy60CxbNKu0off1wBiHgP7aX2Pu29Gjio1MM2mU4LjPxJjMth4Pd1ZHUsVWgEpTauCuM7ZyGAYxHSUB-NC0oaNYl8dWNaJDh9WAAP_DhwiaOhpGQjhdmuX9Hzg11B6QOru8RbQWOqdrjMrZV7JkfBAEQvUUN2liWSJmI2qdM-wN8Eb58U1jFQyyTTA\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvZnhRdW90ZXMiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQT1NUIiwiRlNQSU9QLVNvdXJjZSI6InRlc3Qtem13LWRmc3AiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LWZ4cCIsIkRhdGUiOiJNb24sIDA0IE5vdiAyMDI0IDEyOjU3OjM5IEdNVCJ9\"}",
                        "fspiop-uri": "/fxQuotes",
                        "traceparent": "00-f84e786b7db78d3b4625469372b577ea-089dab8d065c324d-00",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiIwODlkYWI4ZDA2NWMzMjRkIn0=",
                        "fspiop-proxy": "proxy-zmw",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiNzU3NDJkNTQtOTJlYS00ZTEwLTg5ZmEtYTMwOTQxMDZjOTkwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiNmE0MjcxNjItNjEzNi00ZDUxLTlkOGYtMDhhOGMwNGQ2NWQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktem13IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS41NC4yMTAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcHJveHktem13IiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNTQuMjEwIiwiY2xpZW50X2lkIjoicHJveHktem13In0.p4y7OAhCKRwUkb-JovV8fLwQo1JmewEqIu6sK0ukgssoxpG8DjDHCxG_uDmBod81CZIG4ixPLxh9SeeukR_pnJer9izaGMGVzxpTGoR4OjILZcIkf2zHEBM1yoEmzawyPIqzaY75MsFlbKQUqP3kplc_4oo3EqDm5H2WFF5XSdBaROUvHkykoPngq6ZQDQt3y7hHAExC5579sxMyLz2W7aAB_NBMZAZxbRdIyNBiYVOw7oDPw0xMuQXfeeskDe6Sz7309r2v9d09ytupNY5C4jjW4kctJHO0ghuMT386pPsIFDdpgwzrXqJ8GsQBVgPYT-SUcJf7SOenKTmn4_M1dw",
                        "user-agent": "axios/1.7.7",
                        "content-length": "827",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-request-id": "d94772a0-1af7-4ea3-85e8-109a65e79771",
                        "x-envoy-attempt-count": "1",
                        "x-envoy-internal": "true",
                        "x-b3-traceid": "b45a7cb1c5bdb347551126fb3db54692",
                        "x-b3-spanid": "f9cac12512ef3898",
                        "x-b3-parentspanid": "551126fb3db54692",
                        "x-b3-sampled": "0"
                    },
                    "payload": {
                        "GrpHdr": {
                            "MsgId": "01JBVM16V3Q4MSV8KTG0BRJGZ2",
                            "CreDtTm": "2024-11-04T12:57:39.427Z",
                            "NbOfTxs": "1",
                            "SttlmInf": {
                                "SttlmMtd": "CLRG"
                            },
                            "PmtInstrXpryDtTm": "2024-11-04T12:58:39.425Z"
                        },
                        "CdtTrfTxInf": {
                            "PmtId": {
                                "TxId": "01JBVM16V1ZXP2DM34BQT40NW9",
                                "InstrId": "01JBVM16V1ZXP2DM34BQT40NWA",
                                "EndToEndId": "01JBVM13SQYP507JB1DYBZVCMF"
                            },
                            "Dbtr": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-zmw-dfsp"
                                    }
                                }
                            },
                            "UndrlygCstmrCdtTrf": {
                                "Dbtr": {
                                    "Id": {
                                        "OrgId": {
                                            "Othr": {
                                                "Id": "test-zmw-dfsp"
                                            }
                                        }
                                    }
                                },
                                "DbtrAgt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-zmw-dfsp"
                                        }
                                    }
                                },
                                "Cdtr": {
                                    "Id": {
                                        "OrgId": {
                                            "Othr": {
                                                "Id": "test-fxp"
                                            }
                                        }
                                    }
                                },
                                "CdtrAgt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-fxp"
                                        }
                                    }
                                },
                                "InstdAmt": {
                                    "Ccy": "ZMW",
                                    "ActiveOrHistoricCurrencyAndAmount": "21"
                                }
                            },
                            "Cdtr": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-fxp"
                                    }
                                }
                            },
                            "IntrBkSttlmAmt": {
                                "Ccy": "MWK",
                                "ActiveCurrencyAndAmount": "0"
                            },
                            "InstrForCdtrAgt": {
                                "InstrInf": "SEND"
                            }
                        }
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "6eb8d05d-2e52-4c85-8ed0-934825b048f5",
                        "type": "audit",
                        "action": "start",
                        "createdAt": "2024-11-04T12:57:39.651Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "",
                        "traceId": "f84e786b7db78d3b4625469372b577ea",
                        "spanId": "5564997b64fb41a7",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "089dab8d065c324d",
                        "startTimestamp": "2024-11-04T12:57:39.649Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiI1NTY0OTk3YjY0ZmI0MWE3In0=",
                            "transactionType": "quote",
                            "transactionAction": "post",
                            "source": "test-zmw-dfsp",
                            "destination": "test-fxp"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "5564997b64fb41a7"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725059651
                }
            },
            "encoding": "json"
        }
    }
]
```

### **PUT /fxQuote pacs.092.001**
```json
[
    {
        "partitionID": 7,
        "offset": 8,
        "timestamp": 1730725059877,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "44bd8f9ee84716cca7860f25ab7fa09f",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "b6c91d02-366e-44b4-8e02-683da37961c9",
                "content": {
                    "headers": {
                        "host": "extapi.region-stg.devbaremetal.moja-onprem.net",
                        "content-type": "application/vnd.interoperability.iso20022.fxQuotes+json;version=2.0",
                        "date": "Mon, 04 Nov 2024 12:57:39 GMT",
                        "fspiop-source": "test-fxp",
                        "fspiop-destination": "test-zmw-dfsp",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUwODYsImlhdCI6MTczMDcyNDc4NiwianRpIjoiNTdlMzQxNjAtNzQxYS00OWFkLTlkNmQtMGE5N2QyZjZhY2JhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiZDViNGU1MjgtYTMyMC00NmM5LThlYzMtYWU2MWJmZjczOTVlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGVzdC1meHAiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZGZzcHMiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTAuMS42NS43NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRlc3QtZnhwIiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNjUuNzQiLCJjbGllbnRfaWQiOiJ0ZXN0LWZ4cCJ9.7iOnEXXzfidbnqcfDRaVSoNRXOV1MAZ2E1a35kaykDdcjgR14Ol6GPDB-6jQUNE5Me2K2VL05YBryEwfbg85Uk7n3gFks6mmp9kjxza2TPZKiBVZ5WaoEMm8IV1uEIctG0ir8e_DlBfodmKbP2nHITnxbsqWa4Ptc1z5UVBvxj7rCtX7N4UfjdQjljNfYwYG3Z2ebHKoc8-UrTckPepB6h_6Eh5_F2hPKQBLooTS1M0BBlivOrYlEE7Wx3vOjejppIHCZD4hLOai6j1RStqugEoNnGfGEiqj0B89TkhLs_JdpFkCRjiydkVYI_jbesvBOKx24dLtEf9x8s8Aei7Plg",
                        "fspiop-http-method": "PUT",
                        "fspiop-uri": "/fxQuotes/01JBVM16V1ZXP2DM34BQT40NW9",
                        "fspiop-signature": "{\"signature\":\"mJKJ3UwkfTI_7Ash2lsYGm6UVZUx15EqKHE6jffYttkFSattlvGzm4mG0KDKRSp2zMymgmPRo6-EDOW2WS3hEjmuDxb8pYB5o15qWEqYxn_6AH0w8Rnj4n13-sxRVlzyU_3VqSX6bniPOYf9fc2IEGD5-gZJ1o4m6XGqOMKvkaZanMp7eEc5LaJWjs-5djoby-Ze-i5TanWZ3S5LvWjE0EnSOGLY-Vr2QBafgaGYY-l8MiPz2_YYswlzoAZGc7dE4O2Ws_ZERjUE4Ok3iIyu7cBD20uI1fSUsYu_REipIIZ740mhm3B6r0enVk_G2SJSUI9kUJOCoR7F8t7V_OYnfA\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvZnhRdW90ZXMvMDFKQlZNMTZWMVpYUDJETTM0QlFUNDBOVzkiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQVVQiLCJGU1BJT1AtU291cmNlIjoidGVzdC1meHAiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LXptdy1kZnNwIiwiRGF0ZSI6Ik1vbiwgMDQgTm92IDIwMjQgMTI6NTc6MzkgR01UIn0\"}",
                        "content-length": "865",
                        "x-forwarded-for": "76.212.95.237",
                        "x-forwarded-proto": "https",
                        "x-envoy-external-address": "76.212.95.237",
                        "x-request-id": "2a398d71-a8eb-4e37-8ab0-2134542b1bad",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "b22f78d2580c0812db4294121550e411",
                        "x-b3-spanid": "778142aa70ea4875",
                        "x-b3-parentspanid": "db4294121550e411",
                        "x-b3-sampled": "0"
                    },
                    "payload": {
                        "GrpHdr": {
                            "MsgId": "01JBVM176FTHB9F2ZQJJ7AFCN8",
                            "CreDtTm": "2024-11-04T12:57:39.791Z",
                            "NbOfTxs": "1",
                            "SttlmInf": {
                                "SttlmMtd": "CLRG"
                            },
                            "PmtInstrXpryDtTm": "2024-11-04T12:58:39.425Z"
                        },
                        "CdtTrfTxInf": {
                            "VrfctnOfTerms": {
                                "Sh256Sgntr": "KVHFmdTD6Ao9lh5UybQjsxk8YoXFt3HgA3WvR6j3X_s"
                            },
                            "PmtId": {
                                "InstrId": "01JBVM16V1ZXP2DM34BQT40NWA",
                                "TxId": "01JBVM13SQYP507JB1DYBZVCMF"
                            },
                            "Dbtr": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-zmw-dfsp"
                                    }
                                }
                            },
                            "UndrlygCstmrCdtTrf": {
                                "Dbtr": {
                                    "Id": {
                                        "OrgId": {
                                            "Othr": {
                                                "Id": "test-zmw-dfsp"
                                            }
                                        }
                                    }
                                },
                                "DbtrAgt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-zmw-dfsp"
                                        }
                                    }
                                },
                                "Cdtr": {
                                    "Id": {
                                        "OrgId": {
                                            "Othr": {
                                                "Id": "test-fxp"
                                            }
                                        }
                                    }
                                },
                                "CdtrAgt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-fxp"
                                        }
                                    }
                                },
                                "InstdAmt": {
                                    "Ccy": "ZMW",
                                    "ActiveOrHistoricCurrencyAndAmount": "21"
                                }
                            },
                            "Cdtr": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-fxp"
                                    }
                                }
                            },
                            "IntrBkSttlmAmt": {
                                "Ccy": "MWK",
                                "ActiveCurrencyAndAmount": "1080"
                            },
                            "InstrForCdtrAgt": {
                                "InstrInf": "SEND"
                            }
                        }
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "164083ac-265a-4a96-96b8-438e4078c85c",
                        "type": "audit",
                        "action": "start",
                        "createdAt": "2024-11-04T12:57:39.877Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "FxQuotesByIdPut",
                        "traceId": "44bd8f9ee84716cca7860f25ab7fa09f",
                        "spanId": "cdb4e772d529a966",
                        "startTimestamp": "2024-11-04T12:57:39.875Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiJjZGI0ZTc3MmQ1MjlhOTY2In0=",
                            "transactionType": "quote",
                            "transactionAction": "put",
                            "transactionId": "01JBVM16V1ZXP2DM34BQT40NW9",
                            "quoteId": "01JBVM16V1ZXP2DM34BQT40NW9",
                            "source": "test-fxp",
                            "destination": "test-zmw-dfsp"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "cdb4e772d529a966"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725059877
                }
            },
            "encoding": "json"
        }
    }
]
```

## Agreement of Terms
### **POST /quotes pacs.081.001**
```json
[
    {
        "partitionID": 9,
        "offset": 124,
        "timestamp": 1730725062202,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "ef60e64a18429bcd31e647313c1ca3bb",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "550ebef5-78a9-4cf1-b7cb-3e65888d0992",
                "content": {
                    "headers": {
                        "host": "extapi.region-stg.devbaremetal.moja-onprem.net",
                        "accept": "application/vnd.interoperability.iso20022.quotes+json;version=1",
                        "content-type": "application/vnd.interoperability.iso20022.quotes+json;version=1.0",
                        "date": "Mon, 04 Nov 2024 12:57:42 GMT",
                        "fspiop-source": "test-zmw-dfsp",
                        "fspiop-destination": "test-mwk-dfsp",
                        "fspiop-http-method": "POST",
                        "fspiop-signature": "{\"signature\":\"iAWJCEV8lw0B1hkO9cG9UDWGrj6SvEF9Zwdog5J_zUHSoSWlWhl9uV_Xc656C6_kOlCuvmCU5yxB8ziW3QMUNDor2Z_EimXSh8O3V2zEU1i96a7s5VothYjPw3qhBeVx-tQlMokP_hVlKAGUbQo_66MPB77tSNpEI9yKehamr_FUasjLXDx7UxXKoq0hN1d_5LaKq1P0ZnchPKhVxceDTAbxOu98Fiwrb6kq8Ajm0AmxxLBJnwfQfcFStFXYUirtjTrn-4VTfT9JuTkwT9nYXgOXgThOt0lH5rmbsKHLf7nLsKKVuQpK9HwWJGKrjWd8KVn9rM6WtodbhQFyndKhZA\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvcXVvdGVzIiwiRlNQSU9QLUhUVFAtTWV0aG9kIjoiUE9TVCIsIkZTUElPUC1Tb3VyY2UiOiJ0ZXN0LXptdy1kZnNwIiwiRlNQSU9QLURlc3RpbmF0aW9uIjoidGVzdC1td2stZGZzcCIsIkRhdGUiOiJNb24sIDA0IE5vdiAyMDI0IDEyOjU3OjQyIEdNVCJ9\"}",
                        "fspiop-uri": "/quotes",
                        "traceparent": "00-ef60e64a18429bcd31e647313c1ca3bb-a20cfb7e8c12477a-00",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiJhMjBjZmI3ZThjMTI0NzdhIn0=",
                        "fspiop-proxy": "proxy-zmw",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiNzU3NDJkNTQtOTJlYS00ZTEwLTg5ZmEtYTMwOTQxMDZjOTkwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiNmE0MjcxNjItNjEzNi00ZDUxLTlkOGYtMDhhOGMwNGQ2NWQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktem13IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS41NC4yMTAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcHJveHktem13IiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNTQuMjEwIiwiY2xpZW50X2lkIjoicHJveHktem13In0.p4y7OAhCKRwUkb-JovV8fLwQo1JmewEqIu6sK0ukgssoxpG8DjDHCxG_uDmBod81CZIG4ixPLxh9SeeukR_pnJer9izaGMGVzxpTGoR4OjILZcIkf2zHEBM1yoEmzawyPIqzaY75MsFlbKQUqP3kplc_4oo3EqDm5H2WFF5XSdBaROUvHkykoPngq6ZQDQt3y7hHAExC5579sxMyLz2W7aAB_NBMZAZxbRdIyNBiYVOw7oDPw0xMuQXfeeskDe6Sz7309r2v9d09ytupNY5C4jjW4kctJHO0ghuMT386pPsIFDdpgwzrXqJ8GsQBVgPYT-SUcJf7SOenKTmn4_M1dw",
                        "user-agent": "axios/1.7.7",
                        "content-length": "687",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-request-id": "c3f2c0e6-26ae-4e63-b9a5-c3be0fef9b06",
                        "x-envoy-attempt-count": "1",
                        "x-envoy-internal": "true",
                        "x-b3-traceid": "169fabe8144038cfe4dcfde09486ee2d",
                        "x-b3-spanid": "fc7ce40fe2eb2d6d",
                        "x-b3-parentspanid": "e4dcfde09486ee2d",
                        "x-b3-sampled": "0"
                    },
                    "payload": {
                        "GrpHdr": {
                            "MsgId": "01JBVM19DJQ96BS9X6VA5AMW2Y",
                            "CreDtTm": "2024-11-04T12:57:42.066Z",
                            "NbOfTxs": "1",
                            "PmtInstrXpryDtTm": "2024-11-04T12:58:42.063Z",
                            "SttlmInf": {
                                "SttlmMtd": "CLRG"
                            }
                        },
                        "CdtTrfTxInf": {
                            "PmtId": {
                                "TxId": "01JBVM19DFKNRWC21FGJNTHRAT",
                                "EndToEndId": "01JBVM13SQYP507JB1DYBZVCMF"
                            },
                            "Cdtr": {
                                "Id": {
                                    "PrvtId": {
                                        "Othr": {
                                            "SchmeNm": {
                                                "Prtry": "MSISDN"
                                            },
                                            "Id": "16665551002"
                                        }
                                    }
                                }
                            },
                            "CdtrAgt": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-mwk-dfsp"
                                    }
                                }
                            },
                            "Dbtr": {
                                "Id": {
                                    "PrvtId": {
                                        "Othr": {
                                            "SchmeNm": {
                                                "Prtry": "MSISDN"
                                            },
                                            "Id": "16135551001"
                                        }
                                    }
                                },
                                "Name": "string"
                            },
                            "DbtrAgt": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-zmw-dfsp"
                                    }
                                }
                            },
                            "IntrBkSttlmAmt": {
                                "Ccy": "MWK",
                                "ActiveCurrencyAndAmount": "1080"
                            },
                            "Purp": {
                                "Prtry": "TRANSFER"
                            },
                            "ChrgBr": "CRED"
                        }
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "c88a3911-4bce-48ff-a405-8c645453e885",
                        "type": "audit",
                        "action": "start",
                        "createdAt": "2024-11-04T12:57:42.202Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "QuotesPost",
                        "traceId": "ef60e64a18429bcd31e647313c1ca3bb",
                        "spanId": "0930d71572d04827",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "a20cfb7e8c12477a",
                        "startTimestamp": "2024-11-04T12:57:42.200Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiIwOTMwZDcxNTcyZDA0ODI3In0=",
                            "transactionType": "quote",
                            "transactionAction": "post",
                            "source": "test-zmw-dfsp",
                            "destination": "test-mwk-dfsp"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "0930d71572d04827"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725062202
                }
            },
            "encoding": "json"
        }
    }
]
```
### **PUT /quotes pacs.082.001**
```json
[
    {
        "partitionID": 9,
        "offset": 127,
        "timestamp": 1730725062566,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "ef60e64a18429bcd31e647313c1ca3bb",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "63e0b792-e3b9-4d55-a862-13d87afb8ebb",
                "content": {
                    "headers": {
                        "host": "extapi.region-stg.devbaremetal.moja-onprem.net",
                        "content-type": "application/vnd.interoperability.iso20022.quotes+json;version=1.0",
                        "date": "Mon, 04 Nov 2024 12:57:42 GMT",
                        "fspiop-source": "test-mwk-dfsp",
                        "fspiop-destination": "test-zmw-dfsp",
                        "fspiop-http-method": "PUT",
                        "fspiop-signature": "{\"signature\":\"giTJFGykSHEFxTCQ2szefmn-H3dwuF9_9CqaPJujSSKWHkhxvZfduUKAXRo4-liaBFs-OFTtz4Yb9ml29h_WyKyc7K3D5oG53Zos8v0CqTLDtE1cVVROfoi7OigNxhU1KAAwUFwZvV4X2LvyK1jG3jdy6-46Xw2JanfjB1f5Mgl7A_pqzQyI0D8-npblr_EQqjzlJGHwyQ-eBbHj0GVsJDElf3uZ2yP8-GNKwf9qDohHX8nBxDJWxneLKR0kmE0N6zu8OnmY4wb0xOXbIKS22xjyzwl1lCjzZy0N4skPFviHcSNtlXWmlZBI8EFL-9qqjBKmvR01yh0PX12nPRIx7g\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvcXVvdGVzLzAxSkJWTTE5REZLTlJXQzIxRkdKTlRIUkFUIiwiRlNQSU9QLUhUVFAtTWV0aG9kIjoiUFVUIiwiRlNQSU9QLVNvdXJjZSI6InRlc3QtbXdrLWRmc3AiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LXptdy1kZnNwIiwiRGF0ZSI6Ik1vbiwgMDQgTm92IDIwMjQgMTI6NTc6NDIgR01UIn0\"}",
                        "fspiop-uri": "/quotes/01JBVM19DFKNRWC21FGJNTHRAT",
                        "traceparent": "00-ef60e64a18429bcd31e647313c1ca3bb-8782d866071da339-21",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiI4NzgyZDg2NjA3MWRhMzM5In0=,tx_callback_start_ts=1730725062452",
                        "fspiop-proxy": "proxy-mwk",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiZDM4ZGIwMmUtNGQ3Mi00MzA0LWFlMjItNmJhZDNjNWUxOWZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiMzIxMjQ1ZjAtMDU1My00YjEzLWJkMTYtM2U5NDc2OGY1N2NlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktbXdrIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS4zOC4xNCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1wcm94eS1td2siLCJjbGllbnRBZGRyZXNzIjoiMTAuMS4zOC4xNCIsImNsaWVudF9pZCI6InByb3h5LW13ayJ9.rdWJIwPtM3wVMniF05WmkZ8ZrwqwvxrELqd8GYbqG2cSaPJEfEMJzlw_lo1QgJ5zaZe5BQd9mJ88FKhOqKKZLZ_t2MFGaBgR0o7RBqtTm9nWhs1rttdqf9f25ni_pirisQ2ATkp-6Qcqtmnss9wOsx71NxrkEGKnCO4-cohumIskA0un0jVOHM1FUbY3xpBEWSbcVQnpAkX2H5FCIKGX5bnOUJv3PAK0cMQh5WQWxsjZ8IWFQ1xOuKzRC2XbucFIo6QXu_ckQau1kYTjZCySuKlOu_kg5VT-saj4HBc93Bja-rV0PJbWsLRri0f4kuxoXCVlORgudQuCHPJLSTIKMg",
                        "user-agent": "axios/1.7.7",
                        "content-length": "1812",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-request-id": "c5014aa8-6bc6-4b08-8997-202000a2cce0",
                        "x-envoy-attempt-count": "1",
                        "x-envoy-internal": "true",
                        "x-b3-traceid": "8660833fb22238b9435bbd165d302c52",
                        "x-b3-spanid": "86db0c3222d2785b",
                        "x-b3-parentspanid": "435bbd165d302c52",
                        "x-b3-sampled": "0"
                    },
                    "payload": {
                        "GrpHdr": {
                            "MsgId": "01JBVM19SPQAQV9EEP0QC1RNAD",
                            "CreDtTm": "2024-11-04T12:57:42.455Z",
                            "NbOfTxs": "1",
                            "SttlmInf": {
                                "SttlmMtd": "CLRG"
                            },
                            "PmtInstrXpryDtTm": "2024-11-04T12:58:42.450Z"
                        },
                        "CdtTrfTxInf": {
                            "PmtId": {
                                "TxId": "01JBVM19DFKNRWC21FGJNTHRAT"
                            },
                            "Dbtr": {
                                "Id": {
                                    "PrvtId": {
                                        "Othr": {
                                            "SchmeNm": {
                                                "Prtry": "MSISDN"
                                            },
                                            "Id": "16135551001"
                                        }
                                    }
                                },
                                "Name": "string"
                            },
                            "DbtrAgt": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-zmw-dfsp"
                                    }
                                }
                            },
                            "Cdtr": {
                                "Id": {
                                    "PrvtId": {
                                        "Othr": {
                                            "SchmeNm": {
                                                "Prtry": "MSISDN"
                                            },
                                            "Id": "16665551002"
                                        }
                                    }
                                }
                            },
                            "CdtrAgt": {
                                "FinInstnId": {
                                    "Othr": {
                                        "Id": "test-mwk-dfsp"
                                    }
                                }
                            },
                            "ChrgBr": "CRED",
                            "IntrBkSttlmAmt": {
                                "Ccy": "MWK",
                                "ActiveCurrencyAndAmount": "1080"
                            },
                            "InstdAmt": {
                                "Ccy": "MWK",
                                "ActiveOrHistoricCurrencyAndAmount": "1080"
                            },
                            "ChrgsInf": {
                                "Amt": {
                                    "Ccy": "MWK",
                                    "ActiveOrHistoricCurrencyAndAmount": "0"
                                },
                                "Agt": {
                                    "FinInstnId": {
                                        "Othr": {
                                            "Id": "test-mwk-dfsp"
                                        }
                                    }
                                }
                            },
                            "VrfctnOfTerms": {
                                "IlpV4PrepPacket": "DIICzQAAAAAAAaXgMjAyNDExMDQxMjU4NDI0NTDpiphaypBnpcrWiT9ddwaNMOaKrxeMY4XOLlkx-CDY_ApnLm1vamFsb29wggKGZXlKeGRXOTBaVWxrSWpvaU1ERktRbFpOTVRsRVJrdE9VbGRETWpGR1IwcE9WRWhTUVZRaUxDSjBjbUZ1YzJGamRHbHZia2xrSWpvaU1ERktRbFpOTVROVFVWbFFOVEEzU2tJeFJGbENXbFpEVFVZaUxDSjBjbUZ1YzJGamRHbHZibFI1Y0dVaU9uc2ljMk5sYm1GeWFXOGlPaUpVVWtGT1UwWkZVaUlzSW1sdWFYUnBZWFJ2Y2lJNklsQkJXVVZTSWl3aWFXNXBkR2xoZEc5eVZIbHdaU0k2SWtKVlUwbE9SVk5USW4wc0luQmhlV1ZsSWpwN0luQmhjblI1U1dSSmJtWnZJanA3SW5CaGNuUjVTV1JVZVhCbElqb2lUVk5KVTBST0lpd2ljR0Z5ZEhsSlpHVnVkR2xtYVdWeUlqb2lNVFkyTmpVMU5URXdNRElpTENKbWMzQkpaQ0k2SW5SbGMzUXRiWGRyTFdSbWMzQWlmWDBzSW5CaGVXVnlJanA3SW5CaGNuUjVTV1JKYm1adklqcDdJbkJoY25SNVNXUlVlWEJsSWpvaVRWTkpVMFJPSWl3aWNHRnlkSGxKWkdWdWRHbG1hV1Z5SWpvaU1UWXhNelUxTlRFd01ERWlMQ0ptYzNCSlpDSTZJblJsYzNRdGVtMTNMV1JtYzNBaWZTd2libUZ0WlNJNkluTjBjbWx1WnlKOUxDSmxlSEJwY21GMGFXOXVJam9pTWpBeU5DMHhNUzB3TkZReE1qbzFPRG8wTWk0ME5UQmFJaXdpWVcxdmRXNTBJanA3SW1GdGIzVnVkQ0k2SWpFd09EQWlMQ0pqZFhKeVpXNWplU0k2SWsxWFN5SjlmUQ"
                            }
                        }
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "51d8d585-904c-4a6a-860e-8167db8ab348",
                        "type": "audit",
                        "action": "start",
                        "createdAt": "2024-11-04T12:57:42.566Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "QuotesByIdPut",
                        "traceId": "ef60e64a18429bcd31e647313c1ca3bb",
                        "spanId": "fa149d66a3bb0c27",
                        "sampled": 1,
                        "flags": "21",
                        "parentSpanId": "8782d866071da339",
                        "startTimestamp": "2024-11-04T12:57:42.564Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiJmYTE0OWQ2NmEzYmIwYzI3In0=,tx_callback_start_ts=1730725062452",
                            "transactionType": "quote",
                            "transactionAction": "put",
                            "transactionId": "01JBVM19DFKNRWC21FGJNTHRAT",
                            "quoteId": "01JBVM19DFKNRWC21FGJNTHRAT",
                            "source": "test-mwk-dfsp",
                            "destination": "test-zmw-dfsp"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "fa149d66a3bb0c27"
                            },
                            "tx_callback_start_ts": "1730725062452"
                        }
                    },
                    "protocol.createdAt": 1730725062566
                }
            },
            "encoding": "json"
        }
    }
]
```

## Transfer
### **POST /fxTransfers pacs.009.001.12**
```json
[
    {
        "partitionID": 2,
        "offset": 26,
        "timestamp": 1730725065180,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "4c275707c4863f4e4dc75c47354736db",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "db02f112-af01-4984-8c1e-9970c00e122e",
                "content": {
                    "url": "http://conn-test-fxp.pm-stg.devbaremetal.moja-onprem.net/fxTransfers",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/vnd.interoperability.iso20022.fxTransfers+json;version=2.0",
                        "date": "Mon, 04 Nov 2024 12:57:44 GMT",
                        "fspiop-source": "test-zmw-dfsp",
                        "fspiop-destination": "test-fxp",
                        "accept": "application/vnd.interoperability.iso20022.fxTransfers+json;version=2",
                        "fspiop-http-method": "POST",
                        "fspiop-uri": "/fxTransfers",
                        "fspiop-signature": "{\"signature\":\"haMzTqaaflOkvORdWna0xEhcw6Gxy3YOnaBQI4r9UYRMD4TGSIUecojEMAoipkvGXjW2eMxIWZK3HMH7A4FAm8MazHcFvFw_ENTrRb2tDqTuCaQT0xtd7ctTevr8pMn-lswnmA4GrrDvc_iECgfF9EhGhcCXcZ8j5qIN492suOHRCkM1HD2z9yco5mFqZY9NweIcBena5hUETt3fLR--Loqz69mvMwi4uDmcUl0TlDVPSQDLlhJnqH7RnRwSiIUzxqHYEeHzCEN6KRCU34AdqMrwveoKxznvh-MxkHBoLZ5TD62OVFBeUJ0nJrBv0RI8z9AuUOkV82Xu1TyKqFD_gA\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvZnhUcmFuc2ZlcnMiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQT1NUIiwiRlNQSU9QLVNvdXJjZSI6InRlc3Qtem13LWRmc3AiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LWZ4cCIsIkRhdGUiOiJNb24sIDA0IE5vdiAyMDI0IDEyOjU3OjQ0IEdNVCJ9\"}",
                        "traceparent": "00-4c275707c4863f4e4dc75c47354736db-6de5015fcf34b4db-30",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiI2ZGU1MDE1ZmNmMzRiNGRiIiwidGltZUFwaVByZXBhcmUiOiIxNzMwNzI1MDY0OTAyIn0=",
                        "fspiop-proxy": "proxy-zmw",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiNzU3NDJkNTQtOTJlYS00ZTEwLTg5ZmEtYTMwOTQxMDZjOTkwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiNmE0MjcxNjItNjEzNi00ZDUxLTlkOGYtMDhhOGMwNGQ2NWQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktem13IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS41NC4yMTAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcHJveHktem13IiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNTQuMjEwIiwiY2xpZW50X2lkIjoicHJveHktem13In0.p4y7OAhCKRwUkb-JovV8fLwQo1JmewEqIu6sK0ukgssoxpG8DjDHCxG_uDmBod81CZIG4ixPLxh9SeeukR_pnJer9izaGMGVzxpTGoR4OjILZcIkf2zHEBM1yoEmzawyPIqzaY75MsFlbKQUqP3kplc_4oo3EqDm5H2WFF5XSdBaROUvHkykoPngq6ZQDQt3y7hHAExC5579sxMyLz2W7aAB_NBMZAZxbRdIyNBiYVOw7oDPw0xMuQXfeeskDe6Sz7309r2v9d09ytupNY5C4jjW4kctJHO0ghuMT386pPsIFDdpgwzrXqJ8GsQBVgPYT-SUcJf7SOenKTmn4_M1dw",
                        "user-agent": "axios/1.7.7",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-envoy-internal": "true",
                        "x-request-id": "12f494f7-d02e-425a-8076-fe4ed2481aec",
                        "x-forwarded-client-cert": "Hash=57c671d2f4ca2e791e5b424c80ccfd032c3e824750c28f5c80e6040d13f0a5df;Cert=\"-----BEGIN%20CERTIFICATE-----%0AMIIDfDCCAmSgAwIBAgIUfoj41PM9g5US%2B0lRoX8NC3HwUrowDQYJKoZIhvcNAQEL%0ABQAwADAeFw0yNDEwMDMxOTI0NTBaFw0yNTAxMDExOTI1MjBaMGExDzANBgNVBAoT%0ABkluZml0eDEcMBoGA1UECxMTSW5mcmFzdHJ1Y3R1cmUgVGVhbTEwMC4GA1UEAxMn%0AcmVnaW9uLXN0Zy5kZXZiYXJlbWV0YWwubW9qYS1vbnByZW0ubmV0MIIBIjANBgkq%0AhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtBVtqMeMqYI0%2FiJkLhShkEWXocLxyvLD%0A6A28iSzfbrJxz6T%2BNzjO%2Fw47y656c%2Fk3zmc10%2FnLEv3Sx6uljWPtBuvDO2gnKC61%0ATsjRulQNzKnBWm0MWrj1gXhZi96Zgx9FsurSjK653DXoQRKfXVGmQ8MnmopDDq93%0Ae2EuSvBaN48Z75Zz4zf9YA3KedzoXjru%2BANpW%2Fjh9eepoyJlZf27mv8s1xea7URE%0AZI8T43Ttu3FNcXV5b0L%2Fg2UGs09aVPuzQmfhHkCKtBpP8Zz6P0vBWa2S3n4P9waj%0Ar2Ga2YAocDpFEEOAKdco1U%2FRf%2Fv7CrECv10MCepApC9dgw2APCU%2BOQIDAQABo4GM%0AMIGJMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQWBBRp94n3Hr53ESwfPZON%0A%2ByNn4E%2BM3zAfBgNVHSMEGDAWgBSd3zw9u30srYQ7GDP5FxUfEW3dnTAyBgNVHREE%0AKzApgidyZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQwDQYJ%0AKoZIhvcNAQELBQADggEBAGy9EXNQBz3R8wQtQPRln8j0KToYbvtj2IVOolQcpTlX%0A8I7uvy2xBtfqSVjoPNwETGV%2FtRmod4gNugUQQYiTv1b7NCHBK68MR7jjk5Ui9PDV%0ArsmGHHV3%2FtqpdqWSaIKPecXrYsUqaQE2R0SOe3ybCPVxz2JX4ozshTJThZoVaNVT%0AsWLJAJifXsSWRtwhV7fmioaCSC%2BQCggHPUbeZsQAlbs3DjR%2FqubptiWFLe1dMohg%0AzsQVXb4VO%2BcVXM2IsCw8lcM%2FXW6waKLzHCeMuV%2BeIrDxFOoEj3DwvoCpAh17fefR%0Au2ZLA7bmMwW4Drp7pbjZ0ppZrg1JgvwXhwj95Qe9Io8%3D%0A-----END%20CERTIFICATE-----%0A\";Subject=\"CN=region-stg.devbaremetal.moja-onprem.net,OU=Infrastructure Team,O=Infitx\";URI=;DNS=region-stg.devbaremetal.moja-onprem.net",
                        "x-envoy-decorator-operation": "moja-ml-api-adapter-service.mojaloop.svc.cluster.local:80/fxTransfers*",
                        "x-envoy-peer-metadata": "ChQKDkFQUF9DT05UQUlORVJTEgIaAAoaCgpDTFVTVEVSX0lEEgwaCkt1YmVybmV0ZXMKHAoMSU5TVEFOQ0VfSVBTEgwaCjEwLjEuNjUuNzQKGQoNSVNUSU9fVkVSU0lPThIIGgYxLjE4LjIKtgIKBkxBQkVMUxKrAiqoAgoiCgNhcHASGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwooChhjb250cm9sbGVyLXJldmlzaW9uLWhhc2gSDBoKNjg5YzY3ZjdjOAokCgVpc3RpbxIbGhlpc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3Ch4KF3BvZC10ZW1wbGF0ZS1nZW5lcmF0aW9uEgMaATEKPgofc2VydmljZS5pc3Rpby5pby9jYW5vbmljYWwtbmFtZRIbGhlpc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3Ci8KI3NlcnZpY2UuaXN0aW8uaW8vY2Fub25pY2FsLXJldmlzaW9uEggaBmxhdGVzdAohChdzaWRlY2FyLmlzdGlvLmlvL2luamVjdBIGGgR0cnVlChoKB01FU0hfSUQSDxoNY2x1c3Rlci5sb2NhbAopCgROQU1FEiEaH2lzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3ctMmdobGgKIAoJTkFNRVNQQUNFEhMaEWlzdGlvLWluZ3Jlc3MtZXh0CmYKBU9XTkVSEl0aW2t1YmVybmV0ZXM6Ly9hcGlzL2FwcHMvdjEvbmFtZXNwYWNlcy9pc3Rpby1pbmdyZXNzLWV4dC9kYWVtb25zZXRzL2lzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3cKFwoRUExBVEZPUk1fTUVUQURBVEESAioACiwKDVdPUktMT0FEX05BTUUSGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndw==",
                        "x-envoy-peer-metadata-id": "router~10.1.65.74~istio-external-ingress-gw-2ghlh.istio-ingress-ext~istio-ingress-ext.svc.cluster.local",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "be87b14d9d4a0cf804b7a9020c7ca309",
                        "x-b3-spanid": "04b7a9020c7ca309",
                        "x-b3-sampled": "0"
                    },
                    "data": "{\"GrpHdr\":{\"MsgId\":\"01JBVM1BW4J0RJZSQ539QB9TKT\",\"CreDtTm\":\"2024-11-04T12:57:44.580Z\",\"NbOfTxs\":\"1\",\"SttlmInf\":{\"SttlmMtd\":\"CLRG\"},\"PmtInstrXpryDtTm\":\"2024-11-04T12:58:44.579Z\"},\"CdtTrfTxInf\":{\"PmtId\":{\"TxId\":\"01JBVM16V1ZXP2DM34BQT40NWA\",\"EndToEndId\":\"01JBVM13SQYP507JB1DYBZVCMF\"},\"Dbtr\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-zmw-dfsp\"}}},\"UndrlygCstmrCdtTrf\":{\"Dbtr\":{\"Id\":{\"OrgId\":{\"Othr\":{\"Id\":\"test-zmw-dfsp\"}}}},\"DbtrAgt\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-zmw-dfsp\"}}},\"Cdtr\":{\"Id\":{\"OrgId\":{\"Othr\":{\"Id\":\"test-fxp\"}}}},\"CdtrAgt\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-fxp\"}}},\"InstdAmt\":{\"Ccy\":\"ZMW\",\"ActiveOrHistoricCurrencyAndAmount\":\"21\"}},\"Cdtr\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-fxp\"}}},\"IntrBkSttlmAmt\":{\"Ccy\":\"MWK\",\"ActiveCurrencyAndAmount\":\"1080\"},\"VrfctnOfTerms\":{\"Sh256Sgntr\":\"KVHFmdTD6Ao9lh5UybQjsxk8YoXFt3HgA3WvR6j3X_s\"}}}",
                    "responseType": "json",
                    "httpAgent": {
                        "_events": {},
                        "_eventsCount": 2,
                        "defaultPort": 80,
                        "protocol": "http:",
                        "options": {
                            "keepAlive": true,
                            "noDelay": true,
                            "path": null
                        },
                        "requests": {},
                        "sockets": {},
                        "freeSockets": {},
                        "keepAliveMsecs": 1000,
                        "keepAlive": true,
                        "maxSockets": null,
                        "maxFreeSockets": 256,
                        "scheduling": "lifo",
                        "maxTotalSockets": null,
                        "totalSocketCount": 0
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "8f73b844-d3fe-4f1d-b2b4-f683bc62c526",
                        "type": "audit",
                        "action": "egress",
                        "createdAt": "2024-11-04T12:57:45.180Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "ml_notification_event",
                        "traceId": "4c275707c4863f4e4dc75c47354736db",
                        "spanId": "6de5015fcf34b4db",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "835c7c8a4fd2cd61",
                        "startTimestamp": "2024-11-04T12:57:45.152Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiI2ZGU1MDE1ZmNmMzRiNGRiIiwidGltZUFwaVByZXBhcmUiOiIxNzMwNzI1MDY0OTAyIn0=",
                            "transactionType": "transfer",
                            "transactionAction": "prepare",
                            "source": "test-zmw-dfsp",
                            "destination": "test-fxp",
                            "transactionId": "01JBVM16V1ZXP2DM34BQT40NWA",
                            "processedAsBatch": true,
                            "binId": "86-86"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "6de5015fcf34b4db",
                                "timeApiPrepare": "1730725064902"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725065180
                }
            },
            "encoding": "json"
        }
    }
]
```
### **PUT /fxTransfers pacs.002.015**
```json
[
    {
        "partitionID": 0,
        "offset": 26,
        "timestamp": 1730725065484,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "dd1cec6898dd48853dc4026b5e4246c0",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "75b8a0b5-dc8e-4eeb-ae22-364bd4865a02",
                "content": {
                    "url": "http://conn-a-proxy-zmw.region-stg.devbaremetal.moja-onprem.net/fxTransfers/01JBVM16V1ZXP2DM34BQT40NWA",
                    "method": "PUT",
                    "headers": {
                        "content-type": "application/vnd.interoperability.iso20022.fxTransfers+json;version=2.0",
                        "date": "Mon, 04 Nov 2024 12:57:45 GMT",
                        "fspiop-source": "test-fxp",
                        "fspiop-destination": "test-zmw-dfsp",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUwODYsImlhdCI6MTczMDcyNDc4NiwianRpIjoiNTdlMzQxNjAtNzQxYS00OWFkLTlkNmQtMGE5N2QyZjZhY2JhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiZDViNGU1MjgtYTMyMC00NmM5LThlYzMtYWU2MWJmZjczOTVlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidGVzdC1meHAiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZGZzcHMiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJjbGllbnRIb3N0IjoiMTAuMS42NS43NCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LXRlc3QtZnhwIiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNjUuNzQiLCJjbGllbnRfaWQiOiJ0ZXN0LWZ4cCJ9.7iOnEXXzfidbnqcfDRaVSoNRXOV1MAZ2E1a35kaykDdcjgR14Ol6GPDB-6jQUNE5Me2K2VL05YBryEwfbg85Uk7n3gFks6mmp9kjxza2TPZKiBVZ5WaoEMm8IV1uEIctG0ir8e_DlBfodmKbP2nHITnxbsqWa4Ptc1z5UVBvxj7rCtX7N4UfjdQjljNfYwYG3Z2ebHKoc8-UrTckPepB6h_6Eh5_F2hPKQBLooTS1M0BBlivOrYlEE7Wx3vOjejppIHCZD4hLOai6j1RStqugEoNnGfGEiqj0B89TkhLs_JdpFkCRjiydkVYI_jbesvBOKx24dLtEf9x8s8Aei7Plg",
                        "fspiop-http-method": "PUT",
                        "fspiop-uri": "/fxTransfers/01JBVM16V1ZXP2DM34BQT40NWA",
                        "fspiop-signature": "{\"signature\":\"WArs0XZeFP_vLjP2LswH8bF7vSOqwNK3fdUQt5zWZvFCC_4qPEhjXd8Aow9XcM2_Kfzv4FjokSYNxrnJZSPk7pAJf-qET_DF-1YcflbKWSZZaoenMv4QCn_VCcUfJVU13nlK0UEAZCfIBMBWKreTbdT74niV98t30H4eoD_GNlggzKBUAg1RG552FzfHsr6ps9_ei34KyaBb9dBX1ZHFu8SkIfEwLP_5exBPWUELYnMwJhyy9nZB0wQOD-JyzbdrBTc5XOHiId1QHbbbthD1AC_7kNVFUDJSjR2-d_cLzQl2YFNj9YmADLnUJO4eTnF5Xj2ddZpgxP1XCcHU40rNwg\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvZnhUcmFuc2ZlcnMvMDFKQlZNMTZWMVpYUDJETTM0QlFUNDBOV0EiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQVVQiLCJGU1BJT1AtU291cmNlIjoidGVzdC1meHAiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LXptdy1kZnNwIiwiRGF0ZSI6Ik1vbiwgMDQgTm92IDIwMjQgMTI6NTc6NDUgR01UIn0\"}",
                        "x-forwarded-for": "76.212.95.237",
                        "x-forwarded-proto": "https",
                        "x-envoy-external-address": "76.212.95.237",
                        "x-request-id": "fbe31f5f-8da9-4e15-b644-7f2724bb091c",
                        "x-forwarded-client-cert": "Hash=c73b786c6a16d6791c5e3480f6dc476e46b00d45f198287eb5ed0a77b4770d7d;Cert=\"-----BEGIN%20CERTIFICATE-----%0AMIIDfDCCAmSgAwIBAgIUNwY96gVN6CiGOBvslhkdsK5pfaowDQYJKoZIhvcNAQEL%0ABQAwADAeFw0yNDEwMDMwOTM3MjJaFw0yNTAxMDEwOTM3NTJaMGExDzANBgNVBAoT%0ABkluZml0eDEcMBoGA1UECxMTSW5mcmFzdHJ1Y3R1cmUgVGVhbTEwMC4GA1UEAxMn%0AcmVnaW9uLXN0Zy5kZXZiYXJlbWV0YWwubW9qYS1vbnByZW0ubmV0MIIBIjANBgkq%0AhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAdQWBrSVP0Zo32PA%2BTJJV%2FFphvAleFA%0AEniWAgc72mJq4vFrA3ef5tzKbGIDjeQl%2FxO%2BFAD4CkpNIEQLf86emimt3aFH%2BjhM%0A%2BxZnOoSe1fbqJvZNmDCZyyJF7Usj1SCjh8ORKwsmddJ9IJOlh8BeQHarmkhi7iM3%0A%2ByIxx4SAfRYXXYANnJ1CDlWDZe63bY00RRc2SlQWbdvps6IM%2Fo5dcu7V4s%2BOTj93%0A2a5JhQTmxr91ay1xeOBCyO96wre6aS2AaKXHkoP37RhYjSswbMTTmtCnVtwUVsVU%0AVXThuZye7kFNg%2BlluEw7ir4GNolTQDb3LBexossn5c0GXRuPu%2BCiIQIDAQABo4GM%0AMIGJMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQWBBRl8Nhs2vpSs94cbk1N%0A6AekFu%2FuSTAfBgNVHSMEGDAWgBSd3zw9u30srYQ7GDP5FxUfEW3dnTAyBgNVHREE%0AKzApgidyZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQwDQYJ%0AKoZIhvcNAQELBQADggEBAC7abf12ficj5vg2VlXBbdJJ2wDch88%2BoZPideZDGIZr%0APjv7F7uRE%2F7Gw7%2FMdk9dhpKBJsqhz04iNIHV0gfp%2F9QCmBcvzDw%2BvyWAbQEuA2li%0AfrfMqZ3nXohe1Nj7robXnXrQxuLchV5CNbFoHB4lXxNa%2Bmpv66hWnZwvxfBanYkD%0Ahvu6L6NWdjnYDwl1fs9ZB9ihbctkGetcYJ9FOXrJhdkQQqG9QCovcs51ciiaufct%0AlnhZnpA08Tduhee0Z7DAQy3KPch4M%2BSAWdtRZtqCHjOD9Q6CwOALPvjpBs1k1NyA%0AWXuMo4xy7DwkA3Y%2FzGvLa9Ycbk4%2FW5cfefR8stDjhlY%3D%0A-----END%20CERTIFICATE-----%0A\";Subject=\"CN=region-stg.devbaremetal.moja-onprem.net,OU=Infrastructure Team,O=Infitx\";URI=;DNS=region-stg.devbaremetal.moja-onprem.net",
                        "x-envoy-decorator-operation": "moja-ml-api-adapter-service.mojaloop.svc.cluster.local:80/fxTransfers*",
                        "x-envoy-peer-metadata": "ChQKDkFQUF9DT05UQUlORVJTEgIaAAoaCgpDTFVTVEVSX0lEEgwaCkt1YmVybmV0ZXMKHQoMSU5TVEFOQ0VfSVBTEg0aCzEwLjEuNTQuMjEwChkKDUlTVElPX1ZFUlNJT04SCBoGMS4xOC4yCrYCCgZMQUJFTFMSqwIqqAIKIgoDYXBwEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3cKKAoYY29udHJvbGxlci1yZXZpc2lvbi1oYXNoEgwaCjY4OWM2N2Y3YzgKJAoFaXN0aW8SGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwoeChdwb2QtdGVtcGxhdGUtZ2VuZXJhdGlvbhIDGgExCj4KH3NlcnZpY2UuaXN0aW8uaW8vY2Fub25pY2FsLW5hbWUSGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwovCiNzZXJ2aWNlLmlzdGlvLmlvL2Nhbm9uaWNhbC1yZXZpc2lvbhIIGgZsYXRlc3QKIQoXc2lkZWNhci5pc3Rpby5pby9pbmplY3QSBhoEdHJ1ZQoaCgdNRVNIX0lEEg8aDWNsdXN0ZXIubG9jYWwKKQoETkFNRRIhGh9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3LXI5NDhiCiAKCU5BTUVTUEFDRRITGhFpc3Rpby1pbmdyZXNzLWV4dApmCgVPV05FUhJdGltrdWJlcm5ldGVzOi8vYXBpcy9hcHBzL3YxL25hbWVzcGFjZXMvaXN0aW8taW5ncmVzcy1leHQvZGFlbW9uc2V0cy9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3ChcKEVBMQVRGT1JNX01FVEFEQVRBEgIqAAosCg1XT1JLTE9BRF9OQU1FEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3c=",
                        "x-envoy-peer-metadata-id": "router~10.1.54.210~istio-external-ingress-gw-r948b.istio-ingress-ext~istio-ingress-ext.svc.cluster.local",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "1dbdf6f0eb53b1ccfd27c34bcd71e9a5",
                        "x-b3-spanid": "fd27c34bcd71e9a5",
                        "x-b3-sampled": "0",
                        "traceparent": "00-dd1cec6898dd48853dc4026b5e4246c0-6f57b4ee0d2cb5ee-00",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiI2ZjU3YjRlZTBkMmNiNWVlIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjUyNTYifQ=="
                    },
                    "data": "{\"GrpHdr\":{\"MsgId\":\"01JBVM1CGC5A18XQVYYRF68FD1\",\"CreDtTm\":\"2024-11-04T12:57:45.228Z\"},\"TxInfAndSts\":{\"ExctnConf\":\"ou1887jmG-lehADUppVSR2H4sX-WbxgnUvSd181RORE\",\"PrcgDt\":{\"DtTm\":\"2024-11-04T12:57:45.213Z\"},\"TxSts\":\"RESV\"}}",
                    "responseType": "json",
                    "httpAgent": {
                        "_events": {},
                        "_eventsCount": 2,
                        "defaultPort": 80,
                        "protocol": "http:",
                        "options": {
                            "keepAlive": true,
                            "noDelay": true,
                            "path": null
                        },
                        "requests": {},
                        "sockets": {},
                        "freeSockets": {},
                        "keepAliveMsecs": 1000,
                        "keepAlive": true,
                        "maxSockets": null,
                        "maxFreeSockets": 256,
                        "scheduling": "lifo",
                        "maxTotalSockets": null,
                        "totalSocketCount": 0
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "d52668a4-6ec2-4827-ae9b-4567198d7f6e",
                        "type": "audit",
                        "action": "egress",
                        "createdAt": "2024-11-04T12:57:45.484Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "ml_notification_event",
                        "traceId": "dd1cec6898dd48853dc4026b5e4246c0",
                        "spanId": "6f57b4ee0d2cb5ee",
                        "parentSpanId": "563664870c9b0b9f",
                        "startTimestamp": "2024-11-04T12:57:45.434Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiI2ZjU3YjRlZTBkMmNiNWVlIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjUyNTYifQ==",
                            "transactionType": "transfer",
                            "transactionAction": "fulfil",
                            "source": "test-fxp",
                            "destination": "test-zmw-dfsp",
                            "processedAsBatch": true,
                            "binId": "118-118"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "6f57b4ee0d2cb5ee",
                                "timeApiFulfil": "1730725065256"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725065484
                }
            },
            "encoding": "json"
        }
    }
]
```

### **POST /transfers pacs.008.013**
```json
[
    {
        "partitionID": 4,
        "offset": 24,
        "timestamp": 1730725066434,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "3bc4be0a2321fa539e079e375e003005",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "f7392865-a3d4-405b-aaf9-12825aa06ac4",
                "content": {
                    "url": "http://conn-a-proxy-mwk.region-stg.devbaremetal.moja-onprem.net/transfers",
                    "method": "POST",
                    "headers": {
                        "content-type": "application/vnd.interoperability.iso20022.transfers+json;version=1.1",
                        "date": "Mon, 04 Nov 2024 12:57:45 GMT",
                        "fspiop-source": "test-zmw-dfsp",
                        "fspiop-destination": "test-mwk-dfsp",
                        "accept": "application/vnd.interoperability.iso20022.transfers+json;version=1",
                        "fspiop-http-method": "POST",
                        "fspiop-uri": "/transfers",
                        "fspiop-signature": "{\"signature\":\"PAP1mATMl63nrj164ERmhP5cNNeC16tH7V29bzXSLvW0mY00Juu7SRFIf3O2g5Mi30x1yRbKZoQvjGXb6TMnHV6L6n_n6fdH6fde3gkZPNWvlYQnKf8gSk83KelEptR5_xOYz5-_N749wqKIt22niE4RC5YLml4lgDYc6OMdqJoG3RLgQXOJZXi4p7d4gU80faY8OViyzMhdZMDFEDIL4pOvJwJwbTs-qrr0x8ZNcgjgNX_yLzgMYgAiTiapRp7fLR8Oex3bVI7G06shTo_cr8278gc12zHXb64ZkHc0gHUIdZbJ8izinoLOMRlmMrkd9sxOgeeEzfmmel87u_s9LA\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvdHJhbnNmZXJzIiwiRlNQSU9QLUhUVFAtTWV0aG9kIjoiUE9TVCIsIkZTUElPUC1Tb3VyY2UiOiJ0ZXN0LXptdy1kZnNwIiwiRlNQSU9QLURlc3RpbmF0aW9uIjoidGVzdC1td2stZGZzcCIsIkRhdGUiOiJNb24sIDA0IE5vdiAyMDI0IDEyOjU3OjQ1IEdNVCJ9\"}",
                        "traceparent": "00-3bc4be0a2321fa539e079e375e003005-d95956becf1ad183-30",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiJkOTU5NTZiZWNmMWFkMTgzIiwidGltZUFwaVByZXBhcmUiOiIxNzMwNzI1MDY2MTE5In0=",
                        "fspiop-proxy": "proxy-zmw",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiNzU3NDJkNTQtOTJlYS00ZTEwLTg5ZmEtYTMwOTQxMDZjOTkwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiNmE0MjcxNjItNjEzNi00ZDUxLTlkOGYtMDhhOGMwNGQ2NWQwIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktem13IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS41NC4yMTAiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcHJveHktem13IiwiY2xpZW50QWRkcmVzcyI6IjEwLjEuNTQuMjEwIiwiY2xpZW50X2lkIjoicHJveHktem13In0.p4y7OAhCKRwUkb-JovV8fLwQo1JmewEqIu6sK0ukgssoxpG8DjDHCxG_uDmBod81CZIG4ixPLxh9SeeukR_pnJer9izaGMGVzxpTGoR4OjILZcIkf2zHEBM1yoEmzawyPIqzaY75MsFlbKQUqP3kplc_4oo3EqDm5H2WFF5XSdBaROUvHkykoPngq6ZQDQt3y7hHAExC5579sxMyLz2W7aAB_NBMZAZxbRdIyNBiYVOw7oDPw0xMuQXfeeskDe6Sz7309r2v9d09ytupNY5C4jjW4kctJHO0ghuMT386pPsIFDdpgwzrXqJ8GsQBVgPYT-SUcJf7SOenKTmn4_M1dw",
                        "user-agent": "axios/1.7.7",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-envoy-internal": "true",
                        "x-request-id": "bd5a6969-f3b0-43a5-9507-bc1e6e56de22",
                        "x-forwarded-client-cert": "Hash=57c671d2f4ca2e791e5b424c80ccfd032c3e824750c28f5c80e6040d13f0a5df;Cert=\"-----BEGIN%20CERTIFICATE-----%0AMIIDfDCCAmSgAwIBAgIUfoj41PM9g5US%2B0lRoX8NC3HwUrowDQYJKoZIhvcNAQEL%0ABQAwADAeFw0yNDEwMDMxOTI0NTBaFw0yNTAxMDExOTI1MjBaMGExDzANBgNVBAoT%0ABkluZml0eDEcMBoGA1UECxMTSW5mcmFzdHJ1Y3R1cmUgVGVhbTEwMC4GA1UEAxMn%0AcmVnaW9uLXN0Zy5kZXZiYXJlbWV0YWwubW9qYS1vbnByZW0ubmV0MIIBIjANBgkq%0AhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtBVtqMeMqYI0%2FiJkLhShkEWXocLxyvLD%0A6A28iSzfbrJxz6T%2BNzjO%2Fw47y656c%2Fk3zmc10%2FnLEv3Sx6uljWPtBuvDO2gnKC61%0ATsjRulQNzKnBWm0MWrj1gXhZi96Zgx9FsurSjK653DXoQRKfXVGmQ8MnmopDDq93%0Ae2EuSvBaN48Z75Zz4zf9YA3KedzoXjru%2BANpW%2Fjh9eepoyJlZf27mv8s1xea7URE%0AZI8T43Ttu3FNcXV5b0L%2Fg2UGs09aVPuzQmfhHkCKtBpP8Zz6P0vBWa2S3n4P9waj%0Ar2Ga2YAocDpFEEOAKdco1U%2FRf%2Fv7CrECv10MCepApC9dgw2APCU%2BOQIDAQABo4GM%0AMIGJMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQWBBRp94n3Hr53ESwfPZON%0A%2ByNn4E%2BM3zAfBgNVHSMEGDAWgBSd3zw9u30srYQ7GDP5FxUfEW3dnTAyBgNVHREE%0AKzApgidyZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQwDQYJ%0AKoZIhvcNAQELBQADggEBAGy9EXNQBz3R8wQtQPRln8j0KToYbvtj2IVOolQcpTlX%0A8I7uvy2xBtfqSVjoPNwETGV%2FtRmod4gNugUQQYiTv1b7NCHBK68MR7jjk5Ui9PDV%0ArsmGHHV3%2FtqpdqWSaIKPecXrYsUqaQE2R0SOe3ybCPVxz2JX4ozshTJThZoVaNVT%0AsWLJAJifXsSWRtwhV7fmioaCSC%2BQCggHPUbeZsQAlbs3DjR%2FqubptiWFLe1dMohg%0AzsQVXb4VO%2BcVXM2IsCw8lcM%2FXW6waKLzHCeMuV%2BeIrDxFOoEj3DwvoCpAh17fefR%0Au2ZLA7bmMwW4Drp7pbjZ0ppZrg1JgvwXhwj95Qe9Io8%3D%0A-----END%20CERTIFICATE-----%0A\";Subject=\"CN=region-stg.devbaremetal.moja-onprem.net,OU=Infrastructure Team,O=Infitx\";URI=;DNS=region-stg.devbaremetal.moja-onprem.net",
                        "x-envoy-decorator-operation": "moja-ml-api-adapter-service.mojaloop.svc.cluster.local:80/transfers*",
                        "x-envoy-peer-metadata": "ChQKDkFQUF9DT05UQUlORVJTEgIaAAoaCgpDTFVTVEVSX0lEEgwaCkt1YmVybmV0ZXMKHAoMSU5TVEFOQ0VfSVBTEgwaCjEwLjEuMzguMTQKGQoNSVNUSU9fVkVSU0lPThIIGgYxLjE4LjIKtgIKBkxBQkVMUxKrAiqoAgoiCgNhcHASGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwooChhjb250cm9sbGVyLXJldmlzaW9uLWhhc2gSDBoKNjg5YzY3ZjdjOAokCgVpc3RpbxIbGhlpc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3Ch4KF3BvZC10ZW1wbGF0ZS1nZW5lcmF0aW9uEgMaATEKPgofc2VydmljZS5pc3Rpby5pby9jYW5vbmljYWwtbmFtZRIbGhlpc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3Ci8KI3NlcnZpY2UuaXN0aW8uaW8vY2Fub25pY2FsLXJldmlzaW9uEggaBmxhdGVzdAohChdzaWRlY2FyLmlzdGlvLmlvL2luamVjdBIGGgR0cnVlChoKB01FU0hfSUQSDxoNY2x1c3Rlci5sb2NhbAopCgROQU1FEiEaH2lzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3ctNXNwOW0KIAoJTkFNRVNQQUNFEhMaEWlzdGlvLWluZ3Jlc3MtZXh0CmYKBU9XTkVSEl0aW2t1YmVybmV0ZXM6Ly9hcGlzL2FwcHMvdjEvbmFtZXNwYWNlcy9pc3Rpby1pbmdyZXNzLWV4dC9kYWVtb25zZXRzL2lzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3cKFwoRUExBVEZPUk1fTUVUQURBVEESAioACiwKDVdPUktMT0FEX05BTUUSGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndw==",
                        "x-envoy-peer-metadata-id": "router~10.1.38.14~istio-external-ingress-gw-5sp9m.istio-ingress-ext~istio-ingress-ext.svc.cluster.local",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "00b07adce962edbd993ca19a5d739a4f",
                        "x-b3-spanid": "993ca19a5d739a4f",
                        "x-b3-sampled": "0"
                    },
                    "data": "{\"GrpHdr\":{\"MsgId\":\"01JBVM1D2MR6D4WBWWYY3ZHGMM\",\"CreDtTm\":\"2024-11-04T12:57:45.812Z\",\"NbOfTxs\":\"1\",\"SttlmInf\":{\"SttlmMtd\":\"CLRG\"},\"PmtInstrXpryDtTm\":\"2024-11-04T12:58:45.810Z\"},\"CdtTrfTxInf\":{\"PmtId\":{\"TxId\":\"01JBVM13SQYP507JB1DYBZVCMF\"},\"ChrgBr\":\"CRED\",\"Cdtr\":{\"Id\":{\"PrvtId\":{\"Othr\":{\"SchmeNm\":{\"Prtry\":\"MSISDN\"},\"Id\":\"16665551002\"}}}},\"Dbtr\":{\"Id\":{\"PrvtId\":{\"Othr\":{\"SchmeNm\":{\"Prtry\":\"MSISDN\"},\"Id\":\"16135551001\"}}},\"Name\":\"string\"},\"CdtrAgt\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-mwk-dfsp\"}}},\"DbtrAgt\":{\"FinInstnId\":{\"Othr\":{\"Id\":\"test-zmw-dfsp\"}}},\"IntrBkSttlmAmt\":{\"Ccy\":\"MWK\",\"ActiveCurrencyAndAmount\":\"1080\"},\"VrfctnOfTerms\":{\"IlpV4PrepPacket\":\"DIICzQAAAAAAAaXgMjAyNDExMDQxMjU4NDI0NTDpiphaypBnpcrWiT9ddwaNMOaKrxeMY4XOLlkx-CDY_ApnLm1vamFsb29wggKGZXlKeGRXOTBaVWxrSWpvaU1ERktRbFpOTVRsRVJrdE9VbGRETWpGR1IwcE9WRWhTUVZRaUxDSjBjbUZ1YzJGamRHbHZia2xrSWpvaU1ERktRbFpOTVROVFVWbFFOVEEzU2tJeFJGbENXbFpEVFVZaUxDSjBjbUZ1YzJGamRHbHZibFI1Y0dVaU9uc2ljMk5sYm1GeWFXOGlPaUpVVWtGT1UwWkZVaUlzSW1sdWFYUnBZWFJ2Y2lJNklsQkJXVVZTSWl3aWFXNXBkR2xoZEc5eVZIbHdaU0k2SWtKVlUwbE9SVk5USW4wc0luQmhlV1ZsSWpwN0luQmhjblI1U1dSSmJtWnZJanA3SW5CaGNuUjVTV1JVZVhCbElqb2lUVk5KVTBST0lpd2ljR0Z5ZEhsSlpHVnVkR2xtYVdWeUlqb2lNVFkyTmpVMU5URXdNRElpTENKbWMzQkpaQ0k2SW5SbGMzUXRiWGRyTFdSbWMzQWlmWDBzSW5CaGVXVnlJanA3SW5CaGNuUjVTV1JKYm1adklqcDdJbkJoY25SNVNXUlVlWEJsSWpvaVRWTkpVMFJPSWl3aWNHRnlkSGxKWkdWdWRHbG1hV1Z5SWpvaU1UWXhNelUxTlRFd01ERWlMQ0ptYzNCSlpDSTZJblJsYzNRdGVtMTNMV1JtYzNBaWZTd2libUZ0WlNJNkluTjBjbWx1WnlKOUxDSmxlSEJwY21GMGFXOXVJam9pTWpBeU5DMHhNUzB3TkZReE1qbzFPRG8wTWk0ME5UQmFJaXdpWVcxdmRXNTBJanA3SW1GdGIzVnVkQ0k2SWpFd09EQWlMQ0pqZFhKeVpXNWplU0k2SWsxWFN5SjlmUQ\"}}}",
                    "responseType": "json",
                    "httpAgent": {
                        "_events": {},
                        "_eventsCount": 2,
                        "defaultPort": 80,
                        "protocol": "http:",
                        "options": {
                            "keepAlive": true,
                            "noDelay": true,
                            "path": null
                        },
                        "requests": {},
                        "sockets": {},
                        "freeSockets": {},
                        "keepAliveMsecs": 1000,
                        "keepAlive": true,
                        "maxSockets": null,
                        "maxFreeSockets": 256,
                        "scheduling": "lifo",
                        "maxTotalSockets": null,
                        "totalSocketCount": 0
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "40bcbf13-6823-466f-a534-98bcd49b78a4",
                        "type": "audit",
                        "action": "egress",
                        "createdAt": "2024-11-04T12:57:46.434Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "ml_notification_event",
                        "traceId": "3bc4be0a2321fa539e079e375e003005",
                        "spanId": "d95956becf1ad183",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "6626b65f44b0e24d",
                        "startTimestamp": "2024-11-04T12:57:46.391Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiJkOTU5NTZiZWNmMWFkMTgzIiwidGltZUFwaVByZXBhcmUiOiIxNzMwNzI1MDY2MTE5In0=",
                            "transactionType": "transfer",
                            "transactionAction": "prepare",
                            "source": "test-zmw-dfsp",
                            "destination": "test-mwk-dfsp",
                            "transactionId": "01JBVM13SQYP507JB1DYBZVCMF",
                            "processedAsBatch": true,
                            "binId": "86-86"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "d95956becf1ad183",
                                "timeApiPrepare": "1730725066119"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725066434
                }
            },
            "encoding": "json"
        }
    }
]
```
### **PUT /transfers pacs.002.015**
```json
[
    {
        "partitionID": 4,
        "offset": 36,
        "timestamp": 1730725067437,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "f2d86989672972a848b3fa71cc166fe2",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "d25538ad-c66a-4758-8985-5f73e1dcc3c9",
                "content": {
                    "url": "http://conn-a-proxy-zmw.region-stg.devbaremetal.moja-onprem.net/transfers/01JBVM13SQYP507JB1DYBZVCMF",
                    "method": "PUT",
                    "headers": {
                        "content-type": "application/vnd.interoperability.iso20022.transfers+json;version=1.1",
                        "date": "Mon, 04 Nov 2024 12:57:46 GMT",
                        "fspiop-source": "test-mwk-dfsp",
                        "fspiop-destination": "test-zmw-dfsp",
                        "fspiop-http-method": "PUT",
                        "fspiop-uri": "/transfers/01JBVM13SQYP507JB1DYBZVCMF",
                        "fspiop-signature": "{\"signature\":\"kaYg6ldZPWYvKJIPPZNkmqd_B2VOA0u-uQT5MBL5RtUyKhWs_m5DeHPFoBlKvWSCeMkmdGSAspdXDChvmPgnjzUJu-BQbDS3YSRD4KrpXN5BNDifTpi0b3pJjUNjFQxDvIZ1ivJfRfYI90oWKKUGCQ913phr6EnAzMpzis64gPW5QfimBhx--cCFqZP01_IzwulQ_4GUhhfid0mt3LYerUis0K_efWmesAtWluKZKMV4df3x5qEH5zmPWTJmrBXaMR6mmavL38UcsfzYQrS-PTZOJQd3h6GOiuljfLSYrWm2TU7HtEXK7HeoJvlZu7nJ3POp6Wk3VZg1xypYUb0wow\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvdHJhbnNmZXJzLzAxSkJWTTEzU1FZUDUwN0pCMURZQlpWQ01GIiwiRlNQSU9QLUhUVFAtTWV0aG9kIjoiUFVUIiwiRlNQSU9QLVNvdXJjZSI6InRlc3QtbXdrLWRmc3AiLCJGU1BJT1AtRGVzdGluYXRpb24iOiJ0ZXN0LXptdy1kZnNwIiwiRGF0ZSI6Ik1vbiwgMDQgTm92IDIwMjQgMTI6NTc6NDYgR01UIn0\"}",
                        "traceparent": "00-f2d86989672972a848b3fa71cc166fe2-9ba1480d83457772-30",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiI5YmExNDgwZDgzNDU3NzcyIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjcxMDAifQ==",
                        "fspiop-proxy": "proxy-mwk",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiZDM4ZGIwMmUtNGQ3Mi00MzA0LWFlMjItNmJhZDNjNWUxOWZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiMzIxMjQ1ZjAtMDU1My00YjEzLWJkMTYtM2U5NDc2OGY1N2NlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktbXdrIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS4zOC4xNCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1wcm94eS1td2siLCJjbGllbnRBZGRyZXNzIjoiMTAuMS4zOC4xNCIsImNsaWVudF9pZCI6InByb3h5LW13ayJ9.rdWJIwPtM3wVMniF05WmkZ8ZrwqwvxrELqd8GYbqG2cSaPJEfEMJzlw_lo1QgJ5zaZe5BQd9mJ88FKhOqKKZLZ_t2MFGaBgR0o7RBqtTm9nWhs1rttdqf9f25ni_pirisQ2ATkp-6Qcqtmnss9wOsx71NxrkEGKnCO4-cohumIskA0un0jVOHM1FUbY3xpBEWSbcVQnpAkX2H5FCIKGX5bnOUJv3PAK0cMQh5WQWxsjZ8IWFQ1xOuKzRC2XbucFIo6QXu_ckQau1kYTjZCySuKlOu_kg5VT-saj4HBc93Bja-rV0PJbWsLRri0f4kuxoXCVlORgudQuCHPJLSTIKMg",
                        "user-agent": "axios/1.7.7",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-envoy-internal": "true",
                        "x-request-id": "c40169dc-641a-48dc-85a4-60ffbfa2dcdf",
                        "x-forwarded-client-cert": "Hash=da6af3be1ab002f919c23ece8b3cdd1ce53aa387bd3a9e46ecc832469db19a3c;Cert=\"-----BEGIN%20CERTIFICATE-----%0AMIIDfDCCAmSgAwIBAgIUYrEO2VF6e6Dndu6V227BsWm69UMwDQYJKoZIhvcNAQEL%0ABQAwADAeFw0yNDEwMDMxOTI0NDhaFw0yNTAxMDExOTI1MThaMGExDzANBgNVBAoT%0ABkluZml0eDEcMBoGA1UECxMTSW5mcmFzdHJ1Y3R1cmUgVGVhbTEwMC4GA1UEAxMn%0AcmVnaW9uLXN0Zy5kZXZiYXJlbWV0YWwubW9qYS1vbnByZW0ubmV0MIIBIjANBgkq%0AhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzMcQCaKmbAEZzF%2Ftf3PjzQxsHZPb6C2P%0AJTiuE3%2F1LsHkQAwlBrN6Ffo%2BtfTSqhdcVDSi5RLcYKny5GyWhP18lwYjVdqeOFp7%0AArG5lwmyQ3yOlooR42leTIeMx2IMZNCldysXxvHEmCQUxn%2F6KGZfdUDUGNjkx4zL%0A1ROZzVidsBrojs1oVwAdtLLqxHCG22SbBIFAsTstw5VzSVDgwIluKaeg8yfsOOtI%0AABR%2F%2F%2BwWl8%2F6PKuPzwNIIUD7TeTu3ucz7Nox1VkHcZl3u1AJREYxlEIh2PRZgiS%2B%0AvbfE4XdhpVdCbm%2FGhZBH8AXZH9wjhjnNoZUn%2F8zgn9yJCo4yKGNZpQIDAQABo4GM%0AMIGJMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQWBBTvOR88h8P7hBrRpIUr%0APIbQbkwefjAfBgNVHSMEGDAWgBSd3zw9u30srYQ7GDP5FxUfEW3dnTAyBgNVHREE%0AKzApgidyZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQwDQYJ%0AKoZIhvcNAQELBQADggEBAD7IZjMo4aUFLtNQ37MSSp1GwzmrzP8t%2F4ati9UBKkXW%0AuPqYi11RVNdLoErM4CLULV%2Bis4B%2FrSZDpdcYQ3mu%2FwGVlyMS2iGcs2cqHKLZqdaP%0AhQrYKRoK8FapNfvxRAH7O65S46kmpYwgLp5dGI9MXQvIU3jgz56ADpW86l4WRUcJ%0AjtMnqyb5J4Z1pYh2ouac%2BNPWs1EinUij9zUREMYWEjZyF7ik2tzbaBy7epFIVMPe%0A0R%2FfK6oToVnhTYnc1ICBaHQLH7C130XjhrUmI6rBO%2FGVFXpNhJZVc5%2FEdXlI%2FTJ%2B%0A3tfT7mNUnC8dCt7AnUA4ha7SVgRQbLIIf59%2FCuESdzU%3D%0A-----END%20CERTIFICATE-----%0A\";Subject=\"CN=region-stg.devbaremetal.moja-onprem.net,OU=Infrastructure Team,O=Infitx\";URI=;DNS=region-stg.devbaremetal.moja-onprem.net",
                        "x-envoy-decorator-operation": "moja-ml-api-adapter-service.mojaloop.svc.cluster.local:80/transfers*",
                        "x-envoy-peer-metadata": "ChQKDkFQUF9DT05UQUlORVJTEgIaAAoaCgpDTFVTVEVSX0lEEgwaCkt1YmVybmV0ZXMKHQoMSU5TVEFOQ0VfSVBTEg0aCzEwLjEuMTU3Ljc4ChkKDUlTVElPX1ZFUlNJT04SCBoGMS4xOC4yCrYCCgZMQUJFTFMSqwIqqAIKIgoDYXBwEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3cKKAoYY29udHJvbGxlci1yZXZpc2lvbi1oYXNoEgwaCjY4OWM2N2Y3YzgKJAoFaXN0aW8SGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwoeChdwb2QtdGVtcGxhdGUtZ2VuZXJhdGlvbhIDGgExCj4KH3NlcnZpY2UuaXN0aW8uaW8vY2Fub25pY2FsLW5hbWUSGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwovCiNzZXJ2aWNlLmlzdGlvLmlvL2Nhbm9uaWNhbC1yZXZpc2lvbhIIGgZsYXRlc3QKIQoXc2lkZWNhci5pc3Rpby5pby9pbmplY3QSBhoEdHJ1ZQoaCgdNRVNIX0lEEg8aDWNsdXN0ZXIubG9jYWwKKQoETkFNRRIhGh9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3LThxZng1CiAKCU5BTUVTUEFDRRITGhFpc3Rpby1pbmdyZXNzLWV4dApmCgVPV05FUhJdGltrdWJlcm5ldGVzOi8vYXBpcy9hcHBzL3YxL25hbWVzcGFjZXMvaXN0aW8taW5ncmVzcy1leHQvZGFlbW9uc2V0cy9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3ChcKEVBMQVRGT1JNX01FVEFEQVRBEgIqAAosCg1XT1JLTE9BRF9OQU1FEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3c=",
                        "x-envoy-peer-metadata-id": "router~10.1.157.78~istio-external-ingress-gw-8qfx5.istio-ingress-ext~istio-ingress-ext.svc.cluster.local",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "993b4867962ef1b0018e320fb146518c",
                        "x-b3-spanid": "018e320fb146518c",
                        "x-b3-sampled": "0"
                    },
                    "data": "{\"GrpHdr\":{\"MsgId\":\"01JBVM1E2CRWFZFPN7W4AZJ976\",\"CreDtTm\":\"2024-11-04T12:57:46.828Z\"},\"TxInfAndSts\":{\"ExctnConf\":\"-rL3liKeLrsNy7GHJaKgAzeDL_8IVnvER5zUlP1YAoc\",\"PrcgDt\":{\"DtTm\":\"2024-11-04T12:57:46.812Z\"},\"TxSts\":\"COMM\"}}",
                    "responseType": "json",
                    "httpAgent": {
                        "_events": {},
                        "_eventsCount": 2,
                        "defaultPort": 80,
                        "protocol": "http:",
                        "options": {
                            "keepAlive": true,
                            "noDelay": true,
                            "path": null
                        },
                        "requests": {},
                        "sockets": {},
                        "freeSockets": {},
                        "keepAliveMsecs": 1000,
                        "keepAlive": true,
                        "maxSockets": null,
                        "maxFreeSockets": 256,
                        "scheduling": "lifo",
                        "maxTotalSockets": null,
                        "totalSocketCount": 0
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "d62a25b5-37b2-41da-8d1e-9e2e7c84b35c",
                        "type": "audit",
                        "action": "egress",
                        "createdAt": "2024-11-04T12:57:47.437Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "ml_notification_event",
                        "traceId": "f2d86989672972a848b3fa71cc166fe2",
                        "spanId": "9ba1480d83457772",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "bab423ea051537e9",
                        "startTimestamp": "2024-11-04T12:57:47.411Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiI5YmExNDgwZDgzNDU3NzcyIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjcxMDAifQ==",
                            "transactionType": "transfer",
                            "transactionAction": "fulfil",
                            "source": "test-mwk-dfsp",
                            "destination": "test-zmw-dfsp",
                            "processedAsBatch": true,
                            "binId": "50-50"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "9ba1480d83457772",
                                "timeApiFulfil": "1730725067100"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725067437
                }
            },
            "encoding": "json"
        }
    }
]
```
### **PATCH /fxTransfers pacs.002.015**
```json
[
    {
        "partitionID": 4,
        "offset": 33,
        "timestamp": 1730725067363,
        "compression": "lz4",
        "isTransactional": false,
        "headers": [],
        "key": {
            "payload": "f2d86989672972a848b3fa71cc166fe2",
            "encoding": "text"
        },
        "value": {
            "payload": {
                "id": "0eb4bf37-f6c9-4e58-b271-daab6e7221ff",
                "content": {
                    "url": "http://conn-test-fxp.pm-stg.devbaremetal.moja-onprem.net/fxTransfers/01JBVM16V1ZXP2DM34BQT40NWA",
                    "method": "PATCH",
                    "headers": {
                        "content-type": "application/vnd.interoperability.iso20022.fxTransfers+json;version=2.0",
                        "date": "Mon, 04 Nov 2024 12:57:46 GMT",
                        "fspiop-http-method": "PATCH",
                        "fspiop-uri": "/fxTransfers/01JBVM16V1ZXP2DM34BQT40NWA",
                        "traceparent": "00-f2d86989672972a848b3fa71cc166fe2-952339e73ae740fc-30",
                        "tracestate": "mojaloop=eyJzcGFuSWQiOiI5NTIzMzllNzNhZTc0MGZjIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjcxMDAifQ==",
                        "fspiop-proxy": "proxy-mwk",
                        "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmd0NTRFJIalFmRHJUR1pYRjlxblJtcGZrUGV5QjNqb1UtYThwSjZPZDFnIn0.eyJleHAiOjE3MzA3MjUzMzksImlhdCI6MTczMDcyNTAzOSwianRpIjoiZDM4ZGIwMmUtNGQ3Mi00MzA0LWFlMjItNmJhZDNjNWUxOWZlIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5yZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQvcmVhbG1zL2Rmc3BzIiwic3ViIjoiMzIxMjQ1ZjAtMDU1My00YjEzLWJkMTYtM2U5NDc2OGY1N2NlIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoicHJveHktbXdrIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRmc3BzIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJjbGllbnRIb3N0IjoiMTAuMS4zOC4xNCIsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1wcm94eS1td2siLCJjbGllbnRBZGRyZXNzIjoiMTAuMS4zOC4xNCIsImNsaWVudF9pZCI6InByb3h5LW13ayJ9.rdWJIwPtM3wVMniF05WmkZ8ZrwqwvxrELqd8GYbqG2cSaPJEfEMJzlw_lo1QgJ5zaZe5BQd9mJ88FKhOqKKZLZ_t2MFGaBgR0o7RBqtTm9nWhs1rttdqf9f25ni_pirisQ2ATkp-6Qcqtmnss9wOsx71NxrkEGKnCO4-cohumIskA0un0jVOHM1FUbY3xpBEWSbcVQnpAkX2H5FCIKGX5bnOUJv3PAK0cMQh5WQWxsjZ8IWFQ1xOuKzRC2XbucFIo6QXu_ckQau1kYTjZCySuKlOu_kg5VT-saj4HBc93Bja-rV0PJbWsLRri0f4kuxoXCVlORgudQuCHPJLSTIKMg",
                        "user-agent": "axios/1.7.7",
                        "accept-encoding": "gzip, compress, deflate, br",
                        "x-forwarded-for": "10.10.200.1",
                        "x-forwarded-proto": "https",
                        "x-envoy-internal": "true",
                        "x-request-id": "c40169dc-641a-48dc-85a4-60ffbfa2dcdf",
                        "x-forwarded-client-cert": "Hash=da6af3be1ab002f919c23ece8b3cdd1ce53aa387bd3a9e46ecc832469db19a3c;Cert=\"-----BEGIN%20CERTIFICATE-----%0AMIIDfDCCAmSgAwIBAgIUYrEO2VF6e6Dndu6V227BsWm69UMwDQYJKoZIhvcNAQEL%0ABQAwADAeFw0yNDEwMDMxOTI0NDhaFw0yNTAxMDExOTI1MThaMGExDzANBgNVBAoT%0ABkluZml0eDEcMBoGA1UECxMTSW5mcmFzdHJ1Y3R1cmUgVGVhbTEwMC4GA1UEAxMn%0AcmVnaW9uLXN0Zy5kZXZiYXJlbWV0YWwubW9qYS1vbnByZW0ubmV0MIIBIjANBgkq%0AhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzMcQCaKmbAEZzF%2Ftf3PjzQxsHZPb6C2P%0AJTiuE3%2F1LsHkQAwlBrN6Ffo%2BtfTSqhdcVDSi5RLcYKny5GyWhP18lwYjVdqeOFp7%0AArG5lwmyQ3yOlooR42leTIeMx2IMZNCldysXxvHEmCQUxn%2F6KGZfdUDUGNjkx4zL%0A1ROZzVidsBrojs1oVwAdtLLqxHCG22SbBIFAsTstw5VzSVDgwIluKaeg8yfsOOtI%0AABR%2F%2F%2BwWl8%2F6PKuPzwNIIUD7TeTu3ucz7Nox1VkHcZl3u1AJREYxlEIh2PRZgiS%2B%0AvbfE4XdhpVdCbm%2FGhZBH8AXZH9wjhjnNoZUn%2F8zgn9yJCo4yKGNZpQIDAQABo4GM%0AMIGJMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQWBBTvOR88h8P7hBrRpIUr%0APIbQbkwefjAfBgNVHSMEGDAWgBSd3zw9u30srYQ7GDP5FxUfEW3dnTAyBgNVHREE%0AKzApgidyZWdpb24tc3RnLmRldmJhcmVtZXRhbC5tb2phLW9ucHJlbS5uZXQwDQYJ%0AKoZIhvcNAQELBQADggEBAD7IZjMo4aUFLtNQ37MSSp1GwzmrzP8t%2F4ati9UBKkXW%0AuPqYi11RVNdLoErM4CLULV%2Bis4B%2FrSZDpdcYQ3mu%2FwGVlyMS2iGcs2cqHKLZqdaP%0AhQrYKRoK8FapNfvxRAH7O65S46kmpYwgLp5dGI9MXQvIU3jgz56ADpW86l4WRUcJ%0AjtMnqyb5J4Z1pYh2ouac%2BNPWs1EinUij9zUREMYWEjZyF7ik2tzbaBy7epFIVMPe%0A0R%2FfK6oToVnhTYnc1ICBaHQLH7C130XjhrUmI6rBO%2FGVFXpNhJZVc5%2FEdXlI%2FTJ%2B%0A3tfT7mNUnC8dCt7AnUA4ha7SVgRQbLIIf59%2FCuESdzU%3D%0A-----END%20CERTIFICATE-----%0A\";Subject=\"CN=region-stg.devbaremetal.moja-onprem.net,OU=Infrastructure Team,O=Infitx\";URI=;DNS=region-stg.devbaremetal.moja-onprem.net",
                        "x-envoy-decorator-operation": "moja-ml-api-adapter-service.mojaloop.svc.cluster.local:80/transfers*",
                        "x-envoy-peer-metadata": "ChQKDkFQUF9DT05UQUlORVJTEgIaAAoaCgpDTFVTVEVSX0lEEgwaCkt1YmVybmV0ZXMKHQoMSU5TVEFOQ0VfSVBTEg0aCzEwLjEuMTU3Ljc4ChkKDUlTVElPX1ZFUlNJT04SCBoGMS4xOC4yCrYCCgZMQUJFTFMSqwIqqAIKIgoDYXBwEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3cKKAoYY29udHJvbGxlci1yZXZpc2lvbi1oYXNoEgwaCjY4OWM2N2Y3YzgKJAoFaXN0aW8SGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwoeChdwb2QtdGVtcGxhdGUtZ2VuZXJhdGlvbhIDGgExCj4KH3NlcnZpY2UuaXN0aW8uaW8vY2Fub25pY2FsLW5hbWUSGxoZaXN0aW8tZXh0ZXJuYWwtaW5ncmVzcy1ndwovCiNzZXJ2aWNlLmlzdGlvLmlvL2Nhbm9uaWNhbC1yZXZpc2lvbhIIGgZsYXRlc3QKIQoXc2lkZWNhci5pc3Rpby5pby9pbmplY3QSBhoEdHJ1ZQoaCgdNRVNIX0lEEg8aDWNsdXN0ZXIubG9jYWwKKQoETkFNRRIhGh9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3LThxZng1CiAKCU5BTUVTUEFDRRITGhFpc3Rpby1pbmdyZXNzLWV4dApmCgVPV05FUhJdGltrdWJlcm5ldGVzOi8vYXBpcy9hcHBzL3YxL25hbWVzcGFjZXMvaXN0aW8taW5ncmVzcy1leHQvZGFlbW9uc2V0cy9pc3Rpby1leHRlcm5hbC1pbmdyZXNzLWd3ChcKEVBMQVRGT1JNX01FVEFEQVRBEgIqAAosCg1XT1JLTE9BRF9OQU1FEhsaGWlzdGlvLWV4dGVybmFsLWluZ3Jlc3MtZ3c=",
                        "x-envoy-peer-metadata-id": "router~10.1.157.78~istio-external-ingress-gw-8qfx5.istio-ingress-ext~istio-ingress-ext.svc.cluster.local",
                        "x-envoy-attempt-count": "1",
                        "x-b3-traceid": "993b4867962ef1b0018e320fb146518c",
                        "x-b3-spanid": "018e320fb146518c",
                        "x-b3-sampled": "0",
                        "fspiop-source": "hub-region-stg",
                        "fspiop-destination": "test-fxp",
                        "fspiop-signature": "{\"signature\":\"W4H6WVlRvnEEt460epFEVzNSUctpkKjbT8s7vDr2GDsQ4kFTRtR3g3rrUGfpYe_u_VYxZ0F0aLJrXI5PdNEZy3Lhjivh-hnFtDL7dstsVPTZCLNbSrc6tvmFZla4yvLy1jGepUKIjntnW73FwGp2Dr_vT5_IP79ZAkc1tuKJ9sBThIFYpJt_WFQlxpWrsNRWK_oVBcPpEWVGIKC19vvhPhbnVHAD5c1RQd8JyJ0G8ionudMaHcw1hTaDPtZx5xfVAdqYjI7joCkPbb1_8aFRNtW2Bst7CvQ7JSfw_qwCJEwKiIYKHDfB8VFpeDXWk6FMs7exqg_pjNuhFU2LJShUADLyc8BKU4Jh-ZoT5sbD5FLGBLge_Xlqj5-8X0v_KzBPFH02ZlFep7dVjHSFwJI7Qmvc5CnQRNYQu50U4ldwaJxuE28zANpMSS2XYD8KH_9CGDiWUBtfDmIKBDTVcAxg3L6XAoAqPRVwdAJYi-gub7iIdfoRgtuKZNmSS_IGWrIxn7i86s8bqtATIIW1Vwx2fTqItny3brTp__zk5BUUUAmeJSx8oIle4lii5ormxLqLC8AOhIZxgnzXMExS0pEMMnKrxUrXg7klFCam0VGaZLDxJsol1S40s23mQJ5ooSXO9oI0eOzwsZK8JYvtwXEF6ASI9lQzdPil9cEQdrkPCeo\",\"protectedHeader\":\"eyJhbGciOiJSUzI1NiIsIkZTUElPUC1VUkkiOiIvZnhUcmFuc2ZlcnMvMDFKQlZNMTZWMVpYUDJETTM0QlFUNDBOV0EiLCJGU1BJT1AtSFRUUC1NZXRob2QiOiJQQVRDSCIsIkZTUElPUC1Tb3VyY2UiOiJodWItcmVnaW9uLXN0ZyIsIkZTUElPUC1EZXN0aW5hdGlvbiI6InRlc3QtZnhwIiwiRGF0ZSI6Ik1vbiwgMDQgTm92IDIwMjQgMTI6NTc6NDYgR01UIn0\"}"
                    },
                    "data": "{\"GrpHdr\":{\"MsgId\":\"01JBVM1E2CRWFZFPN7W4AZJ976\",\"CreDtTm\":\"2024-11-04T12:57:46.828Z\"},\"TxInfAndSts\":{\"PrcgDt\":{\"DtTm\":\"2024-11-04T12:57:46.812Z\"},\"TxSts\":\"COMM\"}}",
                    "responseType": "json",
                    "httpAgent": {
                        "_events": {},
                        "_eventsCount": 2,
                        "defaultPort": 80,
                        "protocol": "http:",
                        "options": {
                            "keepAlive": true,
                            "noDelay": true,
                            "path": null
                        },
                        "requests": {},
                        "sockets": {},
                        "freeSockets": {},
                        "keepAliveMsecs": 1000,
                        "keepAlive": true,
                        "maxSockets": null,
                        "maxFreeSockets": 256,
                        "scheduling": "lifo",
                        "maxTotalSockets": null,
                        "totalSocketCount": 0
                    }
                },
                "type": "application/json",
                "metadata": {
                    "event": {
                        "id": "d9e9c77c-c9ef-48c1-82bc-54ec9ec2af7b",
                        "type": "audit",
                        "action": "egress",
                        "createdAt": "2024-11-04T12:57:47.362Z",
                        "state": {
                            "status": "success"
                        }
                    },
                    "trace": {
                        "service": "ml_notification_event",
                        "traceId": "f2d86989672972a848b3fa71cc166fe2",
                        "spanId": "952339e73ae740fc",
                        "sampled": 0,
                        "flags": "00",
                        "parentSpanId": "b4f9f1b5ca068d19",
                        "startTimestamp": "2024-11-04T12:57:47.343Z",
                        "tags": {
                            "tracestate": "mojaloop=eyJzcGFuSWQiOiI5NTIzMzllNzNhZTc0MGZjIiwidGltZUFwaUZ1bGZpbCI6IjE3MzA3MjUwNjcxMDAifQ==",
                            "transactionType": "transfer",
                            "transactionAction": "fulfil",
                            "source": "test-mwk-dfsp",
                            "destination": "test-zmw-dfsp",
                            "processedAsBatch": true,
                            "binId": "119-119"
                        },
                        "tracestates": {
                            "mojaloop": {
                                "spanId": "952339e73ae740fc",
                                "timeApiFulfil": "1730725067100"
                            }
                        }
                    },
                    "protocol.createdAt": 1730725067363
                }
            },
            "encoding": "json"
        }
    }
]
```

