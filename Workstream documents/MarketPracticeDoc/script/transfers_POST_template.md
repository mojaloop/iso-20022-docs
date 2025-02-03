## 7.14 POST /transfers
| Financial Institution to Financial Institution Customer Credit Transfer - **pacs.008.001.13**|
|--|

#### Context 
*(DFSP -> DFSP)*

This message is initiated by a payer DFSP who is requesting to transfer funds. The message is sent to the payee DFSP who provided the transfer terms in the `PUT /quotes` message. This message is an acknowledgement that the terms of the transfer are accepted, and is thus an instruction to proceed with the transfer.

The transfer amount which is the clearing amount that the payee DFSP receives is defined in the `CdtTrfTxInf.IntrBkSttlmAmt.Ccy` and `CdtTrfTxInf.IntrBkSttlmAmt.ActiveCurrencyAndAmount` fields. If this transfer includes currency conversion, then this amount an currency must correspond with the target amount and currency.

This message can be seen as an agreement to the terms that have previously been set up and established in the `PUT \quotes` message. The `CdtTrfTxInf.VrfctnOfTerms.IlpV4PrepPacket` field is the ILP packet containing the terms that have been agreed to.

The `GrpHdr.PmtInstrXpryDtTm` specifies the expiry of the this transfer message. It is the responsibility of the HUB to enforce this expiry. The status of which a DFSP can query by making a `GET /transfers/{ID}` request.

Here is an example of the message:
```json
{
"GrpHdr":{
    "MsgId":"01JBVM1D2MR6D4WBWWYY3ZHGMM",
    "CreDtTm":"2024-11-04T12:57:45.812Z",
    "NbOfTxs":"1",
    "SttlmInf":{"SttlmMtd":"CLRG"},
    "PmtInstrXpryDtTm":"2024-11-04T12:58:45.810Z"},
"CdtTrfTxInf":{
    "PmtId":{"TxId":"01JBVM13SQYP507JB1DYBZVCMF"},
    "ChrgBr":"CRED",
    "Cdtr":{"Id":{"PrvtId":{"Othr":{"SchmeNm":{"Prtry":"MSISDN"},
                                    "Id":"16665551002"}}}},
    "Dbtr":{"Id":{"PrvtId":{"Othr":{"SchmeNm":{"Prtry":"MSISDN"},
                                    "Id":"16135551001"}}},
            "Name":"Joe Blogs"},
    "CdtrAgt":{"FinInstnId":{"Othr":{"Id":"payee-dfsp"}}},
    "DbtrAgt":{"FinInstnId":{"Othr":{"Id":"payer-dfsp"}}},
    "IntrBkSttlmAmt":{"Ccy":"MWK",
            "ActiveCurrencyAndAmount":"1080"},
    "VrfctnOfTerms":{"IlpV4PrepPacket":"DIICzQAAAAAAAaX..."}}
}    
```
#### Message Details
The details on how to compose and make this API are covered in the following sections:
1. [Core Data Elements](#header-details)<br>This section specifies which fields are required, which fields are optional, and which fields are unsupported in order to meet the message validating requirements.
2. [Header Details](#header-details)<br> This section specifies the header requirements for the API are specified.

#### Core Data Elements
Here are the core data elements that are needed to meet this market practice requirement.

**key**
{{key}}

{{table}}


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

