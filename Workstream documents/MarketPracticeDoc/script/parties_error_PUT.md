
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
    "Rsn": { "Cd": 3204 }
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

   <style>
    td:nth-child(1) {
        width: 25%;
    }
    tr.unsupported {  
    color: black;
    background-color:rgb(241, 188, 188);
    font-size:0.8em;
    line-height: 1; /* Adjust the line height as needed */
    }
    tr.required {  
    color: black;
    background-color: white;
    font-size:0.8em;
    line-height: 1; /* Adjust the line height as needed */
    }
    tr.optional {  
    color: black;
    background-color:rgb(207, 206, 206);
    font-size:0.8em;
    line-height: 1; /* Adjust the line height as needed */
    }
    td, th {
        padding: 1px;
        margin: 1px; 
    }  
  </style>

  <table> <tr> <th>Data Model Type Key</th> <th>Description</th> </tr>
   <tr class="required"> <td><b>required</b></td><td>These fields are required in order to meet the message validating requirements.</td></tr>
   <tr class="optional"> <td><b>optional</b></td><td>These fields can be optionally included in the message. (Some of these fields may be required for a specific scheme as defined in the Scheme Rules for that scheme.)</td></tr>
   <tr class="unsupported"> <td><b>unsupported</b></td><td>These fields are actively not supported. The functionality specifying data in these fields are not compatible with a Mojaloop scheme, and will fail message validation if provided.</td></tr>
  </table>
   <br><br>
    

Here is the defined core data element table.

<table>
  <tr>
    <th>ISO 20022 Field</th>
    <th>Data Model</th>
    <th>Description</th>
  </tr>
      <tr class=required><td>  <b>Assgnmt</b> - IdentificationAssignment4</td><td>[1..1]</td><td></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>MsgId</b> - MaxText</td><td>[1..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>CreDtTm</b> - A particular point in the progression of time defined by a mandatory</td><td>[1..1]</td><td>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br></td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Cretr</b> - Party50Choice</td><td>[0..0]</td><td></td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>FrstAgt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..0]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Assgnr</b> - Party50Choice</td><td>[1..1]</td><td></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Assgne</b> - Party50Choice</td><td>[1..1]</td><td></td></tr>
