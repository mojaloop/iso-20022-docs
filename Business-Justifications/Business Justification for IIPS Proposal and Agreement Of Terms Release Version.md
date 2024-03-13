**<span class="smallcaps">Business Justification</span>**

**<span class="smallcaps">for the development of new ISO 20022 financial
repository items</span>**

*Note: the purpose of this document is to give guidelines to
organisations that want to develop new candidate ISO 20022 message
definitions. Such requests are subject to the approval of a business
justification by the ISO 20022 Registration Management Group (RMG).
Please consult the iso20022.org website for additional details on
[<u>the registration
process</u>](http://www.iso20022.org/development.page). The business
justification must include the following captions, as described.
Business justifications are to be sent via e-mail to
[<u>iso20022ra@iso20022.org</u>](mailto:iso20022ra@iso20022.org)*

1.  **Name of the request:**

Agreement of Terms for payments and cover requests.

1.  **Submitting organisation(s):**

The Mojaloop Foundation

*A.2 Contact person:*

Michael Richards.
[<u>Michael.Richards@infitx.com</u>](mailto:Michael.Richards@infitx.com),
+44 7785 360009

*A.3 Sponsors*:

1\) Africanenda

2\) Comesa Business Council

Contact: Dr. Jonathan Pinifolo, jpinifolo@comesabusinesscouncil.org

1.  **Scope of the new development:**

This Business Justification is intended to support the efficient
processing of FI-to-FI customer credit transfers (pacs.008) and
financial institution credit transfers (pacs.009) in environments where
systems are processing large numbers of low-value transfers. By “large
numbers” we mean a performance objective of processing 1000 financial
transactions per second; by “low-value” we mean an average transfer size
of the equivalent of 1 USD in local currency.

In any payment context, the cost of manually managing payment exceptions
is considerable, and is to be avoided where possible. This is
particularly acute with low-value transfers, since the typical cost of
remediating a failed payment is orthogonal to the value of the payment.
Transfers with these characteristics cannot afford the cost of
remediating payments when those payments have already caused funds to be
reserved or committed by participants in the transfer. It is also clear
from surveys that most of the causes of failure in payments are simple
misattributions of identifiers.

A survey based on material collected in 2021 by LexisNexis[1] concluded
that the average annual cost of failed payments (defined as payments
that were rejected by a participant in the payment chain, and therefore
excluding failures due to communications breakdowns) was $360k for
banks, $220k for non-bank financial institutions, and $200k for
corporates. The causes of these failures were broken down as shown
below:

<img src="media/image1.png" style="width:6.22083in;height:6.21042in" />

The same survey suggests that, at present, approximately 14% of
cross-border payments incur a remediation charge, and that the average
amount of that charge is USD 12. This doesn’t sound like a great deal:
if the remediation charge were averaged over all cross-border payments,
then it would be only $1.68 per payment. However, when we put this
against the FSB objective of restricting the costs of cross-border
payments to 3%, and eventually to 1%, of the payment amount, the story
looks very different. If costs were restricted to 3% of payment amount,
then all payments of less than $56 would be unprofitable; at 1% the
break-even point rises to $168: and this assumes that the costs of
remediation are the only costs associated with a payment, which we know
is not the case.

If these errors could be identified and fixed before any of the
participants in the transfer has committed funds on the expectation that
the transfer will succeed, then the cost of remediation can be
transferred from the Financial Institutions participating in the payment
to the customers. In particular, if the debtor customer can see a clear
statement of who is being paid, how much will be debited from their
account and how much their beneficiary’s account will be credited, and
give their explicit approval to the transfer before execution is
initiated, our experience is that the need for remediation in the
payments space plummets.

In addition to this, funds are reserved to cover debtor obligations
arising from the payment. For domestic payments, these funds will be
reserved against the originating customer’s account; for payments which
also require currency conversion or other forms of cover, funds will
also be reserved against the debtor FI’s account, and perhaps against
other intermediaries’ accounts as well. It is important for small and
large payments that account holders and institutions should not be
deprived of access to their funds, even temporarily, unless there is the
best possible chance that the payment they want to make will be
successful.

