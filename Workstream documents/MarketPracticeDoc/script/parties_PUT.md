## 7.2 PUT /Parties/{type}/{partyIdentifier}[/{subId}]
|**Account Identification Verification Report - acmt.024.001.04**|
|--|

#### Context
*(DFSP -> DFSP)*

This is triggers as a callback response to the GET /parties call. The message is between DFSPs connected in the scheme and is a check that validates that the account represented is active.

Here is an example of the message:
``` json
{
"Assgnmt": {
    "MsgId": "01JBVM14S6SC453EY9XB9GXQB5",
    "CreDtTm": "2024-11-04T12:57:37.318Z",
    "Assgnr": { "Agt": { "FinInstnId": { "Othr": { "Id": "payee-dfps" }}}},
    "Assgne": { "Agt": { "FinInstnId": { "Othr": { "Id": "payer-dfsp" }}}}},
"Rpt": {
    "Vrfctn": true,
    "OrgnlId": "MSISDN/16665551002",
    "UpdtdPtyAndAcctId": {
        "Pty": {
            "Id": {"PrvtId": {"Othr": {"SchmeNm": {"Prtry": "MSISDN"},
                                               "Id": "16665551002"}}},
            "Nm": "Chikondi Banda"},
        "Agt": { "FinInstnId": { "Othr": { "Id": "payee-dfsp" }}},
        "Acct": { "Ccy": "MWK" }}}
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



#### Required fields
There are the required fields that are needed by the switch to operate.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|  * **Assgnmt** - Assignment | Identifies the identification assignment.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **MsgId** - MessageIdentification | Unique identification, as assigned by the assigner, to unambiguously identify the message.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **CreDtTm** - CreationDateTime | Date and time at which the identification assignment was created.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **Assgnr** - Assignor | Party that assigns the identification assignment to another party. This is also the sender of the message.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Pty** - Party | Identification of a person or an organisation.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Id** - Identification | Unique and unambiguous way to identify an organisation.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **OrgId** - Organisation | Unique and unambiguous way to identify an organisation.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **PrvtId** - PrivateIdentification | Unique and unambiguous identification of a person, for example a passport.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Agt** - Agent | Identification of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution, as assigned under an internationally recognised or proprietary identification scheme.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **Assgne** - Assignee | Party that the identification assignment is assigned to. This is also the receiver of the message.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Pty** - Party | Identification of a person or an organisation.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Id** - Identification | Unique and unambiguous way to identify an organisation.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **OrgId** - Organisation | Unique and unambiguous way to identify an organisation.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **PrvtId** - PrivateIdentification | Unique and unambiguous identification of a person, for example a passport.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Agt** - Agent | Identification of a financial institution.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **FinInstnId** - FinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution, as assigned under an internationally recognised or proprietary identification scheme.<br> |
|  * **Rpt** - Report | Information concerning the verification of the identification data for which verification was requested.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **OrgnlId** - OriginalIdentification | Unique identification, as assigned by a sending party, to unambiguously identify the party and account identification information group within the original message.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **Vrfctn** - Verification | Identifies whether the party and/or account information received is correct. Boolean value.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp; * **UpdtdPtyAndAcctId** - UpdatedPartyAndAccountIdentification | Provides party and/or account identification information.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Pty** - Party | Account owner that owes an amount of money or to whom an amount of money is due.<br> |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **Id** - Identification | Unique and unambiguous way to identify an organisation.<br> |
| {or&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **OrgId** - Organisation | Unique and unambiguous way to identify an organisation.<br> |
| or}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * **PrvtId** - PrivateIdentification | Unique and unambiguous identification of a person, for example a passport.<br> |


#### Optional Fields
Here is a list of all the optional fields. Some of these fields when specified require other fields to be defined and cannot be specified in isolation. An asterisk `*` indicates a required field in the table to illustrate these requirements. For more information please refer to the ISO 20022 specification.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   Assgnmt.Assgnr.Pty.Id.OrgId.**AnyBIC** - AnyBIC | Business identification code of the organisation.<br> |
|   Assgnmt.Assgnr.Pty.Id.OrgId.**LEI** - LEI | Legal entity identification as an alternate identification for a party.<br> |
|   Assgnmt.Assgnr.Pty.Id.OrgId.**Othr** - Other | Unique identification of an organisation, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgnr.Pty.Id.PrvtId.**DtAndPlcOfBirth** - DateAndPlaceOfBirth | Date and place of birth of a person.<br> |
|   Assgnmt.Assgnr.Pty.Id.PrvtId.**Othr** - Other | Unique identification of a person, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgnr.Pty.**Nm** - Name | Name by which a party is known and which is usually used to identify that party.<br> |
|   Assgnmt.Assgnr.Pty.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   Assgnmt.Assgnr.Pty.**CtryOfRes** - CountryOfResidence | Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.<br> |
|   Assgnmt.Assgnr.Pty.**CtctDtls** - ContactDetails | Set of elements used to indicate how to contact the party.<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   Assgnmt.Assgnr.Agt.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgnr.Agt.**BrnchId** - BranchIdentification | Definition: Identifies a specific branch of a financial institution.<br>Usage: This component should be used in case the identification information in the financial institution component does not provide identification up to branch level.<br> |
|   Assgnmt.Assgne.Pty.Id.OrgId.**AnyBIC** - AnyBIC | Business identification code of the organisation.<br> |
|   Assgnmt.Assgne.Pty.Id.OrgId.**LEI** - LEI | Legal entity identification as an alternate identification for a party.<br> |
|   Assgnmt.Assgne.Pty.Id.OrgId.**Othr** - Other | Unique identification of an organisation, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgne.Pty.Id.PrvtId.**DtAndPlcOfBirth** - DateAndPlaceOfBirth | Date and place of birth of a person.<br> |
|   Assgnmt.Assgne.Pty.Id.PrvtId.**Othr** - Other | Unique identification of a person, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgne.Pty.**Nm** - Name | Name by which a party is known and which is usually used to identify that party.<br> |
|   Assgnmt.Assgne.Pty.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   Assgnmt.Assgne.Pty.**CtryOfRes** - CountryOfResidence | Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.<br> |
|   Assgnmt.Assgne.Pty.**CtctDtls** - ContactDetails | Set of elements used to indicate how to contact the party.<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**BICFI** - BICFI | Code allocated to a financial institution by the ISO 9362 Registration Authority as described in ISO 9362 "Banking - Banking telecommunication messages - Business identifier code (BIC)"<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**ClrSysMmbId** - ClearingSystemMemberIdentification | Information used to identify a member within a clearing system<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**LEI** - LEI | Legal entity identifier of the financial institution.<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**Nm** - Name | Name by which an agent is known and which is usually used to identify that agent<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   Assgnmt.Assgne.Agt.FinInstnId.**Othr** - Other | Unique identification of an agent, as assigned by an institution, using an identification scheme.<br> |
|   Assgnmt.Assgne.Agt.**BrnchId** - BranchIdentification | Definition: Identifies a specific branch of a financial institution.<br>Usage: This component should be used in case the identification information in the financial institution component does not provide identification up to branch level.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.Id.OrgId.**AnyBIC** - AnyBIC | Business identification code of the organisation.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.Id.OrgId.**LEI** - LEI | Legal entity identification as an alternate identification for a party.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.Id.OrgId.**Othr** - Other | Unique identification of an organisation, as assigned by an institution, using an identification scheme.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.Id.PrvtId.**DtAndPlcOfBirth** - DateAndPlaceOfBirth | Date and place of birth of a person.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.Id.PrvtId.**Othr** - Other | Unique identification of a person, as assigned by an institution, using an identification scheme.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.**Nm** - Name | Name by which a party is known and which is usually used to identify that party.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.**PstlAdr** - PostalAddress | Information that locates and identifies a specific address, as defined by postal services.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.**CtryOfRes** - CountryOfResidence | Country in which a person resides (the place of a person's home). In the case of a company, it is the country from which the affairs of that company are directed.<br> |
|   Rpt.UpdtdPtyAndAcctId.Pty.**CtctDtls** - ContactDetails | Set of elements used to indicate how to contact the party.<br> |
|   Rpt.UpdtdPtyAndAcctId.**Acct** - Account | Unambiguous identification of the account of a party.<br> |
|   Rpt.UpdtdPtyAndAcctId.**Agt** - Agent | Financial institution servicing an account for a party.<br> |
|   Rpt.**Rsn** - Reason | Specifies the reason why the verified identification information is incorrect.<br> |
|   Rpt.**OrgnlPtyAndAcctId** - OriginalPartyAndAccountIdentification | Provides party and/or account identification information as given in the original message.<br> |
|   **SplmtryData** - SupplementaryData | Additional information that cannot be captured in the structured elements and/or any other specific block.<br> |


#### Unsupported Fields

Mojaloop is an end-to-end messaging system where messages are signed at each end by the participating organisation. This is imperative to maintain non-repudiation. The following field therefore are unsupported and if provided will reject the message, as these violate this end-to-end message support.
If a message is rejected, then a different end point must be called which is why the report and reason codes are not supported in this message.

| **ISO 20022 Field** | **Description** |
| --- | --- |
|   Assgnmt.**Cretr** - Party50Choice |  |
|   Assgnmt.**FrstAgt** - BranchAndFinancialInstitutionIdentification | Unique and unambiguous identification of a financial institution or a branch of a financial institution. |
|   **OrgnlAssgnmt** - MessageIdentification8 |  |
|   Rpt.OrgnlPtyAndAcctId.Pty.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.OrgnlPtyAndAcctId.Pty.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   Rpt.OrgnlPtyAndAcctId.Pty.CtctDtls.**URLAdr** - MaxText | Specifies a character string with a maximum length of 2048 characters. |
|   Rpt.OrgnlPtyAndAcctId.Agt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.OrgnlPtyAndAcctId.Agt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   Rpt.OrgnlPtyAndAcctId.Agt.BrnchId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.OrgnlPtyAndAcctId.Agt.BrnchId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   Rpt.UpdtdPtyAndAcctId.Pty.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.UpdtdPtyAndAcctId.Pty.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   Rpt.UpdtdPtyAndAcctId.Pty.CtctDtls.**URLAdr** - MaxText | Specifies a character string with a maximum length of 2048 characters. |
|   Rpt.UpdtdPtyAndAcctId.Agt.FinInstnId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.UpdtdPtyAndAcctId.Agt.FinInstnId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |
|   Rpt.UpdtdPtyAndAcctId.Agt.BrnchId.PstlAdr.**CareOf** - MaxText | Specifies a character string with a maximum length of 140 characters. |
|   Rpt.UpdtdPtyAndAcctId.Agt.BrnchId.PstlAdr.**UnitNb** - MaxText | Specifies a character string with a maximum length of 16 characters. |


#### Supported HTTP Responses

| **HTTP Error Code** | **Description and Common Causes** |
|---|----|
|**400 Bad Request** | **Description**: The server could not understand the request due to invalid syntax. This response indicates that the request was malformed or contained invalid parameters.<br>**Common Causes**: Missing required fields, invalid field values, or incorrect request format. |
|**401 Unauthorized** | **Description**: The client must authenticate itself to get the requested response. This response indicates that the request lacks valid authentication credentials.<br>**Common Causes**: Missing or invalid authentication token. |
|**403 Forbidden** | **Description**: The client does not have access rights to the content. This response indicates that the server understood the request but refuses to authorize it.<br>**Common Causes**: Insufficient permissions to access the resource. |
|**404 Not Found** | **Description**: The server can not find the requested resource. This response indicates that the specified resource does not exist.<br>**Common Causes**: Incorrect resource identifier or the resource has been deleted. |
|**405 Method Not Allowed** | **Description**: The request method is known by the server but is not supported by the target resource. This response indicates that the HTTP method used is not allowed for the endpoint.<br>**Common Causes**: Using an unsupported HTTP method (e.g., POST instead of PUT). |
|**406 Not Acceptable** | **Description**: The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers. This response indicates that the server cannot generate a response that is acceptable according to the Accept headers sent in the request.<br>**Common Causes**: Unsupported media type or format specified in the Accept header. |
|**501 Not Implemented** | **Description**: The server does not support the functionality required to fulfill the request. This response indicates that the server does not recognize the request method or lacks the ability to fulfill the request.<br>**Common Causes**: The requested functionality is not implemented on the server. |
|**503 Service Unavailable** | **Description**: The server is not ready to handle the request. This response indicates that the server is temporarily unable to handle the request due to maintenance or overload.<br>**Common Causes**: Server maintenance, temporary overload, or server downtime. |

#### Common Error Payload

All error responses return a common payload structure that includes a specific message. The payload typically contains the following fields:

- **errorCode**: A code representing the specific error.
- **errorDescription**: A description of the error.
- **extensionList**: An optional list of key-value pairs providing additional information about the error.

This common error payload helps clients understand the nature of the error and take appropriate actions.

