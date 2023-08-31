'use strict';

import Realm from 'realm';
import fileService from '../../../services/file_service';

class Question extends Realm.Object {
  get audioSource() {
    return fileService.getByUrl(this.audio, 'audio');
  }
}

Question.schema = {
  name: 'Question',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    code: 'string?',
    name: 'string',
    type: 'string',
    hint: 'string?',
    display_order: 'int',
    audio: 'string?',
    topic_uuid: 'string',
    answer: 'string?',
    option_uuids: { type: 'string[]', default: [], optional: true }
  }
}

export default Question;