We therefore need some way in which the parties to a payment can propose
and agree the terms of the payment before execution begins. For each
type of payment covered by this structure (currently, pacs.008 and
pacs.009), the following messages will be required:

1.  A message which allows a party to the payment to propose the terms
    on which the payment should be made, or to ensure that they are
    recorded and validated in cases where they may already have been
    agreed in an out-of-loop process.

2.  A message which allows the responsible party (in our world, this is
    the debtor FI) to:

    1.  Confirm the terms of the payment.

    2.  Attach a cryptographic lock (described in CRs to be submitted to
        the Payments SEG) to the agreed terms of the payment.

    3.  Attach a time by which the payment must be executed.

When the second of these messages has been executed and the
cryptographic lock returned to the ultimate debtor FI, then the debtor
FI will return the cryptographic lock to the creditor FI as part of the
payment execution request (pacs.008 or pacs.009). This will enable the
creditor FI to verify that it is indeed being asked to execute the
payment on the terms previously agreed, and that the execution request
was received within the validity period of the contract. Requests
covering the changes to pacs.008 and pacs.009 to meet this requirement
have already been submitted to the Payments SEG (CRs 1357 and 1358).

Following this process, all parties can confirm that the payment which
is being executed is indeed the payment which was agreed; and hence
that, subject to *force majeure* such as suspension of the beneficiary’s
account, the payment will indeed be executed. This technique reduces the
chances of payment failure to close to zero.

This process of the agreement of terms represents the negotiations
leading to a contract to execute the payment. In much the same way, the
providers and the consumers of any service will reach a formal agreement
on the terms under which that service will be provided; and the
existence of that formal agreement will greatly increase the chances of
the service being executed to the satisfaction of both parties. This is
not intended to act in any way as a restraint of competition in
situations (such as, for instance, currency conversion) where an
equivalent service could be provided by multiple service providers. In
the case of the institutions which directly hold the accounts of the
ultimate parties to the payment, no substitute is possible. CAMT 52 and
53 contains the balance of an account (e.g. settled funds), CAMT 60 is a
request for statement.

We therefore expect that four messages will be required:

1.  Proposal of terms for pacs.008 -

2.  Confirmation of terms for pacs.008

3.  Proposal of terms for pacs.009

4.  Confirmation of terms for pacs.009

We do not anticipate that fields of the Business Application Header
(BAH) will be repeated in the proposed messages.

We would like to deploy the new messages in the ISO 20022 XML syntax. We
also propose to deploy API versions of them at a later date.

The proposed resource anatomy of an entity-to-entity payment using the
Mojaloop API, together with the assignment of proposed ISO 20022
messages to each endpoint, is as follows.

The payment is divided into four phases:

1.  Discovery. The discovery phase contains the following sub-phases:

    1.  Identification by the debtor party’s account-holding institution
        of the institution which holds the beneficiary’s account.

    2.  Acknowledgment by the beneficiary’s FI that the beneficiary’s
        account can receive funds in principle.

    3.  Return of information relating to the beneficiary, such as name,
        currency and KYC information.

2.  Agreement of terms. In this phase, the terms under which the payment
    can be executed are agreed between the parties. The agreement phase
    establishes the following characteristics of the payment:

    1.  Currency conversion terms for the payment if the payment
        requires it.

        1.  Identification of one or more institutions which will agree
            to perform currency conversion if it is required.

        2.  Agreement on an exchange rate and associated fees for the
            payment.

    2.  Exchange of KYC information relating to the debtor and creditor
        parties to the payment.

    3.  Recording any fees or subventions payable as a consequence of
        the payment, together with the party responsible for them.

    4.  The type of payment.

    5.  A cryptographic lock which enables the creditor party to
        establish that it is being asked to execute the payment under
        the terms agreed.

    6.  An expiry time for the agreed terms.

