'use strict';

import categories from '../../json/categories';

class Category {
  get imageSource() {
    if (!this.image) return '';

    if (!this.image_url) {
      const cate = categories.filter(category => category.uuid == this.uuid)[0];
      return !!cate ? cate.image : '';
    }

    return { uri: `file://${this.image_url}` };
  }
}

Category.schema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'int',
    uuid: 'string',
    code: 'string',
    name: 'string',
    description: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    audio: 'int?',
    image: 'int?',
    parent_id: 'int?',
    order: 'int',
    display: 'int',
    updated_at: 'date',
  }
}

export default Category;

// const CategorySchema = {
//   name: 'Category',
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     uuid: 'string',
//     code: 'string',
//     name: 'string',
//     description: 'string?',
//     audio_url: 'string?',
//     image_url: 'string?',
//     audio: 'int?',
//     image: 'int?',
//     parent_id: 'int?',
//     order: 'int',
//     display: 'int',
//     updated_at: 'date',
//   }
// }

// export default CategorySchema;