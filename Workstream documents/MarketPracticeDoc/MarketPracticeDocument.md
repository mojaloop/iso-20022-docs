# Mojaloop ISO 20022 Market Practice Document


# Introduction
## Purpose of the Document
The purpose of this document is to provide a comprehensive, generic framework for implementing ISO 20022 messaging within Mojaloop ecosystems, specifically for supporting peer-to-peer (P2P) cross-border (FX) transfers. It is designed to assist Digital Financial Service Providers (DFSPs) in understanding the structure, expectations, and usage of ISO 20022 messages as they integrate into Mojaloop-powered schemes.
This document focuses on the foundational aspects of ISO 20022 messaging required for Mojaloop integration. It aims to establish clear practices and conventions for using ISO 20022 while maintaining flexibility for schemes to define specific rules and adaptations. The primary scope includes:
Offering a generic guide to ISO 20022 messaging as applied in Mojaloop for P2P FX transactions.
Providing clarity on which fields are supported, which are not, and how unsupported fields should be handled.
Ensuring DFSPs understand the transactional flows and message interactions necessary for successful integration.
Discussing fraud detection and prevention considerations without imposing restrictive practices.
Highlighting the relationship between this document and scheme-specific rules, allowing schemes to customize and enforce additional requirements.
By offering a standard reference point, this document empowers DFSPs to meet Mojaloop message requirements effectively and fosters consistency across different schemes using Mojaloop. However, it does not prescribe scheme-specific fields, validations, or rules, which must be defined and governed through individual scheme rules and agreements.
## Intended Audience
This document is intended for stakeholders involved in the design, implementation, and operation of Mojaloop ISO 20022-based schemes, specifically:
1. **Direct Financial Service Providers (DFSPs):**
DFSPs building integrations into Mojaloop schemes can use this document as a guide to understand the messaging framework, field requirements, and transaction flows. It provides the necessary context to ensure compliance with Mojaloop ISO 20022 messaging standards while leaving room for scheme-specific adaptations.
1. **Foreign Exchange Providers:**
Foreign Exchange Providers building integrations into Mojaloop schemes can use this document as a guide to understand the messaging framework, field requirements, and transaction flows. It provides the necessary context to ensure compliance with Mojaloop ISO 20022 messaging standards while leaving room for scheme-specific adaptations.
1. **Scheme Administrators:**
Administrators overseeing the setup and management of Mojaloop-based payment schemes can reference this document to define and enforce scheme-specific rules. It serves as a foundational framework for understanding the general practices and capabilities of Mojaloop ISO 20022 messaging.
Solution Architects and System Integrators:
Architects and integrators designing Mojaloop-compatible systems will benefit from the detailed explanation of ISO 20022 message structures and transaction flows. The document provides a blueprint for aligning technical solutions with Mojaloop’s messaging framework.
1. **Other Stakeholders:**
While primarily aimed at DFSPs and scheme administrators, this document may also be useful for fraud prevention teams, regulatory bodies, and technology providers looking to understand the broader operational context of Mojaloop’s ISO 20022 implementation.

By addressing the needs of these audiences, the document ensures consistency and clarity in the integration process, enabling participants to effectively collaborate within Mojaloop-based schemes.
# Overview of Mojaloop and ISO 20022

## Introduction to Mojaloop
Mojaloop is an open-source, inclusive instant payment platform designed to meet the needs of financial ecosystems in promoting greater financial inclusion. It offers a scalable, interoperable framework for facilitating low-cost, real-time digital payments, particularly for underserved populations. By utilizing a modular architecture and open standards, Mojaloop ensures affordability, efficiency, and accessibility, in line with the principles of financial inclusion.
A Mojaloop transfer typically progresses through three key phases:
1. **Discovery Phase**<br>
The payer DFSP identifies and confirms the payee, ensuring that the payee exists and can receive funds. This step often includes alias resolution and account validation.
1. **Agreement Phase** <br>
Both parties agree on the terms of the transaction, including fees, FX rates (if applicable), and any other relevant details. All parties conduct necessary checks to ensure the transfer can proceed. This phase ensures mutual understanding and consent before committing to the transfer. If currency conversion is necessary to support the transfer, the terms for obtaining that liquidity cover are also determined in this phase.
1. **Transfer Phase** <br>
In the transfer phase, funds are instantly cleared and made available to the end parties, and obligations are set to reflect the amount owed between DFSPs.

These phases form the basis of all payments, ensuring a structured approach to instant payments while minimizing risks and uncertainties for all participants.

