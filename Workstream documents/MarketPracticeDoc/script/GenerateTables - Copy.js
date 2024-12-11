const fs = require('fs');
const xml2js = require('xml2js');
const yaml = require('js-yaml');

// Load Open API definition
const openApiPath = './Workstream documents/MarketPracticeDoc/script/fspiop-rest-v2.0-ISO20022-openapi3-snippets.yaml';
const openApiDoc = yaml.load(fs.readFileSync(openApiPath, 'utf8'));

// Load ISO 20022 XML schema
const iso20022Path = './Workstream documents/MarketPracticeDoc/script/pacs.008.001.12.xsd';
const iso20022Xml = fs.readFileSync(iso20022Path, 'utf8');

// Parse XML schema
const parser = new xml2js.Parser();
parser.parseString(iso20022Xml, (err, iso20022Doc) => {
  if (err) throw err;

  class Field {
    constructor(fullName, name, fieldName, or_text, required, description = '', parentField = null) {
      const indent = parentField ? parentField.indent + 4 : 0;
      this.name = name;
      this.fullName = fullName;
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
      let fields = [{ fullName: this.fullName, name: this.name, fieldName: this.fieldName, or_text: this.or_text, required: this.required, description: this.description, parentField:this.parentField, indent: this.indent }];
      const recurse = (itemSet && itemSet.find(f => f==this.fullName)) ? false : true;
      if(recurse) 
        this.children.forEach(child => {
          fields = fields.concat(child.getAllFields(itemSet));
        });
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
  const postQuotesPath = openApiDoc.paths['/quotes'].post;
  const OptionalFieldsSet = [];
  const AllSupportedFieldsSet = [];
  const requiredFieldsSet = [];
  const requiredFields = [];
  const SupportedFields = [];

  let openAPISchema = postQuotesPath.requestBody.content['application/json'].schema;
  extractRequiredFields(openAPISchema);
  extractOptionalFields(openAPISchema);

  // Extract fields from ISO 20022 XML schema
  const iso20022Fields = [];
  const iso20022FieldsSet = [];
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
    const optionalFields = SupportedFields.flatMap(f => f.getAllFields()).filter(field => {
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
    let table = `### ${title}\n\n| **ISO 20022 Field** | **Description** |\n| --- | --- |\n`;
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
  const unsupportedTable = generateTable('Unsupported Fields', unsupportedFields);

  // Output markdown documentation
  const markdownDoc = `
# ISO 20022 Market Practice Document for POST /quotes

## Required Fields
${requiredTable}

## Optional Fields
${optionalTable}

## Unsupported Fields
${unsupportedTable}
`;

  fs.writeFileSync('MARKET_PRACTICE_DOCUMENT.md', markdownDoc);
  console.log('Market practice document generated successfully.');
});