## 7.11 PUT /fxTransfers/{ID}

| Financial Institution to Financial Institution Payment Status Report - **pacs.002.001.15**|
|--|

#### Context 
*(FXP -> DFSP)*

This message is a response to the `POST \fxTransfers` call initiated by the DFSP who is requesting to proceed with the conversion terms presented in the `PUT \fxquotes`. It is the FXP's responsibility to check that the clearing amounts align with the agreed conversion terms, and if all requirements are met, use this message to lock-in the agreed terms. Once the hub receives this acceptance message, the conversion can no-longer timeout. Final completion of the conversion will only occur once the dependent transfer is committed. 

The cryptographic ILP fulfillment provided in the `TxInfAndSts.ExctnConf` field, is released by the FXP as an indication to the HUB that the terms have been met. 

Here is an example of the message:
```json
{
"GrpHdr": {
    "MsgId":"01JBVM1CGC5A18XQVYYRF68FD1",
    "CreDtTm":"2024-11-04T12:57:45.228Z"},
"TxInfAndSts":{
    "ExctnConf":"ou1887jmG-l...",
    "PrcgDt":{"DtTm":"2024-11-04T12:57:45.213Z"},
    "TxSts":"RESV"}
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
|  * **GrpHdr** - Set of characteristics shared by all individual transactions included in the message. | Set of characteristics shared by all individual transactions included in the message.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **MsgId** - MessageIdentification | Definition: Point to point reference, as assigned by the instructing party, and sent to the next party in the chain to unambiguously identify the message.<br>Usage: The instructing party has to make sure that MessageIdentification is unique per instructed party for a pre-agreed period.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **CreDtTm** - CreationDateTime | Date and time at which the message was created.<br> |
|  * **TxInfAndSts** - Information concerning the original transactions, to which the status report message refers. | Provides further details on the original transactions, to which the status report message refers.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **ExctnConf** - Unique reference, as assigned by the account servicing institution, to unambiguously identify the confirmation. | Specifies a hexadecimal string.<br><br>NOTE: This pattern is not the original ISO20022 specification.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **PrcgDt** - Date/time at which the instruction was processed by the specified party. | Specifies the reason for the status.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Dt** - Date | Specified date.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **DtTm** - DateTime | Specified date and time.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **TxSts** - Specifies the status of the transaction. | Specifies the external payment transaction status code.<br><br>For FSPIOP transfer state enumeration mappings:<br>{<br>  "COMM": "COMMITED",<br>  "RESV": "RESERVED",<br>  "RECV": "RECEIVED",<br>  "ABOR": "ABORTED"<br>}<br><br>NOTE: enum enforcement is not apart of the ISO20022 specification, but is added here for FSPIOP mappings.<br> |



#### Optional Fields
Here is a list of all the optional fields. Some of these fields when specified require other fields to be defined and cannot be specified in isolation. An asterisk `*` indicates a required field in the table to illustrate these requirements. For more information please refer to the ISO 20022 specification.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   TxInfAndSts.**StsId** - Unique identification, as assigned by the original sending party, to unambiguously identify the status report. | Specifies a character string with a maximum length of 35 characters.<br> |
|   TxInfAndSts.**OrgnlInstrId** - Unique identification, as assigned by the original sending party, to | unambiguously identify the original instruction.<br><br>(FSPIOP equivalent: transactionRequestId)<br> |
|   TxInfAndSts.**OrgnlEndToEndId** - Unique identification, as assigned by the original sending party, to | unambiguously identify the original end-to-end transaction.<br><br>(FSPIOP equivalent: transactionId)<br> |
|   TxInfAndSts.**OrgnlTxId** - Unique identification, as assigned by the original sending party, to | unambiguously identify the original transaction.<br><br>(FSPIOP equivalent: quoteId)<br> |
|   TxInfAndSts.**OrgnlUETR** - Unique end-to-end transaction reference, as assigned by the original sending party, to unambiguously identify the original transaction. | Unique end-to-end transaction reference, as assigned by the original sending party, to unambiguously identify the original transaction.<br> |
|   TxInfAndSts.**StsRsnInf** - Information concerning the reason for the status. | Unsure on description.<br> |
|   TxInfAndSts.**AccptncDtTm** - Date and time at which the status was accepted. | A particular point in the progression of time defined by a mandatory<br>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br> |
|   TxInfAndSts.**AcctSvcrRef** - Unique reference, as assigned by the account servicing institution, to unambiguously identify the status report. | Specifies a character string with a maximum length of 35 characters.<br> |
|   TxInfAndSts.**ClrSysRef** - Reference that is assigned by the account servicing institution and sent to the account owner to unambiguously identify the transaction. | Specifies a character string with a maximum length of 35 characters.<br> |
|   TxInfAndSts.**SplmtryData** - Additional information that cannot be captured in the structured elements and/or any other specific block. | Additional information that cannot be captured in the structured fields and/or any other specific block.<br> |
|   **SplmtryData** - Additional information that cannot be captured in the structured elements and/or any other specific block. | Additional information that cannot be captured in the structured fields and/or any other specific block.<br> |


#### Unsupported Fields

Mojaloop is an end-to-end messaging system where messages are signed at each end by the participating organisation. This is imperative to maintain non-repudiation. The following field therefore are unsupported and if provided will reject the message, as these violate this end-to-end message support.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   GrpHdr.**BtchBookg** - BatchBookingIndicator |  |
|   GrpHdr.**NbOfTxs** - MaxNumericText | Specifies a numeric string with a maximum length of 15 digits. |
|   GrpHdr.**CtrlSum** - DecimalNumber |  |
|   GrpHdr.**TtlIntrBkSttlmAmt** - ActiveCurrencyAndAmount | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. |
|   GrpHdr.**IntrBkSttlmDt** - ISODate | A particular point in the progression of time in a calendar year expressed in the YYYY-MM-DD format. This representation is defined in "XML Schema Part 2: Datatypes Second Edition - W3C Recommendation 28 October 2004" which is aligned with ISO 8601. |
|   GrpHdr.**SttlmInf** - Specifies the details on how the settlement of the original transaction(s) between the | instructing agent and the instructed agent was completed.<br> |
|   GrpHdr.**PmtTpInf** - PaymentTypeInformation | Provides further details of the type of payment. |
|   GrpHdr.**InstgAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   GrpHdr.**InstdAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   **CdtTrfTxInf** - CreditTransferTransaction62 |  |

