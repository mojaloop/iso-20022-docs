## 7.13 PATCH /fxTransfers/{ID}
| Financial Institution to Financial Institution Payment Status Report - **pacs.002.001.15**|
|--|

#### Context 
*(HUB -> FXP)*

This message use by the HUB to inform the foreign exchange provider participant in a cross currency transfer of the successful conclusion of the conversion. This message is only generated if the dependent transfer is committed in the hub.

Here is an example of the message:
```json
{
"GrpHdr": {
    "MsgId":"01JBVM1CGC5A18XQVYYRF68FD1",
    "CreDtTm":"2024-11-04T12:57:45.228Z"},
"TxInfAndSts":{
    "PrcgDt":{
        "DtTm":"2024-11-04T12:57:45.213Z"},
    "TxSts":"COMM"}
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
      <tr class=required><td>  <b>GrpHdr</b> - GroupHeader</td><td>[1..1]</td><td>Set of characteristics shared by all individual transactions included in the message.</td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>MsgId</b> - MaxText</td><td>[1..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>CreDtTm</b> - A particular point in the progression of time defined by a mandatory</td><td>[1..1]</td><td>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br></td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>InstgAgt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..0]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>InstdAgt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..0]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlBizQry</b> - OriginalBusinessQuery1</td><td>[0..0]</td><td></td></tr>
<tr class=unsupported><td>  <b>OrgnlGrpInfAndSts</b> - OriginalGroupHeader22</td><td>[0..0]</td><td></td></tr>
<tr class=required><td>  <b>TxInfAndSts</b> - PaymentTransaction161</td><td>[1..1]</td><td></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>StsId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlGrpInf</b> - OriginalGroupInformation29</td><td>[0..0]</td><td></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlInstrId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlEndToEndId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlTxId</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlUETR</b> - UUIDv4Identifier</td><td>[0..1]</td><td></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>TxSts</b> - Specifies the external payment transaction status code.</td><td>[1..1]</td><td><br>For FSPIOP transfer state enumeration mappings:<br>{<br>  "COMM": "COMMITED",<br>  "RESV": "RESERVED",<br>  "RECV": "RECEIVED",<br>  "ABOR": "ABORTED"<br>}<br><br>NOTE: enum enforcement is not apart of the ISO20022 specification, but is added here for FSPIOP mappings.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>StsRsnInf</b> - StatusReasonInformation</td><td>[0..1]</td><td>Unsure on description.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Orgtr</b> - PartyIdentification</td><td>[0..1]</td><td>Specifies the identification of a person or an organisation.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Nm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PstlAdr</b> - PostalAddress</td><td>[0..1]</td><td>Information that locates and identifies a specific address, as defined by postal services.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AdrTp</b> - AddressTypeChoice</td><td>[0..1]</td><td>Choice of formats for the type of address.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>CareOf</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>SubDept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>StrtNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>BldgNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 140 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Flr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>UnitNb</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 16 characters.</td></tr>
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
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>URLAdr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 2048 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailAdr</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 256 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>EmailPurp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>JobTitl</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Rspnsblty</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Dept</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 70 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Othr</b> - OtherContact</td><td>[0..1]</td><td>Communication device number or electronic address used for communication.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>ChanlTp</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 4 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Id</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 128 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PrefrdMtd</b> - Preferred method used to reach the individual contact within an organisation.</td><td>[0..1]</td><td>LETT: Letter<br>MAIL: Email<br>PHON: Phone<br>FAXX: Fax<br>CELL: Mobile phone<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Rsn</b> - StatusReasonChoice</td><td>[0..1]</td><td>Specifies the reason for the status.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>AddtlInf</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 105 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>ChrgsInf</b> - NOTE: Unsure on description.</td><td>[0..0]</td><td><br>Seemingly a generic schema for charges, with an amount, agent, and type.<br></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>AccptncDtTm</b> - A particular point in the progression of time defined by a mandatory</td><td>[0..1]</td><td>date and a mandatory time component, expressed in either UTC time<br>format (YYYY-MM-DDThh:mm:ss.sssZ), local time with UTC offset format<br>(YYYY-MM-DDThh:mm:ss.sss+/-hh:mm), or local time format<br>(YYYY-MM-DDThh:mm:ss.sss). These representations are defined in<br>"XML Schema Part 2: Datatypes Second Edition -<br>W3C Recommendation 28 October 2004" which is aligned with ISO 8601.<br><br>Note on the time format:<br>1) beginning / end of calendar day<br>00:00:00 = the beginning of a calendar day<br>24:00:00 = the end of a calendar day<br><br>2) fractions of second in time format<br>Decimal fractions of seconds may be included. In this case, the<br>involved parties shall agree on the maximum number of digits that are allowed.<br></td></tr>
<tr class=required><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>PrcgDt</b> - StatusReasonChoice</td><td>[1..1]</td><td>Specifies the reason for the status.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>FctvIntrBkSttlmDt</b> - StatusReasonChoice</td><td>[0..0]</td><td>Specifies the reason for the status.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>AcctSvcrRef</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>ClrSysRef</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 35 characters.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>InstgAgt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..0]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>InstdAgt</b> - BranchAndFinancialInstitutionIdentification</td><td>[0..0]</td><td>Unique and unambiguous identification of a financial institution or a branch of a financial institution.</td></tr>
<tr class=unsupported><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>OrgnlTxRef</b> - OriginalTransactionReference42</td><td>[0..0]</td><td></td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>SplmtryData</b> - SupplementaryData</td><td>[0..1]</td><td>Additional information that cannot be captured in the structured fields and/or any other specific block.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>PlcAndNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 350 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <b>Envlp</b> - SupplementaryDataEnvelope1</td><td>[0..1]</td><td>Technical component that contains the validated supplementary data information. This technical envelope allows to segregate the supplementary data information from any other information.<br></td></tr>
<tr class=optional><td>  <b>SplmtryData</b> - SupplementaryData</td><td>[0..1]</td><td>Additional information that cannot be captured in the structured fields and/or any other specific block.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>PlcAndNm</b> - MaxText</td><td>[0..1]</td><td>Specifies a character string with a maximum length of 350 characters.</td></tr>
<tr class=optional><td>&nbsp;&nbsp;&nbsp;&nbsp;  <b>Envlp</b> - SupplementaryDataEnvelope1</td><td>[0..1]</td><td>Technical component that contains the validated supplementary data information. This technical envelope allows to segregate the supplementary data information from any other information.<br></td></tr>
</table>

