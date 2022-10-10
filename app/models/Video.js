import BaseModel from './BaseModel';

const MODEL = "Video";

class Video extends BaseModel {
  constructor() {
    super(MODEL)
  }

  findByCategoryUuid = (categoryUuid) => {
    return this.findByAttr({video_category_uuid: `'${categoryUuid}'`}, '', {type: 'ASC', column: 'display_order'});
  }
}

export default Video;