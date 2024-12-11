## 7.4 POST /fxQuotes/
| Financial Institution Credit Transfer Quote Request - **pacs.091.001.01**|
|--|

#### Context 
*(DFSP -> FXP)*

This message is initiated by a DFSP who is requesting liquidity cover in another currency to fund a transfer. The message is sent to a foreign exchange provider and is a request for conversion terms. The source currency is specified in `CdtTrfTxInf.UndrlygCstmrCdtTrf.InstdAmt.Ccy` and the target currency is specified in `CdtTrfTxInf.IntrBkSttlmAmt.Ccy`. 

#### Conversion Type `SEND`
If the `CdtTrfTxInf.InstrForCdtrAgt.InstrInf` is defined as `SEND`, then the source currency amount is expected to be defined `CdtTrfTxInf.UndrlygCstmrCdtTrf.InstdAmt.ActiveOrHistoricCurrencyAndAmount`, and the target currency amount  will be calculated based on the source currency amount and fees. (The target amount `CdtTrfTxInf.IntrBkSttlmAmt.ActiveCurrencyAndAmount` should be specified as 0 and will not be used in the calculation.) 

#### Conversion Type `RECEIVE`
If the `CdtTrfTxInf.InstrForCdtrAgt.InstrInf` is defined as `RECEIVE`, then the target currency amount is expected to be defined `CdtTrfTxInf.IntrBkSttlmAmt.ActiveCurrencyAndAmount`, and the source currency amount  will be calculated based on the target currency amount and fees. (The source amount `CdtTrfTxInf.UndrlygCstmrCdtTrf.InstdAmt.ActiveOrHistoricCurrencyAndAmount` should be specified as 0 and will not be used in the calculation.) 

In this phase of the transfer all participants to agree on the terms, and are expected to validate whether the transfer will be able to proceed. The Foreign Exchange provider is expected to respond to this request with a PUT /fxQuotes callback.

