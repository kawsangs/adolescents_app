'use strict';

import Realm from 'realm';
import imageSources from '../../../constants/image_source_constant';
import audioSources from '../../../constants/audio_source_constant';

class Category extends Realm.Object {
  get imageSource() {
    if (!this.image_url)
      return this.image ? imageSources[this.image] : null;

    return { uri: `file://${this.image_url}` };
  }

  get audioSource() {
    if (!this.audio_url)
      return this.audio ? audioSources[this.audio] : null;

    return { uri: `file://${this.audio_url}` };
  }
}

Category.schema = {
  name: 'Category',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    code: 'string',
    name: 'string',
    description: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    audio: 'string?',
    image: 'string?',
    parent_code: 'string?',
    parent_id: 'string?',
    level: 'int',
    sources: {type:'string[]', default: [], optional: true },
    tag_list: 'string?'
  }
}

export default Category;
