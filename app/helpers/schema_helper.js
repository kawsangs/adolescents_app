import UserSchema from '../db/migrations/v1/user';
import CategorySchema from '../db/migrations/v1/category';
import VisitSchema from '../db/migrations/v1/visit';
import FacilitySchema from '../db/migrations/v1/facility';
import ServiceSchema from '../db/migrations/v1/service';
import VideoSchema from '../db/migrations/v1/video';
import TopicSchema from '../db/migrations/v1/topic';
import QuestionSchema from '../db/migrations/v1/question';
import OptionSchema from '../db/migrations/v1/option';
import SearchHistorySchema from '../db/migrations/v1/search_history';
import Notification from '../db/migrations/v1/notification';
import Tag from '../db/migrations/v4/tag';

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
      CategorySchema,
      VisitSchema,
      FacilitySchema,
      ServiceSchema,
      VideoSchema,
      TopicSchema,
      QuestionSchema,
      OptionSchema,
      SearchHistorySchema,
      Notification,
      Tag,
    ];

    changedSchemas.map((schema) => {
      const index = schemaNames.indexOf(schema.label);
      schemas[index] = schema.data;
    });
    return schemas;
  }
})();

export default schemaHelper;