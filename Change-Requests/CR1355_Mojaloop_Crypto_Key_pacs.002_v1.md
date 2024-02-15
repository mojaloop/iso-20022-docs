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

Pacs.002.001 - FIToFIPaymentStatusReport

New message to be defined sealing the agreement of terms between the
parties.

1.  **Description of the change request:**

We want to add an element to the data structure which describes a
payment transaction. This element will contain a signature which other
parties to the payment can use to verify that the beneficiary’s FI has
warranted that the transaction has completed on their books, and will be
used if the payment execution request has used the ILP v4 method of
cryptographic locking See CR 1357 and CR 1358).

This element is optional and non-repetitive. It will be in the form of
an encoded string, and is an instance of the existing ISO 20022
*Exact32HexBinaryText* type described in CR 1358. We propose the name
*ExecutionConfirmation* for the element.

We propose that it should be added to the *TxInfAndSts* element of the
*FIToFIPaymentStatusReport* data structure. This will result in new
issues of the *FIToFIPaymentStatusReport* and *PaymentTransaction*
elements.

Current structure of the *PaymentTransaction* element:

<table style="width:100%;">
<colgroup>
<col style="width: 5%" />
<col style="width: 48%" />
<col style="width: 7%" />
<col style="width: 17%" />
<col style="width: 10%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Or</strong></th>
<th><blockquote>
<p><strong>MessageElement<em>&lt;XML Tag&gt;</em></strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Mult.</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Type</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Constr. No.</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Page</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark58">StatusIdentification</a></strong>
<em>&lt;StsId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark58">32</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark59">OriginalGroupInformation</a></strong>
<em>&lt;OrgnlGrpInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark59">32</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark60">OriginalInstructionIdentification</a></strong>
<em>&lt;OrgnlInstrId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark60">32</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark61">OriginalEndToEndIdentification</a></strong>
<em>&lt;OrgnlEndToEndId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark61">32</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark62">OriginalTransactionIdentification</a></strong>
<em>&lt;OrgnlTxId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark62">33</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark63">OriginalUETR</a></strong>
<em>&lt;OrgnlUETR&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>IdentifierSet</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark63">33</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark64">TransactionStatus</a></strong>
<em>&lt;TxSts&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>CodeSet</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark64">33</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark65">StatusReasonInformation</a></strong>
<em>&lt;StsRsnInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..*]</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark31">C26</a></p>
</blockquote></td>
<td><blockquote>
<p><a href="#_bookmark65">33</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark71">ChargesInformation</a></strong>
<em>&lt;ChrgsInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..*]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark71">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark72">AcceptanceDateTime</a></strong>
<em>&lt;AccptncDtTm&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>DateTime</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark72">35</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark73">EffectiveInterbankSettlementDate</a></strong>
<em>&lt;FctvIntrBkSttlmDt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark73">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark74">AccountServicerReference</a></strong>
<em>&lt;AcctSvcrRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark74">35</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark75">ClearingSystemReference</a></strong>
<em>&lt;ClrSysRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark75">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark76">InstructingAgent</a></strong>
<em>&lt;InstgAgt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark76">36</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark77">InstructedAgent</a></strong>
<em>&lt;InstdAgt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark77">36</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark78">OriginalTransactionReference</a></strong>
<em>&lt;OrgnlTxRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark78">36</a></p>
</blockquote></td>
</tr>
</tbody>
</table>

Proposed structure of the *PaymentTransaction* element:

<table style="width:100%;">
<colgroup>
<col style="width: 4%" />
<col style="width: 49%" />
<col style="width: 7%" />
<col style="width: 20%" />
<col style="width: 9%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Or</strong></th>
<th><blockquote>
<p><strong>MessageElement<em>&lt;XML Tag&gt;</em></strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Mult.</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Type</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Constr. No.</strong></p>
</blockquote></th>
<th><blockquote>
<p><strong>Page</strong></p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark58">StatusIdentification</a></strong>
<em>&lt;StsId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark58">32</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark59">OriginalGroupInformation</a></strong>
<em>&lt;OrgnlGrpInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark59">32</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark60">OriginalInstructionIdentification</a></strong>
<em>&lt;OrgnlInstrId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark60">32</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark61">OriginalEndToEndIdentification</a></strong>
<em>&lt;OrgnlEndToEndId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark61">32</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark62">OriginalTransactionIdentification</a></strong>
<em>&lt;OrgnlTxId&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark62">33</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark63">OriginalUETR</a></strong>
<em>&lt;OrgnlUETR&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>IdentifierSet</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark63">33</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark64">TransactionStatus</a></strong>
<em>&lt;TxSts&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>CodeSet</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark64">33</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark65">StatusReasonInformation</a></strong>
<em>&lt;StsRsnInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..*]</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark31">C26</a></p>
</blockquote></td>
<td><blockquote>
<p><a href="#_bookmark65">33</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark71">ChargesInformation</a></strong>
<em>&lt;ChrgsInf&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..*]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark71">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark72">AcceptanceDateTime</a></strong>
<em>&lt;AccptncDtTm&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>DateTime</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark72">35</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark73">EffectiveInterbankSettlementDate</a></strong>
<em>&lt;FctvIntrBkSttlmDt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark73">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark74">AccountServicerReference</a></strong>
<em>&lt;AcctSvcrRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark74">35</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark75">ClearingSystemReference</a></strong>
<em>&lt;ClrSysRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>Text</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark75">35</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark76">InstructingAgent</a></strong>
<em>&lt;InstgAgt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark76">36</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><strong><a href="#_bookmark77">InstructedAgent</a></strong>
<em>&lt;InstdAgt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td><blockquote>
<p>±</p>
</blockquote></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark77">36</a></p>
</blockquote></td>
</tr>
<tr class="even">
<td></td>
<td><blockquote>
<p><strong><a
href="#_bookmark78">OriginalTransactionReference</a></strong>
<em>&lt;OrgnlTxRef&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[0..1]</p>
</blockquote></td>
<td></td>
<td></td>
<td><blockquote>
<p><a href="#_bookmark78">36</a></p>
</blockquote></td>
</tr>
<tr class="odd">
<td></td>
<td><blockquote>
<p><mark><strong>ExecutionConfirmation</strong>
<em>&lt;ExctnCnfrmtn&gt;</em></mark></p>
</blockquote></td>
<td><blockquote>
<p><mark>[0..1]</mark></p>
</blockquote></td>
<td><mark>Exact32HexBinaryText</mark></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

We propose the following MDR description of the change:

> *Presence:* \[0..1\]
>
> *Definition:* when the FI which assumes credit risk as a result of
> completing the payment has satisfied itself that the payment which it
> is being asked to execute is a payment to whose terms it has agreed,
> and when it has committed to crediting the beneficiary with the
> payment, it responds to the other parties to the payment with a
> cryptographic key. The other parties to the payment can subsequently
> use this key to satisfy themselves that the credit party has warranted
> that they have executed the payment.
>
> Usage: Where it is important to reduce the cost of failed payments, an
> institution or a payments scheme may elect to require that the terms
> of a payment are agreed in advance between the parties. Where this is
> the case, they may further wish to confirm this by issuing to the
> other parties a means which the other parties can use to assert, when
> they request execution of the payment, that the execution is based on
> a set of terms which have been agreed by the creditor institution and
> which have not been varied by any other party. When the creditor party
> subsequently commits the payment, it may return a cryptographic key to
> the other parties to the payment. Those parties can use the verifiable
> relationship between the key and the original lock, together with a
> non-repudiation signature, to implement a two-factor verification that
> the commitment matches the original lock which was applied to the
> terms of the payment, and that it was in fact issued by the party who
> originally sealed the terms of the payment.
>
> “Payment” here refers to an individual credit transfer. The standard
> does not mandate the inclusion of this information for every payment
> in an overall FI to FI payment instruction; nor does it prescribe the
> form that this verification should take. These are matters for
> individual implementations.
>
> *Datatype:* [<u>"</u> <u>Exact32HexBinaryText"</u>](#_bookmark2882)

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
intercepted before a payment request is made.

A successful IIPS system must be capable of processing large numbers of
low-value transfers (their target average value is 1USD) at a cost which
makes the system viable. This requirement means that an IIPS system
needs to avoid failures of the kind described above if at all possible,
since failures require time to be spent across all parties in the
dispute.

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

When the creditor party to the payment approves the payment execution
request, it will provide evidence which other parties to the payment can
use to check that the cryptographic lock which they presented to the
creditor institution was approved by the payer institution, and that it
was the payer institution that approved it.

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