Here is an example of the message:
```json
{
"GrpHdr": {
    "MsgId": "01JBVM16V3Q4MSV8KTG0BRJGZ2",
    "CreDtTm": "2024-11-04T12:57:39.427Z",
    "NbOfTxs": "1",
    "SttlmInf": { "SttlmMtd": "CLRG" },
    "PmtInstrXpryDtTm": "2024-11-04T12:58:39.425Z"
},
"CdtTrfTxInf": {
    "PmtId": {
        "TxId": "01JBVM16V1ZXP2DM34BQT40NW9",
        "InstrId": "01JBVM16V1ZXP2DM34BQT40NWA",
        "EndToEndId": "01JBVM13SQYP507JB1DYBZVCMF" },
    "Dbtr": { "FinInstnId": { "Othr": { "Id": "payer-dfsp" } } },
    "UndrlygCstmrCdtTrf": {
        "Dbtr": {"Id": {"OrgId": {"Othr": {"Id": "payer-dfsp"}}}},
        "DbtrAgt": {"FinInstnId": {"Othr": {"Id": "payer-dfsp"}}},
        "Cdtr": {"Id": {"OrgId": {"Othr": {"Id": "fxp"}}}},
        "CdtrAgt": {"FinInstnId": {"Othr": {"Id": "fxp"}}},
        "InstdAmt": {"Ccy": "ZMW",
            "ActiveOrHistoricCurrencyAndAmount": "21"}},
    "Cdtr": {"FinInstnId": {"Othr": {"Id": "fxp"}}},
    "IntrBkSttlmAmt": { "Ccy": "MWK",
        "ActiveCurrencyAndAmount": "0"},
    "InstrForCdtrAgt": {"InstrInf": "SEND"}}
}
```
#### Message Details
The details on how to compose and make this API are covered in the following sections:
1. [Header Details](#header-details)<br> This section specifies the header requirements for the API are specified.
2. [Required Fields](#required-fields) <br> This section specifies which fields are required in order to meet the message validating requirements.
3. [Optional Fields](#optional-fields) <br> This section specifies which fields can optionally be included in the message. (Some of these fields may be required for a specific scheme as defined in the Scheme Rules for that scheme.)
4. [Unsupported Fields](#unsupported-fields) <br> This section specified which fields are actively not supported. The functionality specifying data in these fields are not compatible with a Mojaloop scheme, and will fail message validation if provided.
5. [Supported HTTP Responses](#supported-http-responses) <br> This section details which http responses can re returned and are required to be supported.

#### Header Details 
The API message header should contain the following details. Required headers are specified with an `*` asterisks.

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Description |
|--|--|
|**Content-Length**<br>*integer*<br>(header)|The `Content-Length` header field indicates the anticipated size of the payload body. Only sent if there is a body.**Note:** The API supports a maximum size of 5242880 bytes (5 Megabytes).|
| * **Type**<br>*string*<br>(path)|The type of the party identifier. For example, `MSISDN`, `PERSONAL_ID`.|
| * **ID**<br>*string*<br>(path)| The identifier value.|
| * **Content-Type** <br>*string*<br>(header)|The `Content-Type` header indicates the specific version of the API used to send the payload body.|
| * **Date**<br>*string*<br>(header)|The `Date` header field indicates the date when the request was sent.|
| **X-Forwarded-For** <br> *string*<br>(header)|The `X-Forwarded-For` header field is an unofficially accepted standard used for informational purposes of the originating client IP address, as a request might pass multiple proxies, firewalls, and so on. Multiple `X-Forwarded-For` values should be expected and supported by implementers of the API.**Note:** An alternative to `X-Forwarded-For` is defined in [RFC 7239](https://tools.ietf.org/html/rfc7239). However, to this point RFC 7239 is less-used and supported than `X-Forwarded-For`.|
| * **FSPIOP-Source** <br> *string*<br>(header)|The `FSPIOP-Source` header field is a non-HTTP standard field used by the API for identifying the sender of the HTTP request. The field should be set by the original sender of the request. Required for routing and signature verification (see header field `FSPIOP-Signature`).|
| **FSPIOP-Destination** <br> *string*<br>(header)|The `FSPIOP-Destination` header field is a non-HTTP standard field used by the API for HTTP header based routing of requests and responses to the destination. The field must be set by the original sender of the request if the destination is known (valid for all services except GET /parties) so that any entities between the client and the server do not need to parse the payload for routing purposes. If the destination is not known (valid for service GET /parties), the field should be left empty.|
| **FSPIOP-Encryption** <br> *string*<br>(header) | The `FSPIOP-Encryption` header field is a non-HTTP standard field used by the API for applying end-to-end encryption of the request.|
| **FSPIOP-Signature** <br> *string* <br> (header)| The `FSPIOP-Signature` header field is a non-HTTP standard field used by the API for applying an end-to-end request signature.|
| **FSPIOP-URI** <br> *string* <br> (header) | The `FSPIOP-URI` header field is a non-HTTP standard field used by the API for signature verification, should contain the service URI. Required if signature verification is used, for more information, see [the API Signature document](https://github.com/mojaloop/docs/tree/main/Specification%20Document%20Set).|
| **FSPIOP-HTTP-Method** <br> *string* <br> (header) | The `FSPIOP-HTTP-Method` header field is a non-HTTP standard field used by the API for signature verification, should contain the service HTTP method. Required if signature verification is used, for more information, see [the API Signature document](https://github.com/mojaloop/docs/tree/main/Specification%20Document%20Set).|


#### Required Fields
Here are the required fields that are needed by the switch to operate.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|  * **GrpHdr** - GroupHeader | Set of characteristics shared by all individual transactions included in the message.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **MsgId** - Message Identification | Specifies a character string with a maximum length of 35 characters.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **CreDtTm** - Creation Date and Time | A particular point in the progression of time defined by a mandatory<br>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **NbOfTxs** - Number of Transactions | Specifies a numeric string with a maximum length of 15 digits.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **SttlmInf** - Settlement Information | Specifies the details on how the settlement of the original transaction(s) between the<br>instructing agent and the instructed agent was completed.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **SttlmMtd** - SettlementMethodCode | Specifies the method used to settle the credit transfer instruction.<br><br>INDA: Indirect Account<br>INGA: Indirect Agent<br>COVE: Cover<br>CLRG: Clearing<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **PmtInstrXpryDtTm** - Payment Instruction Expiry Date and Time | A particular point in the progression of time defined by a mandatory<br>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br> |
|  * **CdtTrfTxInf** - Credit Transfer Transaction Information | Provides further details specific to the individual transaction(s) included in the message.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **PmtId** - PaymentIdentification | Set of elements used to reference a payment instruction.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **TxId** - TransactionIdentification (FSPIOP equivalent: quoteId in quote request, transferId in transfer request) | <br>Definition: Unique identification, as assigned by the first instructing agent, to unambiguously identify the<br>transaction that is passed on, unchanged, throughout the entire interbank chain.<br><br>Usage: The transaction identification can be used for reconciliation, tracking or to link tasks relating to<br>the transaction on the interbank level.<br><br>Usage: The instructing agent has to make sure that the transaction identification is unique for a preagreed period.<br><br>This field has been changed from the original ISO20022 `Max35Text`` schema to a ULIDIdentifier schema.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **IntrBkSttlmAmt** - InterbankSettlementAmount | Amount of money moved between the instructing agent and the instructed agent.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **ActiveCurrencyAndAmount** |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Ccy** - Currency | Identification of the currency in which the account is held.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **UndrlygCstmrCdtTrf** - Underlying Customer Credit Transfer | TBD<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Dbtr** - Party that owes an amount of money to the (ultimate) creditor. | Specifies the identification of a person or an organisation.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Id** - Identification | Unique and unambiguous identification of a party.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **OrgId** - Organisation | Unique and unambiguous way to identify an organisation.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **PrvtId** - Person | Unique and unambiguous identification of a person, for example a passport.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Cdtr** - Party to which an amount of money is due. | Specifies the identification of a person or an organisation.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Id** - Identification | Unique and unambiguous identification of a party.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **OrgId** - Organisation | Unique and unambiguous way to identify an organisation.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **PrvtId** - Person | Unique and unambiguous identification of a person, for example a passport.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **DbtrAgt** - Financial institution servicing an account for the debtor. | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **CdtrAgt** - Financial institution servicing an account for the creditor. | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **InstdAmt** - InstructedAmount | Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **ActiveOrHistoricCurrencyAndAmount** - Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party. | Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Ccy** - Currency | Identification of the currency in which the account is held.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **Dbtr** - Debtor | Party that owes an amount of money to the (ultimate) creditor.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **Cdtr** - Creditor | Party to which an amount of money is due.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **InstrForCdtrAgt** - InstructionForCreditorAgent | Set of elements used to provide information on the remittance advice.<br> |



#### Optional Fields
Here is a list of all the optional fields. Some of these fields when specified require other fields to be defined and cannot be specified in isolation. An asterisk `*` indicates a required field in the table to illustrate these requirements. For more information please refer to the ISO 20022 specification.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   CdtTrfTxInf.PmtId.**InstrId** - InstructionIdentification (FSPIOP equivalent: transactionRequestId) | <br>Definition: Unique identification, as assigned by an instructing party for an instructed party, to<br>unambiguously identify the instruction.<br><br>Usage: The instruction identification is a point to point reference that can be used between the<br>instructing party and the instructed party to refer to the individual instruction. It can be included in<br>several messages related to the instruction.<br><br>This field has been changed from the original ISO20022 `Max35Text`` schema to a ULIDIdentifier schema.<br> |
|   CdtTrfTxInf.PmtId.**EndToEndId** - EndToEndIdentification (FSPIOP equivalent: transactionId) | <br>Definition: Unique identification, as assigned by the initiating party, to unambiguously identify the<br>transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.<br><br>Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the<br>transaction. It can be included in several messages related to the transaction.<br><br>Usage: In case there are technical limitations to pass on multiple references, the end-to-end<br>identification must be passed on throughout the entire end-to-end chain.<br><br>This field has been changed from the original ISO20022 `Max35Text`` schema to a ULIDIdentifier schema.<br> |
|   CdtTrfTxInf.PmtId.**UETR** - UETR | Universally unique identifier to provide an end-to-end reference of a payment transaction.<br> |
|   CdtTrfTxInf.PmtId.**ClrSysRef** - ClearingSystemReference | Unique reference, as assigned by a clearing system, to unambiguously identify the instruction.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.Id.OrgId.**AnyBIC** - AnyBIC | Business identification code of the organisation.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.Id.OrgId.**LEI** - LEI | Legal entity identification as an alternate identification for a party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.Id.OrgId.**Othr** - Other | Unique identification of an organisation, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.Id.PrvtId.**DtAndPlcOfBirth** - DateAndPlaceOfBirth | Date and place of birth of a person.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.Id.PrvtId.**Othr** - Other | Unique identification of a person, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.**Nm** - Name | Name by which a party is known and which is usually used to identify that party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.**PstlAdr** - Postal Address | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.**CtryOfRes** - Country of Residence | Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Dbtr.**CtctDtls** - Contact Details | Set of elements used to indicate how to contact the party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.Id.OrgId.**AnyBIC** - AnyBIC | Business identification code of the organisation.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.Id.OrgId.**LEI** - LEI | Legal entity identification as an alternate identification for a party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.Id.OrgId.**Othr** - Other | Unique identification of an organisation, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.Id.PrvtId.**DtAndPlcOfBirth** - DateAndPlaceOfBirth | Date and place of birth of a person.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.Id.PrvtId.**Othr** - Other | Unique identification of a person, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.**Nm** - Name | Name by which a party is known and which is usually used to identify that party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.**PstlAdr** - Postal Address | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.**CtryOfRes** - Country of Residence | Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.Cdtr.**CtctDtls** - Contact Details | Set of elements used to indicate how to contact the party.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.**BrnchId** - BranchIdentification | Identifies a specific branch of a financial institution.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.**BrnchId** - BranchIdentification | Identifies a specific branch of a financial institution.<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.Dbtr.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.Dbtr.**BrnchId** - BranchIdentification | Identifies a specific branch of a financial institution.<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   CdtTrfTxInf.Cdtr.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   CdtTrfTxInf.Cdtr.**BrnchId** - BranchIdentification | Identifies a specific branch of a financial institution.<br> |
|   CdtTrfTxInf.InstrForCdtrAgt.**Cd** - Code | Coded information related to the processing of the payment instruction, provided by the initiating party, and intended for the creditor's agent.<br> |
|   CdtTrfTxInf.InstrForCdtrAgt.**InstrInf** - InstructionInformation | Further information complementing the coded instruction or instruction to the creditor's agent that is bilaterally agreed or specific to a user community.<br> |
|   CdtTrfTxInf.**PmtTpInf** - PaymentTypeInformation | Set of elements used to further specify the type of transaction.<br> |
|   CdtTrfTxInf.**DbtrAcct** - DebtorAccount | Account used to process a payment.<br> |
|   CdtTrfTxInf.**DbtrAgt** - DebtorAgent | Financial institution servicing an account for the debtor.<br> |
|   CdtTrfTxInf.**CdtrAgt** - CreditorAgent | Financial institution servicing an account for the creditor.<br> |
|   CdtTrfTxInf.**CdtrAcct** - CreditorAccount | Account to which a credit entry is made.<br> |
|   CdtTrfTxInf.**Purp** - Purpose | Underlying reason for the payment transaction.<br> |
|   CdtTrfTxInf.**VrfctnOfTerms** - VerificationOfTerms | Set of elements used to provide information on the underlying terms of the transaction.<br> |


#### Unsupported Fields

Mojaloop is an end-to-end messaging system where messages are signed at each end by the participating organisation. This is imperative to maintain non-repudiation. The following field therefore are unsupported and if provided will reject the message, as these violate this end-to-end message support.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   GrpHdr.**BtchBookg** - BatchBookingIndicator |  |
|   GrpHdr.**CtrlSum** - DecimalNumber |  |
|   GrpHdr.**TtlIntrBkSttlmAmt** - ActiveCurrencyAndAmount | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. |
|   GrpHdr.**IntrBkSttlmDt** - ISODate | A particular point in the progression of time in a calendar year expressed in the YYYY-MM-DD format. This representation is defined in "XML Schema Part 2: Datatypes Second Edition - W3C Recommendation 28 October 2004" which is aligned with ISO 8601. |
|   GrpHdr.SttlmInf.**SttlmAcct** - CashAccount | Provides the details to identify an account. |
|   GrpHdr.SttlmInf.**ClrSys** - ClearingSystemIdentification3Choice |  |
|   GrpHdr.SttlmInf.**InstgRmbrsmntAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   GrpHdr.SttlmInf.**InstgRmbrsmntAgtAcct** - CashAccount | Provides the details to identify an account. |
|   GrpHdr.SttlmInf.**InstdRmbrsmntAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   GrpHdr.SttlmInf.**InstdRmbrsmntAgtAcct** - CashAccount | Provides the details to identify an account. |
|   GrpHdr.SttlmInf.**ThrdRmbrsmntAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   GrpHdr.SttlmInf.**ThrdRmbrsmntAgtAcct** - CashAccount | Provides the details to identify an account. |
|   GrpHdr.**PmtTpInf** - PaymentTypeInformation | Provides further details of the type of payment. |
|   GrpHdr.**InstgAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   GrpHdr.**InstdAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**IntrBkSttlmDt** - ISODate | A particular point in the progression of time in a calendar year expressed in the YYYY-MM-DD format. This representation is defined in "XML Schema Part 2: Datatypes Second Edition - W3C Recommendation 28 October 2004" which is aligned with ISO 8601. |
|   CdtTrfTxInf.**SttlmPrty** - Priority3Code |  |
|   CdtTrfTxInf.**SttlmTmIndctn** - SettlementDateTimeIndication1 |  |
|   CdtTrfTxInf.**SttlmTmReq** - SettlementTimeRequest2 |  |
|   CdtTrfTxInf.**PrvsInstgAgt1** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**PrvsInstgAgt1Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**PrvsInstgAgt2** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**PrvsInstgAgt2Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**PrvsInstgAgt3** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**PrvsInstgAgt3Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**InstgAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**InstdAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**IntrmyAgt1** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**IntrmyAgt1Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**IntrmyAgt2** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**IntrmyAgt2Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**IntrmyAgt3** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**IntrmyAgt3Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.**UltmtDbtr** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.Dbtr.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.Dbtr.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.DbtrAgt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.DbtrAgt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.**DbtrAgtAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.CdtrAgt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.CdtrAgt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.**CdtrAgtAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.Cdtr.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.Cdtr.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.**UltmtCdtr** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.**InstrForNxtAgt** - InstructionForNextAgent | Further information related to the processing of the payment instruction, provided by the initiating party, and intended for the next agent in the payment chain. |
|   CdtTrfTxInf.**RmtInf** - RemittanceInformation2 |  |
|   CdtTrfTxInf.**UndrlygAllcn** - TransactionAllocation1 |  |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**UltmtDbtr** - PartyIdentification | Specifies the identification of a person or an organisation. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**InitgPty** - PartyIdentification | Specifies the identification of a person or an organisation. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**DbtrAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.DbtrAgt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**DbtrAgtAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt1** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt1Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt2** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt2Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt3** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**PrvsInstgAgt3Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt1** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt1Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt2** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt2Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt3** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**IntrmyAgt3Acct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.CdtrAgt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**CdtrAgtAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**CdtrAcct** - CashAccount | Provides the details to identify an account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**UltmtCdtr** - PartyIdentification | Specifies the identification of a person or an organisation. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**InstrForCdtrAgt** - InstructionForCreditorAgent | Further information related to the processing of the payment instruction, provided by the initiating party, and intended for the creditor agent. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**InstrForNxtAgt** - InstructionForNextAgent | Further information related to the processing of the payment instruction, provided by the initiating party, and intended for the next agent in the payment chain. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**Tax** - TaxData | Details about tax paid, or to be paid, to the government in accordance with the law, including pre-defined parameters such as thresholds and type of account. |
|   CdtTrfTxInf.UndrlygCstmrCdtTrf.**RmtInf** - RemittanceInformation22 |  |
|   CdtTrfTxInf.**SplmtryData** - SupplementaryData | Additional information that cannot be captured in the structured fields and/or any other specific block. |
|   **SplmtryData** - SupplementaryData | Additional information that cannot be captured in the structured fields and/or any other specific block. |

