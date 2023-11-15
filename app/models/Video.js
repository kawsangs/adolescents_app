import BaseModel from './BaseModel';
import VideoTag from './VideoTag';
import videos from '../db/json/videos.json';
import {itemsPerPage} from '../constants/sync_data_constant';

const MODEL = "Video"

class Video {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedVideos());
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('display_order', false);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findByCategoryUuid = (categoryUuid) => {
    return BaseModel.findByAttr(MODEL, {video_category_uuid: `'${categoryUuid}'`}, '', {type: 'ASC', column: 'display_order'});
  }

  static findByAuthor = (authorUuid) => {
    return BaseModel.findByAttr(MODEL, { author_uuid: `"${authorUuid}"` })
  }

  static findByTag = (tag) => {
    return BaseModel.containsByAttr(MODEL, 'tag_list', `'${tag}'`);
  }

  static findByTagAndAuthor = (tagUuid, authorUuid) => {
    if (!tagUuid && !authorUuid)
      return this.getAll();

    let filteredTags = this.getAll();
    if (!!tagUuid) {
      const tag = VideoTag.findByUuid(tagUuid);
      filteredTags = this.findByTag(tag.name);
    }
    if (!!authorUuid)
      filteredTags = filteredTags.filter(tag => tag.author_uuid == authorUuid);

    return filteredTags;
  }

  static create = (data) => {
    BaseModel.create(MODEL, this.#getFormattedData(data, true))
  }

  static update = (uuid, data) => {
    BaseModel.update(MODEL, uuid, this.#getFormattedData(data, false))
  }

  static getStartingPage = () => {
    const numOfLocalFacility = this.getAll().length
    return numOfLocalFacility == 0 ? 1 : Math.floor(numOfLocalFacility/itemsPerPage)
  }

  // private method
  static #getFormattedData = (video, isCreate) => {
    const formattedParams = {video_category_uuid: !!video.video_category ? video.video_category.id : null, author_uuid: !!video.video_author ? video.video_author.id : null}
    return isCreate ? {...video, ...formattedParams, uuid: video.id} : {...video, ...formattedParams}
  }

  static #getFormattedVideos = () => {
    let formattedVideos = [];
    videos.map(video => {
      formattedVideos.push({...video, uuid: video.id, author_uuid: !!video.video_author ? video.video_author.id : null})
    });
    return formattedVideos;
  }
}

export default Video;