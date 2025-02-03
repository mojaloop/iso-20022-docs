const fs = require('fs');
const xml2js = require('xml2js');
const yaml = require('js-yaml');

// Get command line arguments
let [,, endpoint, http_method, iso20022Path, outputFilename, templatePath, openApiPath] = process.argv;

if(!openApiPath)
  openApiPath = './Workstream documents/MarketPracticeDoc/script/fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml';
if(!endpoint)
  endpoint = '/quotes/{ID}';
if(!http_method)
  http_method = 'put';
if(!iso20022Path)
  iso20022Path = './Workstream documents/MarketPracticeDoc/script/pacs.008.001.12.xsd';
if(!outputFilename)
  outputFilename = './Workstream documents/MarketPracticeDoc/script/quotes_POST.md';
if(!templatePath)
  templatePath = './Workstream documents/MarketPracticeDoc/script/quotes_POST_template.md';

console.log('openApiPath:', openApiPath);
console.log('endpoint:', endpoint);
console.log('http_method:', http_method);
console.log('iso20022Path:', iso20022Path);
console.log('outputFilename:', outputFilename);
console.log('templatePath:', templatePath);


if (!openApiPath || !endpoint || !iso20022Path || !outputFilename || !templatePath) {
  console.error('Usage: node generateTables.js <openApiPath> <endpoint> <iso20022Path> <outputFilename> <templatePath>');
  process.exit(1);
}

// Load Open API definition
const openApiDoc = yaml.load(fs.readFileSync(openApiPath, 'utf8'));

// Load ISO 20022 XML schema
const iso20022Xml = fs.readFileSync(iso20022Path, 'utf8');

// Load template file
const template = fs.readFileSync(templatePath, 'utf8');

