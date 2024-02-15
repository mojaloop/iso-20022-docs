**<span class="smallcaps">Change Request</span>**

**<span class="smallcaps">for the update of ISO 20022 financial
repository items</span>**

1.  **Origin of the request:**

*A.1 Submitter*:

The Mojaloop Foundation

*A.2 Contact person:*

Michael Richards. <Michael.Richards@infitx.com>, +44 7785 360009

*A.3 Sponsors*:

1.  **Related messages:**

Pacs.008.001 - FIToFICustomerCreditTransfer

Pacs.009.001 - FinancialInstitutionCreditTransfer

1.  **Description of the change request:**

An expiry time is required when a payment execution request is issued by
one FI to another. This represents the time after which the payment
execution request is invalidated and should not be executed by any of
the parties.

This element is optional and non-repetitive. Its type should be
*IsoDateTime*. We propose the name *ExpiryDateTime* for the element.

*Add structure for pacs.009*

We propose that it should be added to the *GroupHeader* element of the
*FIToFICustomerCreditTransferV11* data structure. It is appropriate for
this value to appear in the header rather than in the information
relating to an individual payment because its intention is to provide a
mechanism for finalising payments where there is a gross failure of a
participant in the system: for instance, because internet access is not
available or because the recipient’s service is unavailable. It is not
intended to trap local failures to meet SLA response times; and
therefore it is not expected that some transfers in a message would pass
while others were timed out.

Current structure:

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 51%" />
<col style="width: 9%" />
<col style="width: 18%" />
<col style="width: 9%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr class="header">
<th><strong><mark>Or</mark></strong></th>
<th><strong><mark>MessageElement<em>&lt;XML
Tag&gt;</em></mark></strong></th>
<th><strong><mark>Mult.</mark></strong></th>
<th><strong><mark>Type</mark></strong></th>
<th><strong><mark>Constr. No.</mark></strong></th>
<th><strong><mark>Page</mark></strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1498">MessageIdentification</a>
<em>&lt;MsgId&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1498"><strong><mark>654</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1499">CreationDateTime</a>
<em>&lt;CreDtTm&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>DateTime</mark></strong></td>
<td></td>
<td><a href="#_bookmark1499"><strong><mark>654</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1500">BatchBooking</a>
<em>&lt;BtchBookg&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Indicator</mark></strong></td>
<td></td>
<td><a href="#_bookmark1500"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1501">NumberOfTransactions</a>
<em>&lt;NbOfTxs&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1501"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1502">ControlSum</a>
<em>&lt;CtrlSum&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Quantity</mark></strong></td>
<td></td>
<td><a href="#_bookmark1502"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a
href="#_bookmark1503">TotalInterbankSettlementAmount</a>
<em>&lt;TtlIntrBkSttlmAmt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Amount</mark></strong></td>
<td><strong><mark><a href="#_bookmark1449">C1</a>, <a
href="#_bookmark1455">C10</a></mark></strong></td>
<td><a href="#_bookmark1503"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1504">InterbankSettlementDate</a>
<em>&lt;IntrBkSttlmDt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Date</mark></strong></td>
<td></td>
<td><a href="#_bookmark1504"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1505">SettlementInformation</a>
<em>&lt;SttlmInf&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1464">C20</a>, <a
href="#_bookmark1466">C22</a>, <a href="#_bookmark1481">C37</a>, <a
href="#_bookmark1482">C38</a>, <a href="#_bookmark1483">C39</a>, <a
href="#_bookmark1484">C40</a>, <a href="#_bookmark1487">C43</a>, <a
href="#_bookmark1488">C44</a></mark></strong></td>
<td><a href="#_bookmark1505"><strong><mark>656</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1506">SettlementMethod</a>
<em>&lt;SttlmMtd&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td></td>
<td><a href="#_bookmark1506"><strong><mark>659</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1507">SettlementAccount</a>
<em>&lt;SttlmAcct&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></mark></strong></td>
<td><a href="#_bookmark1507"><strong><mark>659</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1508">Identification</a>
<em>&lt;Id&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1508"><strong><mark>660</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1509">Type</a>
<em>&lt;Tp&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1509"><strong><mark>660</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1510">Currency</a>
<em>&lt;Ccy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td><a href="#_bookmark1450"><strong><mark>C2</mark></strong></a></td>
<td><a href="#_bookmark1510"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1511">Name</a>
<em>&lt;Nm&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1511"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1512">Proxy</a>
<em>&lt;Prxy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1512"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1513">ClearingSystem</a>
<em>&lt;ClrSys&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td></td>
<td><a href="#_bookmark1513"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="odd">
<td><strong><mark>{Or</mark></strong></td>
<td><strong><mark><a href="#_bookmark1514">Code</a>
<em>&lt;Cd&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td></td>
<td><a href="#_bookmark1514"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="even">
<td><strong><mark>Or}</mark></strong></td>
<td><strong><mark><a href="#_bookmark1515">Proprietary</a>
<em>&lt;Prtry&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1515"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><p><a
href="#_bookmark1516"><strong><mark>InstructingReimbursementAgent</mark></strong></a></p>
<p><em><strong><mark>&lt;InstgRmbrsmntAgt&gt;</mark></strong></em></p></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1516"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><p><a
href="#_bookmark1517"><strong><mark>InstructingReimbursementAgentAccount</mark></strong></a></p>
<p><em><strong><mark>&lt;InstgRmbrsmntAgtAcct&gt;</mark></strong></em></p></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></mark></strong></td>
<td><a href="#_bookmark1517"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1518">Identification</a>
<em>&lt;Id&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1518"><strong><mark>663</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1519">Type</a>
<em>&lt;Tp&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1519"><strong><mark>663</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1520">Currency</a>
<em>&lt;Ccy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td><a href="#_bookmark1450"><strong><mark>C2</mark></strong></a></td>
<td><a href="#_bookmark1520"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1521">Name</a>
<em>&lt;Nm&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1521"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1522">Proxy</a>
<em>&lt;Prxy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1522"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a
href="#_bookmark1523">InstructedReimbursementAgent</a>
<em>&lt;InstdRmbrsmntAgt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1523"><strong><mark>664</mark></strong></a></td>
</tr>
</tbody>
</table>

