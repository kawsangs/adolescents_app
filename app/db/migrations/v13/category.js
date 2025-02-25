'use strict';

import Realm from 'realm';
import categoryHelper from '../../../helpers/category_helper';

class Category extends Realm.Object {
   get imageSource() {
      return categoryHelper.getFileByUrl(this.image_url, 'image');
  }

  get audioSource() {
    return categoryHelper.getFileByUrl(this.audio_url, 'audio');
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
    parent_code: 'string?',
    parent_id: 'string?',
    level: 'int',
    sources: {type:'list', objectType: 'mixed'},
    tag_list: 'string?'
  }
}

export default Category;