## ISO 20022 and Its Advantages
ISO 20022 is a global financial messaging standard designed to improve interoperability, consistency, and efficiency in payment systems. Its use in Mojaloop provides several advantages:
1. **Rich Data and Standardization** <br>
ISO 20022 allows for comprehensive and structured data, enhancing transparency, reconciliation, and compliance with regulatory requirements.
1. **Interoperability** <br>
The standard enables seamless communication across diverse financial institutions and payment systems, fostering greater collaboration and ecosystem integration.
1. **Flexibility and Scalability** <br>
ISO 20022 supports various financial products and services, making it adaptable to the unique needs of Mojaloop schemes, including cross-border P2P transfers.

**ISO 20022 for IIPS**

By combining the principles of financial inclusion with the robust capabilities of ISO 20022, Mojaloop ensures that DFSPs and other stakeholders can deliver real-time payment solutions that are cost-effective, secure, and scalable to meet the demands of inclusive financial ecosystems.

# How to Use This Document?
This document provides a foundational reference for implementing ISO 20022 messaging for IIPS within Mojaloop-based schemes. It outlines general guidelines and practices that apply universally across Mojaloop schemes, focusing on the base-level requirements. However, it is designed to be supplemented by scheme-specific rules documents, which can define additional message fields, validations, and rules necessary to meet the unique regulations and requirements of individual schemes. This layered approach enables each scheme to tailor its implementation details while maintaining consistency with the broader Mojaloop framework.

## Relationship with Scheme-Specific Rules Documents
This document serves as a foundation for understanding how ISO 20022 is applied in Mojaloop, focusing on core principles and practices. However, it does not prescribe the detailed business requirements, validations, and governance frameworks that are specific to individual schemes. Scheme-specific rules address these details, including mandatory and optional field specifications, tailored compliance protocols, and defined procedures for error handling. They also encompass business rules governing message flows, participant roles, and responsibilities within the scheme. The flexibility of this document allows scheme administrators to adapt and extend its guidance to meet their unique operational needs.

## Distinction Between Generic Practices and Scheme-Specific Requirements
This document distinctly separates generic practices from scheme-specific requirements to achieve a balance between consistency and adaptability in ISO 20022 implementations within Mojaloop. The generic practices outlined here establish foundational principles, including expectations for message structures, required fields to meet switch requirements, supported fields, and transactional flows. Additionally, they provide a high-level overview of the Mojaloop P2P FX transfer lifecycle.

Scheme-specific requirements, documented separately, delve into additional field mappings, enhanced validations, and precise rules for settlement, reconciliation, and dispute resolution. These requirements also encompass governance policies and compliance obligations tailored to the unique needs of individual schemes.

This distinction enables DFSPs to implement a consistent core messaging framework while granting scheme administrators the flexibility to define operational specifics. The generic practices presented in this document are purposefully designed to be extensible, ensuring seamless integration with scheme-specific rules and supporting adherence to Mojaloop’s ISO 20022 for IIPS standards.

