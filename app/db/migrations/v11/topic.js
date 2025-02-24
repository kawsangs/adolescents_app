'use strict';

import Realm from 'realm';
import fileUtil from '../../../utils/file_util';

class Topic extends Realm.Object {
  get audioSource() {
    return fileUtil.getSourceByUrl(this.audio, 'audio');
  }
}

Topic.schema = {
  name: 'Topic',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    published_at: 'date?',
    audio: 'string?',
    code: 'string?',
    service_uuids: {type:'list', objectType: 'mixed'},
    question_uuids: {type:'list', objectType: 'mixed'},
    name_km: 'string',
    name_en: 'string'
  }
}

export default Topic;