3.  Clearing the payment. In this phase, the payment is irrevocably
    disbursed to the eventual recipient’s account, and one or more
    obligations are created between the FIs who are, or who represent,
    the parties to the payment.

    1.  Prior to clearing the payment, good funds which have been
        deposited by the debtor party/ies to the payment to guarantee
        settlement of the obligation are reserved by a determining
        party.

4.  Settling the payment. In this phase, the obligations created in the
    previous phase are settled. Because of the typically small amounts
    of individual payments in IIPS systems and their high volume, IIPS
    systems typically settle according to the deferred net settlement
    model, in which net obligations over a period of time are
    discharged, either bilaterally or multilaterally. Deferring the
    settlement phase until after the clearing phase means that
    accelerating the speed at which settlement can be removed from the
    critical path for execution of a payment. Since settlement processes
    are typically designed for large payments where instant responses
    are not required, and are frequently difficult to change, removing
    them from the critical path is both the simplest and the quickest
    route to implementing an IIPS system. The credit risks associated
    with expecting the creditor FI irrevocably to transfer funds to
    their beneficiary before they have received the funds from the
    debtor FI are typically mitigated by insisting on the provision of
    liquidity cover by any parties who will incur obligations as a
    consequence of the payment being executed.

The following sequence diagram shows the operation of the agreement
phase in an IIPS payment:

<img src="media/image2.png" style="width:5in;height:9.68403in" />

New messages

1.  **Purpose of the new development:**

The Mojaloop Foundation is currently supporting the design, deployment
and implementation of a regional Inclusive Instant Payments System for
an organisation which represents 21 jurisdictions in Eastern and
Southern Africa. One of the requirements for the regional deployment is
that it should use ISO 20022 messaging for the cross-border payments.
Given that another purpose of the system is that it should support
merchants at the very bottom of the economic pyramid (roadside and small
market traders,) it is fundamentally important that the costs of the
system be reduced to a minimum. We therefore need to implement these new
messages as part of this deployment.

At present, participating jurisdictions use different and mutually
incompatible message syntaxes. The ability to demonstrate that ISO 20022
messages can be deployed in a low-cost, high-volume cross-border system
will send a powerful message to IPS implementers in EMDE countries, and
will accelerate take-up of the standard in areas where it is currently
lagging.

The objectives[2] of the proposed scheme are as follows:

1.  Increasing the participation of both informal and formal MSMEs[3],
    which are at the bottom of the financial pyramid, in inter- and
    intraregional trade and to give them the opportunity to capture
    income-generating opportunities within the region.

2.  Connecting MSMEs with markets both locally and internationally
    through the elimination of unnecessary middlemen.

3.  Increasing intra-regional trade through the formalization of MSMEs,
    particularly cross-border traders, small-scale farmers and women
    entrepreneurs into digital financial services

The driver for this initiative is a structural trade deficit for the
region as a whole and the consequent need to increase cross-border
trade. Since over 95% of all firms in Africa are MSMEs, although they
only contribute 25% of the region’s GDP. Statistical analysis has
proposed that MSMEs “have the potential to fill the gap \[*between
government policies on agricultural improvement and the lack of
resources to implement them*\] by alleviating extreme poverty among the
masses, and by generating employment opportunities for the poor.”[4] The
purpose of the proposed scheme is to encourage and expand the activities
of MSMEs across the regions, and to enable them to participate in
cross-border trade simply and effectively.

1.  **Community of users and benefits:**

