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

Contact: Dr. Jonathan Pinifolo, <jpinifolo@comesabusinesscouncil.org>

1.  **Related messages:**

Pacs.008.001 - FIToFICustomerCreditTransfer

Pacs.009.001 - FinancialInstitutionCreditTransfer

New messages to be defined sealing the agreement of terms between the
parties for Customer Credit credit transfers and Financial Institution
credit transfers.

1.  **Description of the change request:**

We want to define new elements in the data dictionary to support the
definition of a cryptographic lock which can be attached to the
definition of a credit transfer. The reasons for wanting to attach a
cryptographic lock are given in detail in CR 1357, which describes the
use of the cryptographic lock. The cryptographic lock will be used in
the following messages:

-   The message which defines the agreed terms of a payment. This is a
    new message which is the subject of a Business Justification to be
    submitted to the ISO 20022 Payments SEG.

-   The payment execution message (pacs.008).

-   The message which defines the agreed terms of a cover request. This
    is a new message which is the subject of a Business Justification to
    be submitted to the ISO 20022 Payments SEG.

-   The cover request message (pacs.009).

These elements will be defined by a definition analogous to that used in
the existing data dictionary for elements such as *Frequency36Choice*,
where the creator of the message can choose between different formats
for a frequency of payment. In this case, we will allow the creator of
the message to choose between different types of cryptographic lock.

The following types of cryptographic lock will be supported in the first
instance:

1.  An IlpV4Packet. This will be a representation of the data element of
    an ILP v4 packet, as described
    [here](https://interledger.org/developers/rfcs/interledger-protocol/).
    This element will be an encoded string of arbitrary length. The most
    accurate way of representing this element would be the candidate
    data element *hexBinary*.

2.  A SHA-256 signature created using a private key belonging to the
    entity that sealed the terms of the payment. This signature will
    have a fixed length of 32 bytes, and will be represented as a
    hexadecimal string. The existing data elements which represent
    hexadecimal encodings of binary strings (e.g. Max32HexBinaryText)
    are not suitable for this purpose since they support strings of any
    length up to a maximum. We therefore propose a new data type, whose
    name will be Exact32HexBinaryText. It will be calqued on the
    existing Exact1HexBinaryText, and is described in more detail below.

The definition of the proposed new Exact32HexBinaryText data element in
MDR format will be as follows:

***Exact32HexBinaryText***

*Definition: Specifies a character string with an exact length of 32
binary bytes (64 hexadecimal text characters).*

*Used for hex binary data only, supports only characters A-F and 0-9.*

*Type: Text*

*Format*

*pattern (\[0-9A-F\]\[0-9A-F\]){32}*

The name of the proposed data type will be *CryptographicLockChoice*.
The definition of the proposed new data type in MDR format will be:

**CryptographicLockChoice**

*Definition*: choice of format for a cryptographic lock which ensures
that a payment execution request can only be executed on the terms
previously agreed.

.

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 37%" />
<col style="width: 10%" />
<col style="width: 25%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Or</strong></th>
<th><strong>MessageElement<em>&lt;XML Tag&gt;</em></strong></th>
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
<td>{Or</td>
<td><blockquote>
<p><a href="#_bookmark2601">IlpV4PreparePacket</a>
<em>&lt;Ilpv4PrprPkt&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[1..1]</p>
</blockquote></td>
<td><blockquote>
<p>HexBinary</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Or}</td>
<td><blockquote>
<p><a href="#_bookmark2605">Sha256Signature</a>
<em>&lt;Sh256S&gt;</em></p>
</blockquote></td>
<td><blockquote>
<p>[1..1]</p>
</blockquote></td>
<td><blockquote>
<p>Exact32HexBinaryText</p>
</blockquote></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

1.  **Urgency of the request:**

It is proposed to include this change request in the next regular
maintenance cycle.

1.  **SEG/TSG recommendation:**

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