Proposed structure:

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 51%" />
<col style="width: 9%" />
<col style="width: 18%" />
<col style="width: 9%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr class="header">
<th><strong><mark>Or</mark></strong></th>
<th><strong><mark>MessageElement<em>&lt;XML
Tag&gt;</em></mark></strong></th>
<th><strong><mark>Mult.</mark></strong></th>
<th><strong><mark>Type</mark></strong></th>
<th><strong><mark>Constr. No.</mark></strong></th>
<th><strong><mark>Page</mark></strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1498">MessageIdentification</a>
<em>&lt;MsgId&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1498"><strong><mark>654</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1499">CreationDateTime</a>
<em>&lt;CreDtTm&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>DateTime</mark></strong></td>
<td></td>
<td><a href="#_bookmark1499"><strong><mark>654</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark>PaymentInstructionExpiryDateTime
<em>&lt;PmntInstrctnExpryDtTm&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>DateTime</mark></strong></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1500">BatchBooking</a>
<em>&lt;BtchBookg&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Indicator</mark></strong></td>
<td></td>
<td><a href="#_bookmark1500"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1501">NumberOfTransactions</a>
<em>&lt;NbOfTxs&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1501"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1502">ControlSum</a>
<em>&lt;CtrlSum&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Quantity</mark></strong></td>
<td></td>
<td><a href="#_bookmark1502"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a
href="#_bookmark1503">TotalInterbankSettlementAmount</a>
<em>&lt;TtlIntrBkSttlmAmt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Amount</mark></strong></td>
<td><strong><mark><a href="#_bookmark1449">C1</a>, <a
href="#_bookmark1455">C10</a></mark></strong></td>
<td><a href="#_bookmark1503"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1504">InterbankSettlementDate</a>
<em>&lt;IntrBkSttlmDt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Date</mark></strong></td>
<td></td>
<td><a href="#_bookmark1504"><strong><mark>655</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1505">SettlementInformation</a>
<em>&lt;SttlmInf&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1464">C20</a>, <a
href="#_bookmark1466">C22</a>, <a href="#_bookmark1481">C37</a>, <a
href="#_bookmark1482">C38</a>, <a href="#_bookmark1483">C39</a>, <a
href="#_bookmark1484">C40</a>, <a href="#_bookmark1487">C43</a>, <a
href="#_bookmark1488">C44</a></mark></strong></td>
<td><a href="#_bookmark1505"><strong><mark>656</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1506">SettlementMethod</a>
<em>&lt;SttlmMtd&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td></td>
<td><a href="#_bookmark1506"><strong><mark>659</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1507">SettlementAccount</a>
<em>&lt;SttlmAcct&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></mark></strong></td>
<td><a href="#_bookmark1507"><strong><mark>659</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1508">Identification</a>
<em>&lt;Id&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1508"><strong><mark>660</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1509">Type</a>
<em>&lt;Tp&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1509"><strong><mark>660</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1510">Currency</a>
<em>&lt;Ccy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td><a href="#_bookmark1450"><strong><mark>C2</mark></strong></a></td>
<td><a href="#_bookmark1510"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1511">Name</a>
<em>&lt;Nm&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1511"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1512">Proxy</a>
<em>&lt;Prxy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1512"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1513">ClearingSystem</a>
<em>&lt;ClrSys&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td></td>
<td><a href="#_bookmark1513"><strong><mark>661</mark></strong></a></td>
</tr>
<tr class="even">
<td><strong><mark>{Or</mark></strong></td>
<td><strong><mark><a href="#_bookmark1514">Code</a>
<em>&lt;Cd&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td></td>
<td><a href="#_bookmark1514"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="odd">
<td><strong><mark>Or}</mark></strong></td>
<td><strong><mark><a href="#_bookmark1515">Proprietary</a>
<em>&lt;Prtry&gt;</em></mark></strong></td>
<td><strong><mark>[1..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1515"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><p><a
href="#_bookmark1516"><strong><mark>InstructingReimbursementAgent</mark></strong></a></p>
<p><em><strong><mark>&lt;InstgRmbrsmntAgt&gt;</mark></strong></em></p></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1516"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><p><a
href="#_bookmark1517"><strong><mark>InstructingReimbursementAgentAccount</mark></strong></a></p>
<p><em><strong><mark>&lt;InstgRmbrsmntAgtAcct&gt;</mark></strong></em></p></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td></td>
<td><strong><mark><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></mark></strong></td>
<td><a href="#_bookmark1517"><strong><mark>662</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1518">Identification</a>
<em>&lt;Id&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1518"><strong><mark>663</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1519">Type</a>
<em>&lt;Tp&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1519"><strong><mark>663</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1520">Currency</a>
<em>&lt;Ccy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>CodeSet</mark></strong></td>
<td><a href="#_bookmark1450"><strong><mark>C2</mark></strong></a></td>
<td><a href="#_bookmark1520"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a href="#_bookmark1521">Name</a>
<em>&lt;Nm&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>Text</mark></strong></td>
<td></td>
<td><a href="#_bookmark1521"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><mark><a href="#_bookmark1522">Proxy</a>
<em>&lt;Prxy&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1522"><strong><mark>664</mark></strong></a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><mark><a
href="#_bookmark1523">InstructedReimbursementAgent</a>
<em>&lt;InstdRmbrsmntAgt&gt;</em></mark></strong></td>
<td><strong><mark>[0..1]</mark></strong></td>
<td><strong><mark>±</mark></strong></td>
<td></td>
<td><a href="#_bookmark1523"><strong><mark>664</mark></strong></a></td>
</tr>
</tbody>
</table>

We propose the following MDR description of the change:

> *Presence:* \[0..1\]
>
> *Definition:* The date and time after which the payment execution
> request should be cancelled if it has not completed.
>
> Usage: Where it is important to reduce the cost of failed payments,
> and where infrastructure limitations may mean that participants may
> have connection problems and be unpredictably unreachable, it is
> important that payments should not be left in an indeterminate state.
> The definition of an expiry date for the payment allows participants
> to understand the point after which the payment should be regarded as
> failed. After that point, participants should regard the payment as
> failed due to a communications problem, cancel any funds they have
> reserved or moved as a consequence of the payment request, and mark
> the status of the payment as FAILED.
>
> “Payment” here refers to a group of credit transfers contained in a
> payment execution request. The expiry time quoted is for all the
> individual credit transfer requests in the payment execution request.
> The standard does not mandate the action to be taken by participants
> when a payment execution request expires. This is a matter for
> individual implementations.
>
> *Datatype:* [<u>"isoDateTime"</u>](#_bookmark2882)

1.  **  
    Purpose of the change:**

In the environments in which IIPS systems are deployed, the availability
of systems when required cannot always be guaranteed. Core Banking
Systems are sometimes offline for parts of the day, or entire
participants may not be able to connect to the internet due to network
outages.

In cases like this, the status of a credit transfer request may remain
indeterminate for quite long periods. The sending FI will not know
whether one of the other parties is taking some time to respond, or has
not received the message, or has responded but the response has been
interrupted. It is in circumstances like these that it is possible for
parties to act on different inferences about whether or not the credit
transfer request has been executed; and these differences in inference
allow for the possibility of disputes between the parties. In the case
of the high-volume, very low-value payments which IIPSs are designed to
support, the resolution of disputes is an intolerably expensive matter
and an IIPS system needs to be designed to minimise the number of
disputes which arise.

One of these design decisions is that every payment execution request
should be accompanied by an expiry time. Once the payment request has
expired, all parties to the payment should treat it as a failed payment
and should act accordingly. Before a payment is finalised by the
eventual credit party, provided that the payment has not yet expired all
parties should treat its status as indeterminate and should not take any
irrevocable actions in relation to it.

1.  **Urgency of the request:**

It is proposed to include this change request in the next regular
maintenance cycle.

1.  **Business examples:**

The sequence diagram below shows how the expiry time is used in an IIPS
where a central message routing service manages the interaction between
participants, and where participants communicate with the central
routing service via APIs. The central routing service is responsible for
monitoring transfer requests for expiry.

In the example, the debtor institution requests that a payment be
executed. The creditor institution contacts its core banking system to
execute the transfer of funds, but the CBS does not respond. Nothing
happens in the system and, when the debtor institution enquires after
the status of the payment, as status of INDETERMINATE is returned, as is
normal while a payment is executing.

After the timeout period has elapsed, the central routing service
cancels the payment execution request and informs the parties that the
payment has been cancelled. Now when the debtor institution enquires
after the status of the payment, a status of CANCELLED is returned.

These features are shown in the following diagram:

<img src="media/image2.svg" style="width:6.23472in;height:6.50278in" />

1.  **  
    SEG/TSG recommendation:**

*This section is not to be taken care of by the submitter of the change
request. It will be completed in due time by the SEG(s) in charge of the
related ISO 20022 messages or the TSG for changes related to the BAH.*

<table style="width:90%;">
<colgroup>
<col style="width: 11%" />
<col style="width: 2%" />
<col style="width: 6%" />
<col style="width: 18%" />
<col style="width: 46%" />
<col style="width: 4%" />
</colgroup>
<thead>
<tr class="header">
<th colspan="2"><strong>Consider</strong></th>
<th></th>
<th><strong>Timing</strong></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td colspan="2"></td>
<td colspan="2"><p>- <strong>Next yearly cycle: 2024/2025</strong></p>
<p>(the change will be considered for implementation in the yearly
maintenance cycle which starts in 2024 and completes with the
publication of new message versions in the spring of 2025)</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="2"></td>
<td colspan="2"><p>- <strong>At the occasion of the next maintenance of
the messages</strong></p>
<p>(the change will be considered for implementation, but does not
justify maintenance of the messages in its own right – will be pending
until more critical change requests are received for the
messages)</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td colspan="2"></td>
<td colspan="2"><p>- <strong>Urgent unscheduled</strong></p>
<p>(the change justifies an urgent implementation outside of the normal
yearly cycle)</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td colspan="2"></td>
<td colspan="3">- <strong>Other timing:</strong></td>
<td></td>
</tr>
</tbody>
</table>

Comments:

<table>
<colgroup>
<col style="width: 68%" />
<col style="width: 31%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Reject</strong></th>
<th></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Reason for rejection:
