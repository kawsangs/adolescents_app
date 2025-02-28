import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v13/category';
import Facility from '../migrations/v13/facility';
import Video from '../migrations/v13/video';
import Topic from '../migrations/v13/topic';
import Question from '../migrations/v13/question';
import Tag from '../migrations/v5/tag';
import Notification from '../migrations/v9/notification';
import User from '../migrations/v13/user';
import SurveyForm from '../migrations/v9/survey_form';
import SurveyQuestion from '../migrations/v9/survey_question';
import SurveyOption from '../migrations/v9/survey_option';
import SurveyAnswer from '../migrations/v9/survey_answer';
import Survey from '../migrations/v9/survey';
import SurveySection from '../migrations/v9/survey_section';
import SurveyCriteria from '../migrations/v9/survey_criteria';
import {schemaNames} from '../../constants/schema_constant';

const changedSchemas = [
  { label: schemaNames[0], data: User },
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[4], data: Video },
  { label: schemaNames[5], data: Topic },
  { label: schemaNames[6], data: Question },
  { label: schemaNames[9], data: Notification },
  { label: schemaNames[10], data: Tag },
  { label: schemaNames[15], data: SurveyForm },
  { label: schemaNames[16], data: SurveyQuestion },
  { label: schemaNames[17], data: SurveyOption },
  { label: schemaNames[18], data: SurveyAnswer },
  { label: schemaNames[19], data: Survey },
  { label: schemaNames[20], data: SurveySection },
  { label: schemaNames[21], data: SurveyCriteria },
];

const schemaV13 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 13,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 13) {
      newRealm.delete(newRealm.objects('Video'));
    }
  },
}

export default schemaV13;