// Parse XML schema
const parser = new xml2js.Parser();
parser.parseString(iso20022Xml, (err, iso20022Doc) => {
  if (err) throw err;

  class Field {
    constructor(fullName, name,  fieldName, or_text = '', required = '', description = '', parentField = null) {
      const indent = parentField ? parentField.indent + 4 : 0;
      this.name = name;
      this.fullName= fullName;
      this.fieldName = fieldName;
      this.or_text = or_text;
      this.required = required;
      this.description = description;
      this.children = [];
      this.parentField = parentField;
      this.indent = indent - or_text.length;
    }

    addChild(child) {
      this.children.push(child);
    }

    getAllFields(itemSet = null) {
      let fields = [{ fullName: this.fullName, name: this.name, fieldName: this.fieldName, or_text: this.or_text, required: this.required, description: this.description, parentField: this.parentField, indent: this.indent }];
      const recurse = (itemSet && itemSet.find(f => f == this.fullName)) ? false : true;
      if (recurse) {
        this.children.forEach(child => {
          fields = fields.concat(child.getAllFields(itemSet));
        });
      }
      return fields;
    }
  }

  // Function to resolve $ref references recursively
  const resolveRef = (ref) => {
    const parts = ref.split('/');
    let result = openApiDoc;
    for (const part of parts) {
      if (part === '#') continue;
      result = result[part];
    }
    if (result?.$ref) {
      return resolveRef(result.$ref);
    }
    return result;
  };


  // Function to extract fields recursively
  const extractRequiredFields = (schema, parentField = null, parentRequired = true, or_text="") => {
    if (schema.$ref) {
      schema = resolveRef(schema.$ref);
    }

    const required = schema.required || [];

    if(parentRequired) {
    required.forEach(field => {
      const hasAllOfDesc = schema.properties[field]?.allOf && schema.properties[field]?.allOf.length > 1;
      let description = schema.properties[field]?.description || (hasAllOfDesc ? schema.properties[field]?.allOf.at(1).description : '');
      const [firstLine, ...rest] = description.split('\n');
      let fieldName = firstLine.trim();
      description = rest.join('<br>').trim(); // Join the remaining lines with <br>
      const fullFieldName = parentField ? `${parentField.fullName}.${field}` : field;
      AllSupportedFieldsSet.push(fullFieldName);
      requiredFieldsSet.push(fullFieldName);
      const fieldObj = new Field(fullFieldName, field, fieldName, or_text,"*" ,description, parentField);
      if (parentField) {
        parentField.addChild(fieldObj);
      } else {
        requiredFields.push(fieldObj);
      }
      if (schema.properties && schema.properties[field]) {
        extractRequiredFields(schema.properties[field], fieldObj, true);
      }
    });
    }

    if (schema.description && parentField) {
      if(parentField.description == "")
        parentField.description = schema.description;
      if (parentField.fieldName === "") 
        parentField.fieldName = schema?.title?.replace(/\d+/g, '');
    }

    if (schema.allOf) {
      schema.allOf.forEach(subSchema => {
        extractRequiredFields(subSchema, parentField, parentRequired,or_text);
      });
    }

    if (schema.oneOf) {
      let Or_open = false;
      schema.oneOf.forEach(subSchema => {
        const l_or_text = Or_open ? "or}" : "{or";
        Or_open = true;
        extractRequiredFields(subSchema, parentField, parentRequired, l_or_text);
      });
    }

    if (schema.anyOf) {
      let Or_open = false;
      schema.anyOf.forEach(subSchema => {
        const l_or_text = Or_open ? "or}" : "{or";
        Or_open = true;
        extractRequiredFields(subSchema, parentField, parentRequired,l_or_text);
      });
    }
  };

  const extractOptionalFields = (schema, parentField = null, parentRequired = true, or_text = "") => {
    if (schema.$ref) {
      schema = resolveRef(schema.$ref);
    }

    const required = schema.required || [];

    if(parentRequired) {
    required.forEach(field => {
      const hasAllOfDesc = schema.properties[field]?.allOf && schema.properties[field]?.allOf.length > 1;
      let description = schema?.description || schema.properties[field]?.description || (hasAllOfDesc ? schema.properties[field]?.allOf.at(1).description : '');
      const [firstLine, ...rest] = description.split('\n');
      let fieldName = firstLine.trim();
      description = rest.join('<br>').trim(); // Join the remaining lines with <br>
  
      const fullFieldName = parentField ? `${parentField.fullName}.${field}` : field;
      AllSupportedFieldsSet.push(fullFieldName);

      const fieldObj = new Field(fullFieldName, field, fieldName, or_text,"*" ,"", parentField);
      if (parentField) {
        parentField.addChild(fieldObj);
      } else {
        SupportedFields.push(fieldObj);
      }
      if (schema.properties && schema.properties[field]) {
        extractOptionalFields(schema.properties[field], fieldObj, true);
      }
    });
    }

    if (schema.properties) {
      Object.keys(schema.properties).forEach(field => {
        if (!parentRequired || !required.includes(field)) {
          const hasAllOfDesc = schema.properties[field]?.allOf && schema.properties[field]?.allOf.length > 1;
          let description = schema.properties[field]?.description || (hasAllOfDesc ? schema.properties[field]?.allOf.at(1).description : '');
          const [firstLine, ...rest] = description.split('\n');
          let fieldName = firstLine.trim();
          description = rest.join('<br>').trim(); // Join the remaining lines with <br>
          const requiredString = required.includes(field) ? '*' : '';
      
          const fullFieldName = parentField ? `${parentField.fullName}.${field}` : field;
          AllSupportedFieldsSet.push(fullFieldName);
          OptionalFieldsSet.push(fullFieldName);
        
          const fieldObj = new Field(fullFieldName, field, fieldName, or_text,requiredString ,description, parentField);
              if (parentField) {
            parentField.addChild(fieldObj);
          } else {
            SupportedFields.push(fieldObj);
          }
          extractOptionalFields(schema.properties[field], fieldObj, false);
        }
      });
    }

    if (schema.description && parentField) {
      if(parentField.description == "")
        parentField.description = schema.description;
      if (parentField.fieldName === "") 
        parentField.fieldName = schema?.title?.replace(/\d+/g, '');
    }
    if (schema.allOf) {
      schema.allOf.forEach(subSchema => {
        extractOptionalFields(subSchema, parentField, parentRequired,or_text);
      });
    }

    if (schema.oneOf) {
      let Or_open = false;
      schema.oneOf.forEach(subSchema => {
        const l_or_text = Or_open ? "or}" : "{or";
        Or_open = true;
        extractOptionalFields(subSchema, parentField, parentRequired, l_or_text);
      });
    }

    if (schema.anyOf) {
      let Or_open = false;
      schema.anyOf.forEach(subSchema => {
        const l_or_text = Or_open ? "or}" : "{or";
        Or_open = true;
        extractOptionalFields(subSchema, parentField, parentRequired,l_or_text);
      });
    }
  };

  // Extract fields from Open API definition
  const endpointPath = (http_method=='post'? openApiDoc.paths[endpoint].post: 
                       (http_method=='get'? openApiDoc.paths[endpoint].get: 
                      (http_method=='put'? openApiDoc.paths[endpoint].put: 
                      (http_method=='delete'?openApiDoc.paths[endpoint].delete:
                      (http_method=='patch'?openApiDoc.paths[endpoint].patch: null)))));
  const OptionalFieldsSet = [];
  const AllSupportedFieldsSet = [];
  const requiredFieldsSet = [];
  const requiredFields = [];
  const SupportedFields = [];
  let openAPISchema = endpointPath.requestBody.content['application/json'].schema;
  extractRequiredFields(openAPISchema);
  extractOptionalFields(openAPISchema);

    // Extract fields from ISO 20022 XML schema
    const iso20022Fields = [];
    const iso20022FieldsSet = [];
    const iso20022FieldsList = [];
    const startDepth = 2;
    const extractIsoFields = (element, parentField = null, depth = 0, parentSchema = null) => {
      if (element['xs:element']) {
        element['xs:element'].forEach(el => {
          const fullName = parentField ? `${parentField.fullName}.${el.$.name}` : el.$.name;
          const field = el.$.name;
          let fieldName = null;
          let description = null;
          const mySchema = resolveRef(`#/components/schemas/${el.$.type}`);
          if (mySchema) {
            const hasAllOfDesc = mySchema?.description;
            description = mySchema?.description;
            if(description){
            const [firstLine, ...rest] = description.split('\n');
            fieldName = firstLine.trim();
            description = rest.join('<br>').trim(); // Join the remaining lines with <br>
            }
            if (description == "") {
              description = fieldName;
              fieldName = mySchema?.title?.replace(/\d+/g, '');
            }
          }
          if (parentSchema && description == null) {
            const hasAllOfDesc = parentSchema.properties[field]?.allOf && parentSchema.properties[field]?.allOf.length > 1;
            let description = parentSchema.properties[field]?.description || (hasAllOfDesc ? parentSchema.properties[field]?.allOf.at(1).description : '');
            const [firstLine, ...rest] = description.split('\n');
            let fieldName = firstLine.trim();
            description = rest.join('<br>').trim(); // Join the remaining lines with <br>
          }
          if(fieldName == null){
            fieldName = el.$.base || el.$.type || '';
          }
          if (description == null)
          description = el.$.description || '';
  
          const fieldObj = (depth>= startDepth) ? new Field(fullName, field, fieldName, "", "", description,  parentField):null;
          if (parentField && fieldObj) {
            parentField.addChild(fieldObj);
            iso20022FieldsSet.push(fullName);
          } else if(fieldObj) {
            iso20022Fields.push(fieldObj);
            iso20022FieldsSet.push(fullName);
          }
          if(fieldObj) {
            iso20022FieldsList.push(fieldObj);
          }
          if (el['xs:complexType']) {
            extractIsoFields(el['xs:complexType'], fieldObj, depth + 1);
          } else if (el.$.type) {
            // Handle the case where the type refers to another complex type
            const typeName = el.$.type.split(':').pop();
            const complexType = iso20022Doc['xs:schema']['xs:complexType'].find(ct => ct.$.name === typeName);
            if (complexType) {
              extractIsoFields(complexType, fieldObj, depth + 1);
            }
          }
        });
      }
      element['xs:sequence']?.forEach(el => {
        extractIsoFields(el, parentField, depth);
      });
      if (element['xs:complexType']) {
        extractIsoFields(element['xs:complexType'], parentField,depth);
      } 
    };
  
    if (iso20022Doc['xs:schema']) {
      extractIsoFields(iso20022Doc['xs:schema']);
    } else {
      console.error('Error: xs:schema not found in the XML schema document.');
      return;
    }
  
    
      // Determine optionalFields fields
      const optionalFields = SupportedFields.flatMap(f => f.getAllFields(OptionalFieldsSet)).filter(field => {
        return (!requiredFieldsSet.find(f => f==field.fullName));
      });
  
    
      // Determine unsupported fields
      const unsupportedFieldsSet = [...iso20022FieldsSet].filter(field => 
        !AllSupportedFieldsSet.find(f => f==field)
      );
    
    // add headers to 
  
    const unsupportedFields = iso20022Fields.flatMap(f => f.getAllFields(unsupportedFieldsSet)).filter(field => {
      return (unsupportedFieldsSet.find(f => f==field.fullName));
    });
    
    // Generate markdown tables
    const generateTable = (title, fields, FieldSet = null) => {
      let table = `| **ISO 20022 Field** | **Description** |\n| --- | --- |\n`;
      fields.forEach(field => {
        const sanitizedDescription = field.description.replace(/\n/g, '<br>');
         
        let fieldName = (FieldSet && field.parentField && (!FieldSet.find(f=> f==field.parentField.fullName)) ?
        `${field.or_text} ${field.required} ${field.parentField.fullName}.**${field.name}**`:
        `${field.or_text}${'&nbsp;'.repeat(field.indent)} ${field.required} **${field.name}**` );
        if (field.fieldName?.length > 0) {
          fieldName += ` - ${field.fieldName}`;
        }
        table += `| ${fieldName} | ${sanitizedDescription} |\n`;
      });
      return table;
    };
  
    const requiredTable = generateTable('Required Fields', requiredFields.flatMap(f => f.getAllFields()));
    const optionalTable = generateTable('Optional Fields', optionalFields,OptionalFieldsSet);
    const unsupportedTable = generateTable('Unsupported Fields', unsupportedFields,unsupportedFieldsSet);

    // Generate combined markdown tables
    const generateCombinedTable = (fields, requiredSet, optionalSet, unsupportedSet) => {
      let table = `| **ISO 20022 Field** | Data Model | **Description** |\n| --- |--- | --- |\n`;
      fields.forEach(field => {
        const sanitizedDescription = field.description.replace(/\n/g, '<br>');
        const parentFullName = field?.parentField?.fullName;
        const parentfieldUnsupported = (!parentFullName)?false:unsupportedSet.find(f=> f==parentFullName)? true: false;
        if (!parentfieldUnsupported) {

          let fieldName = `${field.or_text}${'&nbsp;'.repeat(field.indent)} ${field.required} **${field.name}**`;
          if (field.fieldName?.length > 0) {
            fieldName += ` - ${field.fieldName}`;
          }
          let dataModel = '';
          let fontColor = '';
          if (requiredSet.find(f=> f.fullName==field.fullName)) {
            dataModel = '[1..1]';
            fontColor = 'black';
          } else if (optionalSet.find(f=> f==field.fullName)){
            dataModel = '[0..1]';
            fontColor = 'darkgrey';
          } else {
            dataModel = '[0..0]';
            fontColor = 'red';
          }
          table += `| <font size=1 color=${fontColor}>${fieldName}</font> | <font color=${fontColor}>${dataModel}</font> | <font size=1 color=${fontColor}>${sanitizedDescription}</font> |\n`;
      }
      });
      return table;
    };

    // Generate combined markdown tables
    const generateCombinedTableHTML = (fields, requiredSet, optionalSet, unsupportedSet) => {
      let table = '';
      // add styles
      // add headers
      table += `
<table>
  <tr>
    <th>ISO 20022 Field</th>
    <th>Data Model</th>
    <th>Description</th>
  </tr>
      `;
      fields.forEach(field => {
        const sanitizedDescription = field.description.replace(/\n/g, '<br>');
        const parentFullName = field?.parentField?.fullName;
        const parentfieldUnsupported = (!parentFullName)?false:unsupportedSet.find(f=> f==parentFullName)? true: false;
        if (!parentfieldUnsupported) {

          let fieldName = `${field.or_text}${'&nbsp;'.repeat(field.indent)} ${field.required} <b>${field.name}</b>`;
          if (field.fieldName?.length > 0) {
            fieldName += ` - ${field.fieldName}`;
          }
          let dataModel = '';
          let className = '';
          if (requiredSet.find(f=> f.fullName==field.fullName)) {
            dataModel = '[1..1]';
            className = 'required';
          } else if (optionalSet.find(f=> f==field.fullName)){
            dataModel = field.required?'[1..1]':'[0..1]';
            className = 'optional';
          } else {
            dataModel = '[0..0]';
            className = 'unsupported';
          }
          table += `<tr class=${className}><td>${fieldName}</td><td>${dataModel}</td><td>${sanitizedDescription}</td></tr>\n`;
      }
      });
      // add closing tags
      table += `</table>`;
      return table;
    };
    
    const keyTable = `
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
    `;  

  
    const combinedTable = generateCombinedTableHTML(iso20022FieldsList, requiredFields.flatMap(f => f.getAllFields()),OptionalFieldsSet,unsupportedFieldsSet);


  // Replace placeholders in the template with the generated tables
  const markdownDoc = template
    .replace('{{endpoint}}', endpoint)
    .replace('{{table}}', combinedTable)
    .replace('{{key}}', keyTable)
    
  // Output markdown documentation
  fs.writeFileSync(outputFilename, markdownDoc);
  console.log('Market practice document generated successfully.');
});