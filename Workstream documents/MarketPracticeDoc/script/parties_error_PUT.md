
### PUT /parties/{type}/{partyIdentifier}[/{subId}]/error
|**Account Identification Verification Report - acmt.024.001.04**|
|--|

#### Context
*(DFSP -> DFSP)*

This is triggered as a callback response to the GET /parties call when an error occurs. The message is between DFSPs connected in the scheme and indicates an error in the account verification process. All DFSP participating the the scheme are expected to respond with this message.

Here is an example of the message:
```json
{
  "Assgnmt": {
  "MsgId": "01JBVM14S6SC453EY9XB9GXQBW",
    "CreDtTm": "2013-03-07T16:30:00",
    "Assgnr": { "Agt": { "FinInstnId": { "Othr": { "Id": "payee-dfsp" } } } },
    "Assgne": { "Agt": { "FinInstnId": { "Othr": { "Id": "payer-dfsp" } } } }
  },
  "Rpt": {
    "Vrfctn": false,
    "OrgnlId": "MSISDN/16665551002",
    "CreDtTm": "2013-03-07T16:30:00",
    "Rsn": { "Cd": 3204 }
  }
}
```
#### Message Details
The details on how to compose and make this API are covered in the following sections:
1. [Header Details](#header-details)<br> This section specifies the header requirements for the API are specified.
2. [Required Fields](#required-fields) <br> This section specifies which fields are required in order to meet the message validating requirements.
3. [Optional Fields](#optional-fields) <br> This section specifies which fields can optionally be included in the message. (Some of these fields may be required for a specific scheme as defined in the Scheme Rules for that scheme.)
4. [Unsupported Fields](#unsupported-fields) <br> This section specified which fields are actively not supported. The functionality specifying data in these fields are not compatible with a Mojaloop scheme, and will fail message validation if provided.

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
|  * **Assgnmt** - Assignment | Information related to the identification assignment.<br> |
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
|   Rpt.**Rsn** - Reason | Specifies the reason why the verified identification information is incorrect.<br> |
|   Rpt.**OrgnlPtyAndAcctId** - OriginalPartyAndAccountIdentification | Provides party and/or account identification information as given in the original message.<br> |
|   Rpt.**UpdtdPtyAndAcctId** - UpdatedPartyAndAccountIdentification | Provides party and/or account identification information.<br> |
|   **SplmtryData** - SupplementaryData | Additional information that cannot be captured in the structured elements and/or any other specific block.<br> |


#### Unsupported Fields

Mojaloop is an end-to-end messaging system where messages are signed at each end by the participating organisation. This is imperative to maintain non-repudiation. The following field therefore are unsupported and if provided will reject the message, as these violate this end-to-end message support.

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

