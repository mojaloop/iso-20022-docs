**<span class="smallcaps">Change Request</span>**

**<span class="smallcaps">for the update of ISO 20022 financial
repository items</span>**

1.  **Origin of the request:**

*A.1 Submitter*:

The Mojaloop Foundation

*A.2 Contact person:*

Michael Richards. <Michael.Richards@infitx.com>, +44 7785 360009

*A.3 Sponsors*:

1\) Africanenda

2\) Comesa Business Council

Contact: Dr. Jonathan Pinifolo, jpinifolo@comesabusinesscouncil.org

1.  **Related messages:**

Pacs.008.001 - FIToFICustomerCreditTransfer

Pacs.009.001 - FinancialInstitutionCreditTransfer

New messages to be defined sealing the agreement of terms between the
parties for payments and currency conversions.

1.  **Description of the change request:**

We want to define new elements in the data structure which describes a
credit transfer transaction. This element will contain an encoded
representation of the agreed terms of the credit transfer transaction,
together with a signature which the approver of the terms can use to
verify that they are in fact being asked to execute the payment on the
terms agreed, and which other parties to the payment can use to verify
that the beneficiary’s FI has warranted that the transaction has
completed on their books.

This element is optional and non-repetitive. It will be in the form of a
new data dictionary element, as described in an associated change
request (CR1358). The new element’s type name is
*CryptographicLockChoice*.

This new element is an instance of a element of the
*FIToFICustomerCreditTransfer* data structure. This structure is used
both in the FIToFICustomerCreditTransfer element (pacs.008) and in the
FinancialInstitutionCreditTransfer eement (pacs.009). This will result
in new issues of the *FIToFICustomerCreditTransfer* and
*CreditTransferTransactionInformation* elements.

Current structure of the *CreditTransferTransactionInformation* element:

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
<th><strong>Or</strong></th>
<th><strong>MessageElement<em>&lt;XML Tag&gt;</em></strong></th>
<th><strong>Mult.</strong></th>
<th><strong>Type</strong></th>
<th><strong>Constr. No.</strong></th>
<th><strong>Page</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1541">PaymentIdentification</a></strong>
<em>&lt;PmtId&gt;</em></td>
<td>[1..1]</td>
<td>±</td>
<td><a href="#_bookmark1492">C48</a></td>
<td><a href="#_bookmark1541">681</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1542">PaymentTypeInformation</a></strong>
<em>&lt;PmtTpInf&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1542">682</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a
href="#_bookmark1543">InterbankSettlementAmount</a></strong>
<em>&lt;IntrBkSttlmAmt&gt;</em></td>
<td>[1..1]</td>
<td>Amount</td>
<td><a href="#_bookmark1449">C1</a>, <a
href="#_bookmark1455">C10</a></td>
<td><a href="#_bookmark1543">682</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1544">InterbankSettlementDate</a></strong>
<em>&lt;IntrBkSttlmDt&gt;</em></td>
<td>[0..1]</td>
<td>Date</td>
<td></td>
<td><a href="#_bookmark1544">683</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1545">SettlementPriority</a></strong>
<em>&lt;SttlmPrty&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td></td>
<td><a href="#_bookmark1545">683</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1546">SettlementTimeIndication</a></strong>
<em>&lt;SttlmTmIndctn&gt;</em></td>
<td>[0..1]</td>
<td></td>
<td></td>
<td><a href="#_bookmark1546">683</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1547">DebitDateTime</a></strong>
<em>&lt;DbtDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1547">683</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1548">CreditDateTime</a></strong>
<em>&lt;CdtDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1548">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1549">SettlementTimeRequest</a></strong>
<em>&lt;SttlmTmReq&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1549">684</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1550">AcceptanceDateTime</a></strong>
<em>&lt;AccptncDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1550">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1551">PoolingAdjustmentDate</a></strong>
<em>&lt;PoolgAdjstmntDt&gt;</em></td>
<td>[0..1]</td>
<td>Date</td>
<td></td>
<td><a href="#_bookmark1551">684</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1552">InstructedAmount</a></strong>
<em>&lt;InstdAmt&gt;</em></td>
<td>[0..1]</td>
<td>Amount</td>
<td><a href="#_bookmark1450">C2</a>, <a
href="#_bookmark1456">C11</a></td>
<td><a href="#_bookmark1552">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1553">ExchangeRate</a></strong>
<em>&lt;XchgRate&gt;</em></td>
<td>[0..1]</td>
<td>Rate</td>
<td></td>
<td><a href="#_bookmark1553">685</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1554">ChargeBearer</a></strong>
<em>&lt;ChrgBr&gt;</em></td>
<td>[1..1]</td>
<td>CodeSet</td>
<td></td>
<td><a href="#_bookmark1554">685</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1555">ChargesInformation</a></strong>
<em>&lt;ChrgsInf&gt;</em></td>
<td>[0..*]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1555">685</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1556">MandateRelatedInformation</a></strong>
<em>&lt;MndtRltdInf&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1556">686</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a
href="#_bookmark1557">PreviousInstructingAgent1</a></strong>
<em>&lt;PrvsInstgAgt1&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1557">686</a></td>
</tr>
<tr class="even">
<td></td>
<td><p><a
href="#_bookmark1558"><strong>PreviousInstructingAgent1Account</strong></a></p>
<p><em>&lt;PrvsInstgAgt1Acct&gt;</em></p></td>
<td>[0..1]</td>
<td></td>
<td><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></td>
<td><a href="#_bookmark1558">687</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1559">Identification</a></strong>
<em>&lt;Id&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1559">687</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1560">Type</a></strong>
<em>&lt;Tp&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1560">687</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1561">Currency</a></strong>
<em>&lt;Ccy&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td><a href="#_bookmark1450">C2</a></td>
<td><a href="#_bookmark1561">688</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1562">Name</a></strong>
<em>&lt;Nm&gt;</em></td>
<td>[0..1]</td>
<td>Text</td>
<td></td>
<td><a href="#_bookmark1562">688</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1563">Proxy</a></strong>
<em>&lt;Prxy&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1563">688</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1564">PreviousInstructingAgent2</a></strong>
<em>&lt;PrvsInstgAgt2&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1564">689</a></td>
</tr>
<tr class="odd">
<td></td>
<td><p><a
href="#_bookmark1565"><strong>PreviousInstructingAgent2Account</strong></a></p>
<p><em>&lt;PrvsInstgAgt2Acct&gt;</em></p></td>
<td>[0..1]</td>
<td></td>
<td><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></td>
<td><a href="#_bookmark1565">689</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1566">Identification</a></strong>
<em>&lt;Id&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1566">690</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1567">Type</a></strong>
<em>&lt;Tp&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1567">690</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1568">Currency</a></strong>
<em>&lt;Ccy&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td><a href="#_bookmark1450">C2</a></td>
<td><a href="#_bookmark1568">690</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1569">Name</a></strong>
<em>&lt;Nm&gt;</em></td>
<td>[0..1]</td>
<td>Text</td>
<td></td>
<td><a href="#_bookmark1569">691</a></td>
</tr>
</tbody>
</table>

