
## 7.3 PUT /parties/{type}/{partyIdentifier}[/{subId}]/error
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
    "Rsn": { "Prtry": 3204 }
  }
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