The initial deployment proposed for these enhancements is a regional
Instant Payments System proposed by the Common Market for Eastern and
Southern Africa (COMESA). The business case for this scheme is described
[<u>here</u>](https://comesabusinesscouncil.org/wp-content/uploads/2022/02/Business-Case-for-a-Regional-Digital-Payments-Policy-for-MSMEs-in-COMESA-Executive-Summary-.-ext.pdf).

The proposal is for a scheme aligned with the principles developed by
the [<u>Level One
Project</u>](https://www.leveloneproject.org/wp-content/uploads/2020/07/L1P_Guide_2019_Final.pdf),
an initiative funded by the Bill and Melinda Gates Foundation to
articulate guidance and best practice for systems which promote
financial inclusion in Emerging Markets and Developing Economies.

A detailed [<u>business
justification</u>](https://comesabusinesscouncil.org/wp-content/uploads/2022/02/Business-Case-for-a-Regional-Digital-Payments-Policy-for-MSMEs-in-COMESA-Executive-Summary-.-ext.pdf)
for the proposed system has been undertaken by the COMESA Business
Council, the scheme’s sponsoring body. It concentrates particularly on
the activities of MSMEs. It makes it clear that demand from the MSMEs
for a properly functioning regional payments system exists: only 21% of
respondents were using digital payments in cross-border trade, but 81%
reported that they were uncomfortable using cash, and that they would
prefer to use digital payments systems such as Mobile Money Systems.

The particular problems that the system is designed to address are:

-   Lack of access to cost-effective cross border payment platforms
    which cater for the gap between what MSMES require and what banks
    currently provide.

-   Lack of a regional integrated digital financial services
    infrastructure for MSMEs.

-   The scarcity of data, particularly with regard to MSME cross-border
    flows.

-   Lack of political goodwill for regional integration and
    harmonization.

-   The fragmented legal and policy frameworks within member states and
    in the region as a whole. The issue of who regulates the digital
    financial services space especially when mobile money is put into
    consideration remains a major concern.

-   Poor technological advancements have often resulted in some MSMEs
    being excluded from the payment chain due to lack of infrastructure
    including the network signal masts. Consequently, regional
    harmonization projects, such as the digital payments platform, and
    the use of multiple local currencies across the region, can be key
    drivers for scaling-up cross-border trade

-   International regulations that impose strong prudential controls and
    operate a close to zero-tolerance to exposure to potential
    money-laundering and terrorist financing make it difficult for
    non-banking payment service providers to take part in international
    payments, although the MSMEs are comfortable with these platforms.

-   Lack of clear AML and CFT laws in some jurisdictions make it
    difficult for MSMEs to access digital payment platforms.

-   Lack of or failure by some jurisdictions to follow international
    standards in retail payment messaging often results in MSMEs being
    referred to the more expensive bank option.

-   Country-specific data-flow barriers and data localization rules,
    which could either make it difficult for payment service suppliers
    to operate within a market or raise the cost of doing so.

-   Foreign exchange controls featured as the highest barrier to
    international e-payments.

-   Additionally, the cost and risk of currency exchange, as well as
    difficulties in processing wire transfers and accepting foreign
    credit cards have been cited as hindrances.

-   More significantly, where regulations either prohibit or make it
    excessively expensive for an international e-payment solution to
    offer a service in a market, small-scale e-retailers who have global
    customers will rely on the costly interbank cash transfers.

-   The lack of an e-commerce platform for MSME trade often results in
    cash on delivery transactions. These lead to costly journeys being
    undertaken by the traders across country borders, thus exposing
    women to abuse, especially at the border points.

*This section is critical. It will be used by the RMG to determine the
business case and priority of the proposed development. Even if the
benefits of the project may have already been described to some extent
in the previous sections, submitting organisations are invited to repeat
them here and to spend the time necessary to collect requested
information for each of the captions below. If a caption cannot be
completed, the submitting organisation is requested to explain why.*

The justification will identify the categories of parties/actors that
would use/benefit from the new message(s), and **for each category of
users**:

1.  Benefits/savings: small traders in the region typically use informal
    account-holding institutions such as Mobile Money Systems, MFIs and
    credit unions. These institutions provide a much cheaper and better
    service to their customers, but they do not have access to the
    financial services necessary to support cross-border economic
    activity: in particular, access to currency conversion services.
    Providing access to these services via an IIPS will enable small
    traders to move from cash-based transactions to digital
    transactions, and allow them more reliable business planning and
    operation. Research suggests that “*A 1% increase in bilateral
    digital connectivity increases domestic trade by 2.1% and
    international trade by 1.5%. This double dividend arises in
    countries at all levels of development, including lower-income
    countries and across all sectors of the economy. There is both a
    domestic and an international case for growing digital
    connectivity*”; and, in addition, that “*a 0.1-point reduction in
    the domestic DSTRI (Digital Services Trade Restrictiveness Index)
    score is associated with a 145% increase in overall exports. The
    impact is highest for digitally-deliverable services but is also
    high in food and agriculture and manufacturing sectors. The case is
    even stronger for emerging economies where the benefits of reform
    deliver greater export gains*.”[5]

2.  Adoption scenario: The adoption of the new messages will support a
    significant reduction in operational costs due to, first, the
    elimination of the need to remediate failed transactions; and,
    second, the automation of the provision of information used to
    validate the terms of the payment. In a system which is designed to
    support low-value payments at a cost tolerable to small
    account-holding institutions, it is fundamentally important to
    remove the costs associated with adjudicating disputes and
    remediating payment failures. In addition, it will reduce the amount
    of customers’ and FIs’ funds which are placed beyond their use while
    payments that will eventually fail are being executed.

3.  Volumes: accurate figures in this area are not easy to come by.
    However, Mastercard estimates that there are 44 million MSMEs in
    sub-Saharan Africa overall (as of September 2023.) The same survey
    finds that 88% of respondents overall needed more support with
    digitisation.

4.  Sponsors and adopters: the development of these messages is
    sponsored by the COMESA Business Council (CBC) CBC is the recognised
    Business Member Organisation of the Common Market for Eastern and
    Southern Africa (COMESA), a free trade area covering 21
    jurisdictions. The system is being developed and implemented under
    the auspices of REPSS, COMESA’s Regional Payment and Settlement
    System.

<!-- -->

1.  **Timing and development:**

The justification will describe:

-   COMESA are currently asking for bids to undertake the initial
    development and implementation of the system. The RFP states that
    the expected implementation date for the first 8 jurisdictions to go
    live will be November 2024; and it is a requirement of the system
    that ISO 20022 should be the messaging standard for the system. A
    delay in our ability to respond, even provisionally, to the need for
    these messages will increase the risk that a solution will be
    adopted which diverges from the preferred ISO 20022 development
    path.

-   We expect to have these messages complete and ready for submission
    to the RA by the end of Q1 this year.

-   We will involve:

    -   CBC themselves.

    -   The implementers of the proposed solution.

    -   The regulators and central banks of the member states of COMESA.

    -   The operators of jurisdictional IPSs for states which belong to
        COMESA.

    -   Account-holding institutions in states which belong to COMESA.

-   There are no other known standards initiative(s) involved in an
    effort to address the same requirements. However, once the standard
    is implemented, it would offer benefits to many other types of
    financial institution.

1.  **Commitments of the submitting organisation:**

The Mojaloop Foundation commits that it can and will:

-   undertake the development of the candidate ISO 20022 business and
    message models that it will submit to the RA for compliance review
    and evaluation. The submission must be compliant with the [<u>ISO
    20022 Master
    Rules</u>](http://www.iso20022.org/documents/general/ISO20022_MasterRules.ZIP)
    and include a draft Part 1 of the Message Definition Report (MDR)
    compliant with the [<u>template for MDR part
    1</u>](http://www.iso20022.org/documents/general/ISO20022_MasterRules.ZIP)
    submitting organization recommends to consider with the submitted
    message set, and, optionally, examples of valid and invalid
    instances of each candidate message. The submission may also include
    a Message User Guide (MUG) to complement the MDR and describe in
    further details how to use the different possibilities/options of
    the proposed candidate messages;

-   address any queries related to the description of the models and
    messages as published by the RA on the ISO 20022 website.

The Mojaloop Foundation commits that it will promptly inform the RA
about any changes or more accurate information about the number of
candidate messages and the timing of their submission to the RA. If the
submitting organisation does not submit the candidate messages within
the timing announced in section F and does not inform the RA beforehand,
the business justification may lapse and require re-submission of a new
business justification for approval by the RMG.

The Mojaloop Foundation confirms that it intends to organize testing of
the candidate messages once they have been reviewed and qualified by the
RA and before their submission to the SEG(s) for approval. It is not yet
known when the testing is expected to complete and the candidate
messages be re-submitted to the RA for SEG(s) approval.

The Mojaloop Foundation confirms that it will promptly inform the RA
about any changes or more accurate information about the timing of this
re-submission to the RA. If the submitting organisation does not
re-submit the candidate messages as announced and does not inform the RA
beforehand, the business justification may lapse and require
re-submission of a new business justification for approval by the RMG.

The Mojaloop Foundation confirms that it is committed to undertake the
future message maintenance.

The Mojaloop Foundation confirms its knowledge and acceptance of the ISO
20022 Intellectual Property Rights policy for contributing
organisations, as follows.

*“Organizations that contribute information to be incorporated into the
ISO 20022 Repository shall keep any Intellectual Property Rights (IPR)
they have on this information. A contributing organization warrants that
it has sufficient rights on the contributed information to have it
published in the ISO 20022 Repository through the ISO 20022 Registration
Authority in accordance with the rules set in ISO 20022. To ascertain a
widespread, public and uniform use of the ISO 20022 Repository
information, the contributing organization grants third parties a
non-exclusive, royalty-free licence to use the published information”.*

1.  **Contact persons:**

The submitting organisation will provide the contact details (name,
e-mail address, telephone) of the person(s) at the submitting
organisation that can be contacted by the RA, RMG, SEG or SubSEG to get
additional information on the project and/or its business justification.

Contact: Michael Richards

Mail address:
[<u>Michael.Richards@infitx.com</u>](mailto:Michael.Richards@infitx.com)

Telephone: +44 7785 360009

1.  **Comments from the RMG members and relevant SEG(s) or SubSEG(s) and
    disposition of comments by the submitting organisation:**

This section will include the comments received from RMG members and the
SEG(s) or SubSEG(s), if any, and the response given to each of these
comments by the submitting organisation.

[1] [<u>True-Cost-of-Failed-Payments-Global-Report-2021-1\_compressed.pdf
(trustyoursupplier.com)</u>](https://trustyoursupplier.com/wp-content/uploads/2022/06/True-Cost-of-Failed-Payments-Global-Report-2021-1_compressed.pdf)

[2] Source:
[<u>https://comesabusinesscouncil.org/wp-content/uploads/2022/02/Business-Case-for-a-Regional-Digital-Payments-Policy-for-MSMEs-in-COMESA-Executive-Summary-.-ext.pdf</u>](https://comesabusinesscouncil.org/wp-content/uploads/2022/02/Business-Case-for-a-Regional-Digital-Payments-Policy-for-MSMEs-in-COMESA-Executive-Summary-.-ext.pdf),
p.2

[3] Micro, Small and Medium Enterprises

[4] Bekele and Muchie: *Promoting micro, small and medium Enterprises
(MSMEs) for sustainable rural Livelihood*.
https://vbn.aau.dk/ws/portalfiles/portal/17023673/DIIPER\_wp\_11.pdf

[5] Gonzales, Sorescu and Kaynak: *Of Bytes and Trade: Quantifying the
Impact of Digitalisation on Trade*. OECD Trade Policy Paper 273
(https://www.oecd-ilibrary.org/docserver/11889f2a-en.pdf?expires=1706530826&id=id&accname=guest&checksum=619E07D2AC4DD226F77E2EE00EF202CE)