# Message Expectations, Obligations, and Rules
The Mojaloop transfer process is divided into three key phases, each essential to ensuring secure and efficient transactions. These phases use specific resources to enable participant interactions, ensuring clear communication, agreement, and execution. While some phases and resources are optional, the ultimate goal is to ensure every transfer is accurate, secure, and aligns with agreed terms. 
1. [Discovery](#discovery-phase)
2. [Agreement](#agreement-phase)
3. [Transfer](#transfer-phase)

### Currency Conversion
Currency conversion is included to support cross-currency transactions. As it is not always required, the associated messages and flows are only used when needed, ensuring flexibility for both single-currency and multi-currency scenarios.

### JSON Messages
Mojaloop adopts a JSON variant of ISO 20022 messages, moving away from the traditional XML format to enhance efficiency and compatibility with modern APIs. The ISO 20022 organization is actively developing a canonical JSON representation of its messages, and Mojaloop aims to align with this standard as it evolves.

### APIs
ISO 20022 messages are exchanged in Mojaloop via REST-like API calls. This approach enhances interoperability, reduces data overhead through lightweight JSON messages, and supports scalable and modular implementations. By integrating ISO 20022 with REST APIs, Mojaloop delivers a robust, adaptable framework that balances global standards with practical implementation needs. 

### ULIDs as Unique Identifiers
Mojaloop employs Universally Unique Lexicographically Sortable Identifiers (ULIDs) as the standard for unique identifiers across its messaging system. ULIDs offer a robust alternative to traditional UUIDs, ensuring globally unique identifiers while also enabling natural ordering by time of creation. This lexicographical sorting simplifies traceability, troubleshooting, and operational analytics.

### Inter-ledger Protocol (v4) to represent the Cryptographic Terms
Mojaloop leverages the Inter-ledger Protocol (ILP) version 4 to define and represent cryptographic terms in its transfer processes. ILP v4 provides a standardized framework for secure and interoperable exchange of payment instructions, ensuring integrity and non-repudiation of transactions. By integrating ILP's cryptographic capabilities, Mojaloop supports precise and tamper-proof agreements between participants, enabling secure end-to-end transfer execution while maintaining compatibility with global payment ecosystems.

### ISO 20022 Supplementary Data Fields

It is not expected that ISO 20022 supplementary data fields will be required for any of the messages used. If supplementary data is provided, the switch will not reject the message; however, it will ignore its contents and behave as if the supplementary data was not present.

## Discovery Phase
The Discovery Phase is an optional step in the transfer process, necessary only when the payee (end party) must be identified and confirmed before initiating an agreement. This phase utilizes the parties resource, which facilitates the retrieval and validation of the payee’s information to ensure they are eligible to receive the transfer. Key checks performed during this phase include verifying that the payee's account is active, identifying the currencies that can be transferred into the account, and confirming the account owner’s details. This information allows the payer to verify the payee's details accurately, reducing the risk of errors and ensuring a secure foundation for the subsequent phases of the transfer process.

### Message flow

The sequence diagram shows the discovery example messages in a Payer initiated P2P transfer.
![Discovery Flow](./SequenceDiagrams/Discovery.svg)

### Parties Resource
The Parties resource provides all the necessary functionality in the discovery phase of a transfer. The functionality is always initiated with a GET /parties call, and responses to this are returned to the originator through a PUT /parties callback. Error messages are returned through the PUT /parties/.../error callback. These endpoints support an optional sub id type.


| Endpoint | Message |
|--- | --- |
|[GET /parties/{type}/{partyIdentifier}[/{subId}]](./script/parties_GET.md) |  |
|[PUT /parties/{type}/{partyIdentifier}[/{subId}]](./script/parties_PUT.md) | acmt.024.001.04 |
|[PUT /parties/{type}/{partyIdentifier}[/{subId}]/error](./script/parties_error_PUT.md) | acmt.024.001.04 |


# Agreement Phase


## Currency Conversion Agreement - defining terms for obtaining Liquidity Cover
This is optional

### Message flow


The sequence diagram shows the discovery example messages in a Payer initiated P2P transfer.
![Agreement Conversion Flow](./SequenceDiagrams/AgreementConversion.svg)

### fxQuotes Resource

| Endpoint | Message |
|--- | --- |
|[POST /fxQuotes/{ID}](./script/fxquotes_POST.md) | **pacs.091.001** |
|[PUT /fxQuotes/{ID}](./script/fxquotes_PUT.md) | **pacs.092.001** |
|[PUT /fxQuotes/{ID}/error](./script/fxquotes_error_PUT.md) | **pacs.002.001.15** |

## Transfer Agreement - defining terms for the transfer

### Message flow


The sequence diagram shows the discovery example messages in a Payer initiated P2P transfer.
![Agreement Flow](./SequenceDiagrams/Agreement.svg)

### Quotes Resource

| Endpoint | Message |
|--- | --- |
|[POST /quotes/{ID}](./script/quotes_POST.md) | **pacs.081.001** |
|[PUT /quotes/{ID}](./script/quotes_PUT.md) | **pacs.082.001** |
|[PUT /quotes/{ID}/error](./script/quotes_error_PUT.md) | **pacs.002.001.15** |


# Transfer Phase


## Currency Conversion Transfer - accepting terms for obtaining Liquidity Cover
This is optional

### Message flow


The sequence diagram shows the transfer example messages in a Payer initiated P2P transfer.
![Conversion Transfer Flow](./SequenceDiagrams/ConversionTransfer.svg)

### fxTransfers Resource

| Endpoint | Message |
|--- | --- |
|[POST /fxTransfers/{ID}](./script/fxtransfers_POST.md) | **pacs.009.001** |
|[PUT /fxTransfers/{ID}](./script/fxtransfers_PUT.md) | **pacs.002.001.15** |
|[PUT /fxTransfers/{ID}/error](./script/fxtransfers_error_PUT.md) | **pacs.002.001.15** |
|[PATCH /fxTransfers/{ID}/error](./script/fxtransfers_PATCH.md) | **pacs.002.001.15** |

## Transfer Agreement - defining terms for the transfer

### Message flow


The sequence diagram shows the discovery example messages in a Payer initiated P2P transfer.
![Transfer Flow](./SequenceDiagrams/Transfer.svg)

### Transfers Resource

| Endpoint | Message |
|--- | --- |
|[POST /transfers/{ID}](./script/transfers_POST.md) | **pacs.008.001** |
|[PUT /transfers/{ID}](./script/quotes_PUT.md) | **pacs.002.001.15** |
|[PUT /transfers/{ID}/error](./script/quotes_error_PUT.md) | **pacs.002.001.15** |
|[PATCH /transfers/{ID}/error](./script/transfers_PATCH.md) | **pacs.002.001.15** |




