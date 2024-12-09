node generateTables.js /parties/{Type}/{ID} put ./acmt.024.001.04.xsd parties_PUT.md ./parties_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js /parties/{Type}/{ID}/error put ./acmt.024.001.04.xsd parties_error_PUT.md ./parties_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 

node generateTables.js  /quotes post ./pacs.008.001.12.xsd quotes_POST.md ./quotes_POST_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /quotes/{ID} put ./pacs.008.001.12.xsd quotes_PUT.md ./quotes_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /quotes/{ID}/error put ./pacs.002.001.14.xsd quotes_error_PUT.md ./quotes_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 

node generateTables.js  /transfers post ./pacs.008.001.12.xsd transfers_POST.md ./transfers_POST_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /transfers/{ID} put ./pacs.008.001.12.xsd transfers_PUT.md ./transfers_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /transfers/{ID}/error put ./pacs.002.001.14.xsd transfers_error_PUT.md ./transfers_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /transfers/{ID} patch ./pacs.002.001.14.xsd transfers_PATCH.md ./transfers_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 

node generateTables.js  /fxQuotes post ./pacs.009.001.11.xsd fxquotes_POST.md ./fxquotes_POST_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /fxQuotes/{ID} put ./pacs.009.001.11.xsd fxquotes_PUT.md ./fxquotes_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /fxQuotes/{ID}/error put ./pacs.002.001.14.xsd fxquotes_error_PUT.md ./fxquotes_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 

node generateTables.js  /fxTransfers post ./pacs.009.001.11.xsd fxtransfers_POST.md ./fxtransfers_POST_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /fxTransfers/{ID} put ./pacs.009.001.11.xsd fxtransfers_PUT.md ./fxtransfers_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /fxTransfers/{ID}/error put ./pacs.002.001.14.xsd fxtransfers_error_PUT.md ./fxtransfers_error_PUT_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 
node generateTables.js  /fxTransfers/{ID} patch ./pacs.002.001.14.xsd fxtransfers_PATCH.md ./fxtransfers_PATCH_template.md ./fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml 