Proposed structure of the *CreditTransferTransactionInformation*
element:

<table>
<colgroup>
<col style="width: 4%" />
<col style="width: 43%" />
<col style="width: 7%" />
<col style="width: 28%" />
<col style="width: 9%" />
<col style="width: 6%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Or</strong></th>
<th><strong>MessageElement<em>&lt;XML Tag&gt;</em></strong></th>
<th><strong>Mult.</strong></th>
<th><strong>Type</strong></th>
<th><strong>Constr. No.</strong></th>
<th><strong>Page</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1541">PaymentIdentification</a></strong>
<em>&lt;PmtId&gt;</em></td>
<td>[1..1]</td>
<td>±</td>
<td><a href="#_bookmark1492">C48</a></td>
<td><a href="#_bookmark1541">681</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1542">PaymentTypeInformation</a></strong>
<em>&lt;PmtTpInf&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1542">682</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a
href="#_bookmark1543">InterbankSettlementAmount</a></strong>
<em>&lt;IntrBkSttlmAmt&gt;</em></td>
<td>[1..1]</td>
<td>Amount</td>
<td><a href="#_bookmark1449">C1</a>, <a
href="#_bookmark1455">C10</a></td>
<td><a href="#_bookmark1543">682</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1544">InterbankSettlementDate</a></strong>
<em>&lt;IntrBkSttlmDt&gt;</em></td>
<td>[0..1]</td>
<td>Date</td>
<td></td>
<td><a href="#_bookmark1544">683</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1545">SettlementPriority</a></strong>
<em>&lt;SttlmPrty&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td></td>
<td><a href="#_bookmark1545">683</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1546">SettlementTimeIndication</a></strong>
<em>&lt;SttlmTmIndctn&gt;</em></td>
<td>[0..1]</td>
<td></td>
<td></td>
<td><a href="#_bookmark1546">683</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1547">DebitDateTime</a></strong>
<em>&lt;DbtDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1547">683</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1548">CreditDateTime</a></strong>
<em>&lt;CdtDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1548">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1549">SettlementTimeRequest</a></strong>
<em>&lt;SttlmTmReq&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1549">684</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1550">AcceptanceDateTime</a></strong>
<em>&lt;AccptncDtTm&gt;</em></td>
<td>[0..1]</td>
<td>DateTime</td>
<td></td>
<td><a href="#_bookmark1550">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1551">PoolingAdjustmentDate</a></strong>
<em>&lt;PoolgAdjstmntDt&gt;</em></td>
<td>[0..1]</td>
<td>Date</td>
<td></td>
<td><a href="#_bookmark1551">684</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1552">InstructedAmount</a></strong>
<em>&lt;InstdAmt&gt;</em></td>
<td>[0..1]</td>
<td>Amount</td>
<td><a href="#_bookmark1450">C2</a>, <a
href="#_bookmark1456">C11</a></td>
<td><a href="#_bookmark1552">684</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1553">ExchangeRate</a></strong>
<em>&lt;XchgRate&gt;</em></td>
<td>[0..1]</td>
<td>Rate</td>
<td></td>
<td><a href="#_bookmark1553">685</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1554">ChargeBearer</a></strong>
<em>&lt;ChrgBr&gt;</em></td>
<td>[1..1]</td>
<td>CodeSet</td>
<td></td>
<td><a href="#_bookmark1554">685</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1555">ChargesInformation</a></strong>
<em>&lt;ChrgsInf&gt;</em></td>
<td>[0..*]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1555">685</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1556">MandateRelatedInformation</a></strong>
<em>&lt;MndtRltdInf&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1556">686</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a
href="#_bookmark1557">PreviousInstructingAgent1</a></strong>
<em>&lt;PrvsInstgAgt1&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1557">686</a></td>
</tr>
<tr class="even">
<td></td>
<td><p><a
href="#_bookmark1558"><strong>PreviousInstructingAgent1Account</strong></a></p>
<p><em>&lt;PrvsInstgAgt1Acct&gt;</em></p></td>
<td>[0..1]</td>
<td></td>
<td><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></td>
<td><a href="#_bookmark1558">687</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1559">Identification</a></strong>
<em>&lt;Id&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1559">687</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1560">Type</a></strong>
<em>&lt;Tp&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1560">687</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1561">Currency</a></strong>
<em>&lt;Ccy&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td><a href="#_bookmark1450">C2</a></td>
<td><a href="#_bookmark1561">688</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1562">Name</a></strong>
<em>&lt;Nm&gt;</em></td>
<td>[0..1]</td>
<td>Text</td>
<td></td>
<td><a href="#_bookmark1562">688</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1563">Proxy</a></strong>
<em>&lt;Prxy&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1563">688</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a
href="#_bookmark1564">PreviousInstructingAgent2</a></strong>
<em>&lt;PrvsInstgAgt2&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1564">689</a></td>
</tr>
<tr class="odd">
<td></td>
<td><p><a
href="#_bookmark1565"><strong>PreviousInstructingAgent2Account</strong></a></p>
<p><em>&lt;PrvsInstgAgt2Acct&gt;</em></p></td>
<td>[0..1]</td>
<td></td>
<td><a href="#_bookmark1459">C15</a>, <a
href="#_bookmark1458">C14</a></td>
<td><a href="#_bookmark1565">689</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1566">Identification</a></strong>
<em>&lt;Id&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1566">690</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1567">Type</a></strong>
<em>&lt;Tp&gt;</em></td>
<td>[0..1]</td>
<td>±</td>
<td></td>
<td><a href="#_bookmark1567">690</a></td>
</tr>
<tr class="even">
<td></td>
<td><strong><a href="#_bookmark1568">Currency</a></strong>
<em>&lt;Ccy&gt;</em></td>
<td>[0..1]</td>
<td>CodeSet</td>
<td><a href="#_bookmark1450">C2</a></td>
<td><a href="#_bookmark1568">690</a></td>
</tr>
<tr class="odd">
<td></td>
<td><strong><a href="#_bookmark1569">Name</a></strong>
<em>&lt;Nm&gt;</em></td>
<td>[0..1]</td>
<td>Text</td>
<td></td>
<td><a href="#_bookmark1569">691</a></td>
</tr>
<tr class="even">
<td></td>
<td>VerificationOfTerms <em>&lt;VrfctnTrms&gt;</em></td>
<td>[0..1]</td>
<td>CryptographicLockChoice</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

