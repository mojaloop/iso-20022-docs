## 7.10 POST /fxTransfers
| Execute Financial Institution Credit Transfer - **pacs.009.001.12**|
|--|

#### Context 
*(DFSP -> FXP)*

This message is initiated by a DFSP who is requesting to transfer funds in another currency. The message is sent to the foreign exchange provider who provided the conversion terms. This message is an acknowledgement that the terms of the conversion are accepted, and is thus an instruction to proceed with the conversion.

The source amount and currency are defined here `CdtTrfTxInf.UndrlygCstmrCdtTrf.InstdAmt.ActiveOrHistoricCurrencyAndAmount` and here `CdtTrfTxInf.UndrlygCstmrCdtTrf.InstdAmt.Ccy`, and the target amount and currency are defined `CdtTrfTxInf.IntrBkSttlmAmt.ActiveCurrencyAndAmount` and here `CdtTrfTxInf.IntrBkSttlmAmt.Ccy`.

This message includes can be seen as an agreement to the terms that have previously been set up and established in the fxQuotes resource. The `CdtTrfTxInf.UndrlygCstmrCdtTrf.VrfctnOfTerms.Sh256Sgntr` field is a reference to the ILPv4 cryptographic condition of those terms.

The `GrpHdr.PmtInstrXpryDtTm` specifies the expiry of the this transfer message. It is the responsibility of the HUB to enforce this expiry. The status of which a DFSP can query by making a `GET /fxTransfers/{ID}` request.

The currency conversion is dependent on a transfer (the determiningTransferId) and is specified in the `CdtTrfTxInf.PmtId.EndToEndId` field.

Here is an example of the message:
```json
{
"GrpHdr":{
    "MsgId":"01JBVM1BW4J0RJZSQ539QB9TKT",
    "CreDtTm":"2024-11-04T12:57:44.580Z",
    "NbOfTxs":"1",
    "SttlmInf":{"SttlmMtd":"CLRG"},
    "PmtInstrXpryDtTm":"2024-11-04T12:58:44.579Z"},
"CdtTrfTxInf":{
    "PmtId":{"TxId":"01JBVM16V1ZXP2DM34BQT40NWA",
             "EndToEndId":"01JBVM13SQYP507JB1DYBZVCMF"},
    "Dbtr":{"FinInstnId":{"Othr":{"Id":"payer-dfsp"}}},
    "UndrlygCstmrCdtTrf":{
            "Dbtr":{"Id":{"OrgId":{"Othr":{"Id":"payer-dfsp"}}}},
            "DbtrAgt":{"FinInstnId":{"Othr":{"Id":"payer-dfsp"}}},
            "Cdtr":{"Id":{"OrgId":{"Othr":{"Id":"fxp"}}}},
            "CdtrAgt":{"FinInstnId":{"Othr":{"Id":"fxp"}}},
            "InstdAmt":{"Ccy":"ZMW",
                "ActiveOrHistoricCurrencyAndAmount":"21"}},
    "Cdtr":{"FinInstnId":{"Othr":{"Id":"fxp"}}},
    "IntrBkSttlmAmt":{"Ccy":"MWK",
                "ActiveCurrencyAndAmount":"1080"},
    "VrfctnOfTerms":{"Sh256Sgntr":"KVHFmdTD6A..."}}
}
```
#### Message Details
The details on how to compose and make this API are covered in the following sections:
1. [Core Data Elements](#core-data-elements)<br>This section specifies which fields are required, which fields are optional, and which fields are unsupported in order to meet the message validating requirements.
2. [Header Details](#331-header-details)<br> This general section specifies the header requirements for the API are specified.
3. [Supported HTTP Responses](#332-supported-http-responses)<br> This general section specifies the http responses that must be supported.
4. [Common Error Payload](#333-common-error-payload)<br> This general section specifies the common error payload that is provided in synchronous http error response.

#### Core Data Elements
Here are the core data elements that are needed to meet this market practice requirement.

The background colours indicate the classification of the data element.
{{key}}

Here is the defined core data element table.
{{table}}

