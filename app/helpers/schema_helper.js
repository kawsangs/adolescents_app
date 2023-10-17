import UserSchema from '../db/migrations/v1/user';
import CategorySchema from '../db/migrations/v1/category';
import VisitSchema from '../db/migrations/v1/visit';
import FacilitySchema from '../db/migrations/v1/facility';
import VideoSchema from '../db/migrations/v1/video';
import TopicSchema from '../db/migrations/v1/topic';
import QuestionSchema from '../db/migrations/v1/question';
import OptionSchema from '../db/migrations/v1/option';
import SearchHistorySchema from '../db/migrations/v1/search_history';
import Notification from '../db/migrations/v1/notification';
import Tag from '../db/migrations/v4/tag';
import FacilityImage from '../db/migrations/v5/facility_image';
import VideoAuthor from '../db/migrations/v5/video_author';
import DownloadedFile from '../db/migrations/v8/downloaded_file';
import Contact from '../db/migrations/v8/contact';
import SurveyForm from '../db/migrations/v9/survey_form';
import SurveyQuestion from '../db/migrations/v9/survey_question';
import SurveyOption from '../db/migrations/v9/survey_option';
import SurveyAnswer from '../db/migrations/v9/survey_answer';
import Survey from '../db/migrations/v9/survey';
import SurveySection from '../db/migrations/v9/survey_section';
import SurveyCriteria from '../db/migrations/v9/survey_criteria';

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
      VideoSchema,
      TopicSchema,
      QuestionSchema,
      OptionSchema,
      SearchHistorySchema,
      Notification,
      Tag,
      FacilityImage,
      VideoAuthor,
      DownloadedFile,
      Contact,
      SurveyForm,
      SurveyQuestion,
      SurveyOption,
      SurveyAnswer,
      Survey,
      SurveySection,
      SurveyCriteria,
    ];

    changedSchemas.map((schema) => {
      const index = schemaNames.indexOf(schema.label);
      schemas[index] = schema.data;
    });
    return schemas;
  }
})();

export default schemaHelper;