<tr class=unsupported><td>  <b>OrgnlAssgnmt</b> - MessageIdentification8</td><td>[0..0]</td><td></td></tr>
<tr class=required><td>  <b>Rpt</b> - VerificationReport5</td><td>[1..1]</td><td></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlId</b> - MaxText</td><td>[1..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Vrfctn</b> - Definition: Identifies whether the party and/or account information received is correct.</td><td>[1..1]</td><td><br>• Meaning When True: Indicates that the identification information received is correct.<br>• Meaning When False: Indicates that the identification information received is incorrect<br></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Rsn</b> - Choice of format for the verification reason.</td><td>[1..1]</td><td>Only one, between the coded and the proprietary, can be chosen.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlPtyAndAcctId</b> - IdentificationInformation5</td><td>[0..1]</td><td></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Pty</b> - PartyIdentification</td><td>[0..1]</td><td>Specifies the identification of a person or an organisation.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - PartyChoice</td><td>[0..1]</td><td>NOTE: Unsure on the description.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtryOfRes</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtctDtls</b> - Contact</td><td>[0..1]</td><td>Specifies the details of the contact person.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>NmPrfx</b> - Specifies the terms used to formally address a person.</td><td>[0..1]</td><td><br>DOCT: Doctor or Dr<br>MADM: Madam<br>MISS: Miss<br>MIST: Mistress<br>MIKS: Mx<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PhneNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>MobNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>FaxNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>URLAdr</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 2048 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailAdr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 256 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailPurp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>JobTitl</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Rspnsblty</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Othr</b> - OtherContact</td><td>[0..1]</td><td>Communication device number or electronic address used for communication.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ChanlTp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 4 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 128 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PrefrdMtd</b> - Preferred method used to reach the individual contact within an organisation.</td><td>[0..1]</td><td>LETT: Letter<br>MAIL: Email<br>PHON: Phone<br>FAXX: Fax<br>CELL: Mobile phone<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Acct</b> - CashAccount</td><td>[0..1]</td><td>Provides the details to identify an account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - AccountIdentificationChoice</td><td>[0..1]</td><td>Specifies the unique identification of an account as assigned by the account servicer.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Tp</b> - CashAccountTypeChoice</td><td>[0..1]</td><td>Specifies the nature, or use of the account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ccy</b> - A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".</td><td>[0..1]</td><td>NOTE: This has been modified away from the original ISO20022 pattern to enums.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Prxy</b> - ProxyAccountIdentification</td><td>[0..1]</td><td>Information related to a proxy identification of the account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Tp</b> - ProxyAccountTypeChoice</td><td>[0..1]</td><td>Specifies the type of the proxy account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 2048 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Agt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..1]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>FinInstnId</b> - FinancialInstitutionIdentification</td><td>[0..1]</td><td>Information used to identify a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BICFI</b> - Code allocated to a financial institution by the ISO 9362 Registration</td><td>[0..1]</td><td><br>Authority as described in ISO 9362: 2014<br><br>- "Banking - Banking telecommunication messages - Business identifier code (BIC)".<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ClrSysMmbId</b> - ClearingSystemMemberIdentification</td><td>[0..1]</td><td>Unique identification, as assigned by a clearing system, to unambiguously identify a member of the clearing system.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ClrSysId</b> - ClearingSystemIdentificationChoice</td><td>[0..1]</td><td>Specifies the clearing system identification.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>MmbId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>LEI</b> - LEIIdentifier</td><td>[0..1]</td><td>Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)". ^([0-9A-Z]{18,18}[0-9]{2,2})$</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Othr</b> - GenericFinancialIdentification</td><td>[0..1]</td><td>Unique and unambiguous identification of a person, which is used to refer to a person in a financial context.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SchmeNm</b> - FinancialIdentificationSchemeNameChoice</td><td>[0..1]</td><td>Specifies the name of the identification scheme.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Issr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BrnchId</b> - BranchData</td><td>[0..1]</td><td>Information that locates and identifies a specific branch of a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>LEI</b> - LEIIdentifier</td><td>[0..1]</td><td>Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)". ^([0-9A-Z]{18,18}[0-9]{2,2})$</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>UpdtdPtyAndAcctId</b> - IdentificationInformation5</td><td>[0..1]</td><td></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Pty</b> - PartyIdentification</td><td>[0..1]</td><td>Specifies the identification of a person or an organisation.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - PartyChoice</td><td>[0..1]</td><td>NOTE: Unsure on the description.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtryOfRes</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtctDtls</b> - Contact</td><td>[0..1]</td><td>Specifies the details of the contact person.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>NmPrfx</b> - Specifies the terms used to formally address a person.</td><td>[0..1]</td><td><br>DOCT: Doctor or Dr<br>MADM: Madam<br>MISS: Miss<br>MIST: Mistress<br>MIKS: Mx<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PhneNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>MobNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>FaxNb</b> - PhoneNumber</td><td>[0..1]</td><td>Double check this regex.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>URLAdr</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 2048 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailAdr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 256 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailPurp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>JobTitl</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Rspnsblty</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Othr</b> - OtherContact</td><td>[0..1]</td><td>Communication device number or electronic address used for communication.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ChanlTp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 4 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 128 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PrefrdMtd</b> - Preferred method used to reach the individual contact within an organisation.</td><td>[0..1]</td><td>LETT: Letter<br>MAIL: Email<br>PHON: Phone<br>FAXX: Fax<br>CELL: Mobile phone<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Acct</b> - CashAccount</td><td>[0..1]</td><td>Provides the details to identify an account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - AccountIdentificationChoice</td><td>[0..1]</td><td>Specifies the unique identification of an account as assigned by the account servicer.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Tp</b> - CashAccountTypeChoice</td><td>[0..1]</td><td>Specifies the nature, or use of the account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ccy</b> - A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".</td><td>[0..1]</td><td>NOTE: This has been modified away from the original ISO20022 pattern to enums.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Prxy</b> - ProxyAccountIdentification</td><td>[0..1]</td><td>Information related to a proxy identification of the account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Tp</b> - ProxyAccountTypeChoice</td><td>[0..1]</td><td>Specifies the type of the proxy account.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 2048 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Agt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..1]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>FinInstnId</b> - FinancialInstitutionIdentification</td><td>[0..1]</td><td>Information used to identify a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BICFI</b> - Code allocated to a financial institution by the ISO 9362 Registration</td><td>[0..1]</td><td><br>Authority as described in ISO 9362: 2014<br><br>- "Banking - Banking telecommunication messages - Business identifier code (BIC)".<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ClrSysMmbId</b> - ClearingSystemMemberIdentification</td><td>[0..1]</td><td>Unique identification, as assigned by a clearing system, to unambiguously identify a member of the clearing system.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ClrSysId</b> - ClearingSystemIdentificationChoice</td><td>[0..1]</td><td>Specifies the clearing system identification.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>MmbId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>LEI</b> - LEIIdentifier</td><td>[0..1]</td><td>Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)". ^([0-9A-Z]{18,18}[0-9]{2,2})$</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Othr</b> - GenericFinancialIdentification</td><td>[0..1]</td><td>Unique and unambiguous identification of a person, which is used to refer to a person in a financial context.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SchmeNm</b> - FinancialIdentificationSchemeNameChoice</td><td>[0..1]</td><td>Specifies the name of the identification scheme.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Issr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BrnchId</b> - BranchData</td><td>[0..1]</td><td>Information that locates and identifies a specific branch of a financial institution.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>LEI</b> - LEIIdentifier</td><td>[0..1]</td><td>Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)". ^([0-9A-Z]{18,18}[0-9]{2,2})$</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..0]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstBx</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Room</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstCd</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>TwnLctnNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>DstrctNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CtrySubDvsn</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Ctry</b> - CountryCode</td><td>[0..1]</td><td>Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrLine</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>  <b>SplmtryData</b> - SupplementaryData</td><td>[0..1]</td><td>Additional information that cannot be captured in the structured fields and/or any other specific block.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>PlcAndNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 350 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Envlp</b> - SupplementaryDataEnvelope1</td><td>[0..1]</td><td>Technical component that contains the validated supplementary data information. This technical envelope allows to segregate the supplementary data information from any other information.<br></td></tr>
</table>


