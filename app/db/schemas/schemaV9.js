import schemaHelper from '../../helpers/schema_helper';
import Category from '../migrations/v8/category';
import Facility from '../migrations/v5/facility';
import Video from '../migrations/v8/video';
import Topic from '../migrations/v6/topic';
import Tag from '../migrations/v5/tag';
import User from '../migrations/v7/user';
import {schemaNames} from '../../constants/schema_constant';
import uuidv4 from '../../utils/uuidv4_util';

const changedSchemas = [
  { label: schemaNames[0], data: User },
  { label: schemaNames[1], data: Category },
  { label: schemaNames[3], data: Facility },
  { label: schemaNames[4], data: Video },
  { label: schemaNames[5], data: Topic },
  { label: schemaNames[10], data: Tag }
];

const schemaV9 = {
  schema: schemaHelper.getSchemas(changedSchemas),
  schemaVersion: 9,
  onMigration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 9) {
      oldRealm.objects('FacilityImage').map(facilityImage => {
        newRealm.create('DownloadedFile', { uuid: uuidv4(), name: facilityImage.name, type: 'image' });
      });
      newRealm.deleteModel('FacilityImage');  //Delete FaciltyImage model

      newRealm.delete(newRealm.objects('Video'));
      newRealm.delete(newRealm.objects('Category'));
    }
  },
}

export default schemaV9;