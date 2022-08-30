import { schemaNames } from '../constants/schema_constant';

const schemaUtil = (() => {
  return {
    getSchemas
  };

  function getSchemas(changedSchemas) {
    // changedSchemas parameter format (e.g: [label: 'Language', data: LanguageSchema])
    // this schames order must be the same order to schema constant
    let schemas = [];

    changedSchemas.map((schema) => {
      const index = schemaNames.indexOf(schema.label);
      schemas[index] = schema.data;
    });

    return schemas;
  }
})();

export default schemaUtil;