We propose the following MDR description of the change:

> *Presence:* \[0..1\]
>
> *Definition:* Information which the FI which assumes credit risk as a
> result of completing the payment can use to confirm that the payment
> which it is being asked to execute is a payment to whose terms it has
> agreed, and which other parties to the payment can subsequently use to
> satisfy themselves that the credit party has warranted that they have
> executed the payment.
>
> Usage: Where it is important to reduce the cost of failed payments, an
> institution or a payments scheme may elect to require that the terms
> of a payment are agreed in advance between the parties. Where this is
> the case, they may further wish to confirm this by issuing to the
> other parties a means which the other parties can use to assert, when
> they request execution of the payment, that the execution is based on
> a set of terms which have been agreed by the creditor institution and
> which have not been varied by any other party. This field allows
> information about the verification of the terms for a payment to be
> attached to the definition of the payment.
>
> “Payment” here refers to an individual credit transfer. The standard
> does not mandate the inclusion of this information for every payment
> in an overall FI to FI payment instruction; and it allows the
> implementer to choose the type of verification from among a range of
> types. Currently supported types are:

-   A hexadecimal string representing a SHA-256 signature.

-   A hexadecimal string representing an ILP version 4 prepare packet.

> The form that this verification should take is left as a matter for
> individual implementations.
>
> *Datatype:* [<u>"</u> <u>CryptographicLockChoice
> "</u>](#_bookmark2882)

1.  **Purpose of the change:**

This change is designed to support a radical reduction in the costs
associated with processing payments by removing the majority of the
costs incurred by financial institutions in remediating failed payments.

A survey based on material collected in 2021 by LexisNexis[1] concluded
that the average annual cost of failed payments (defined as payments
that were rejected by a participant in the payment chain, and therefore
excluding failures due to communications breakdowns) was $360k for
banks, $220k for non-bank financial institutions, and $200k for
corporates. The causes of these failures were broken down as shown
below:

<img src="media/image1.png" style="width:6.22083in;height:6.20694in" />

It appears clear from this analysis that most payment failures could be
intercepted before a payment execution request is made.

A successful IIPS system must be capable of processing large numbers of
low-value transfers (their target average value is 1 USD) at a cost
which makes the system viable. This requirement means that an IIPS
system needs to avoid failures of the kind described above if at all
possible, since failures require time to be spent across all parties in
the dispute.

A key technique for achieving this aim is that IIPS systems require the
parties to agree on the terms of the payment before any funds are
committed. In order to meet this requirement, it is also necessary for
the party who confirms the payment (that is, the creditor party) to be
able to verify that it is in fact being asked to execute a payment whose
terms it has agreed, and for other parties to the payment to be able to
verify that the creditor party has warranted that it has in fact cleared
the funds to its beneficiary, so that all parties will agree on the
status of the payment.

In order to implement this technique, it must be possible to associate
with the credit transfer request sufficient information to allow
institutions which process the credit transfer request to verify, first,
that the request has been reliably approved by the credit party and,
second, that the terms of the credit transfer are in fact those which
were approved and have not been varied in the interim. This information
is associated with the credit transfer and not with the overall payment
request. It would be perfectly legitimate for sets of terms to be agreed
individually, or even out of band, and for them then to be bundled
together in a single payment request.

This proposal does not specify the type of information which a scheme
will mandate in order to achieve these objectives, nor the procedures
that IIPS systems will use to verify the legitimacy of the credit
transfer request. We envisage that these will be matters for the Market
Practice Document for individual implementations.

1.  **Urgency of the request:**

It is proposed to include this change request in the next regular
maintenance cycle.

1.  **Business examples:**

The sequence diagram below shows an example of how the debtor party to a
payment could attach to the payment execution request the cryptographic
lock that it received from the creditor party when the creditor party
approved the terms of the transfer. It then shows how the creditor party
could use the cryptographic lock to verify that the proposed transfer
matches the terms which it agreed to, and how the confirmation could be
used by the other parties to the payment to confirm that the creditor
party’s approval is an approval of the payment whose cryptographic lock
was originally passed to the creditor party.

These features are shown in the following diagram:

<img src="media/image3.svg" style="width:4.931in;height:9.23958in" />

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

[1] [True-Cost-of-Failed-Payments-Global-Report-2021-1\_compressed.pdf
(trustyoursupplier.com)](https://trustyoursupplier.com/wp-content/uploads/2022/06/True-Cost-of-Failed-Payments-Global-Report-2021-1_compressed.pdf)
