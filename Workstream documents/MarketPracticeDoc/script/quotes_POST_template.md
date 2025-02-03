## 7.7 POST /quotes
|**Financial Institution to Financial Institution Customer Credit Transfer Quote Request - pacs.081.001.01**|
|--|

#### Context
*(DFSP -> DFSP)*

This request for quote message that is initiated by the payer DFSP who is requesting the payee DFSP to provide the terms of the transfer. The reply to this request is a callback made on the PUT /quotes endpoint. In this phase of the transfer all participants present and agree on the terms of the transfer, and are expected to validate whether the transfer will be able to proceed. 

If this transaction includes currency conversion, then the transfer amount and currency specified must be in target currency. The transfer amounts is specified in the `CdtTrfTxInf.IntrBkSttlmAmt.ActiveCurrencyAndAmount` and the `CdtTrfTxInf.IntrBkSttlmAmt.Ccy` fields.
Both the `ChrgBr` type `CRED` and `DEBT` are supported.
#### Charge Type `CRED`
If the `CdtTrfTxInf.ChrgBr` is defined as `CRED`, then the transfer amount is expected to remain the same in the returned transfer terms and the payee party receive amount is adjusted to account for any fees. 

#### Charge Type `DEBT`
If the `CdtTrfTxInf.ChrgBr` is defined as `DEBT`, then the amount the payee party receives must equal the transfer amount specified. The transfer amount in returned transfer terms is adjusted to account for any fees. 

The Identifier for this request must be a ULID generated identifier and is specified in the `CdtTrfTxInf.PmtId.TxId` field. If this transfer is part of a wider transaction, then that too is represented by a ULID specified in the `CdtTrfTxInf.PmtId.EndToEndId` field.

Here is an example of the message:
```json
{
"GrpHdr": {
        "MsgId": "01JBVM19DJQ96BS9X6VA5AMW2Y",
        "CreDtTm": "2024-11-04T12:57:42.066Z",
        "NbOfTxs": "1",
        "PmtInstrXpryDtTm": "2024-11-04T12:58:42.063Z",
        "SttlmInf": { "SttlmMtd": "CLRG" }
    },
"CdtTrfTxInf": {
        "PmtId": {
            "TxId": "01JBVM19DFKNRWC21FGJNTHRAT",
            "EndToEndId": "01JBVM13SQYP507JB1DYBZVCMF"},
        "Cdtr": { "Id": { "PrvtId": { "Othr": { "SchmeNm": { "Prtry": "MSISDN" },
                                                "Id": "16665551002" }}}},
        "CdtrAgt": { "FinInstnId": { "Othr": { "Id": "test-mwk-dfsp" }}},
        "Dbtr": { "Id": { "PrvtId": { "Othr": { "SchmeNm": { "Prtry": "MSISDN" },
                                                "Id": "16135551001" }}},
            "Name": "Joe Blogs"},
        "DbtrAgt": { "FinInstnId": { "Othr": { "Id": "payer-dfsp" }}},
        "IntrBkSttlmAmt": {
            "Ccy": "MWK",
            "ActiveCurrencyAndAmount": "1080"},
        "Purp": { "Prtry": "TRANSFER"},
        "ChrgBr": "CRED"}
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

