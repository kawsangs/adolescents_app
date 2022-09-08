import UserSchema from '../db/migrations/v1/User';

import { schemaNames } from '../constants/schema_constant';

const schemaHelper = (() => {
  return {
    getSchemas
  }

  function getSchemas(changedSchemas) {
    // changedSchemas parameter format (e.g: [label: 'Language', data: LanguageSchema])

    // schames order must be the same order to migration constant
    let schemas = [
      UserSchema,
    ];

    changedSchemas.map((schema) => {
      const index = schemaNames.indexOf(schema.label);
      schemas[index] = schema.data;
    });
    return schemas;
  }
})();

export default schemaHelper;