'use strict';

//const Ajv = require('ajv');
//const ajv = new Ajv();

const schemas = new Map();

({
  validate: (schema, data) => {
    //const valid = ajv.validate(schemas.get(schema), data);
    //if (!valid) return { errors: ajv.errors };
    console.dir(schemas);
    console.log(schema);
    return { data };
  },
  init: () => {
    console.log(domain);
  }
})
