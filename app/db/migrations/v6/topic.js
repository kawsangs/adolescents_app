'use strict';

import Realm from 'realm';
import fileService from '../../../services/file_service';

class Topic extends Realm.Object {
  get audioSource() {
    return fileService.getByUrl(this.audio, 'audio');
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
    service_uuids: { type: 'string[]', default: [], optional: true },
    question_uuids: { type: 'string[]', default: [], optional: true },
    name_km: 'string',
    name_en: 'string'
  }
}

export default Topic;