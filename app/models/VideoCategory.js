// import BaseModel from './BaseModel';
// import videoCategories from '../db/json/video_categories.json';

// const MODEL = "VideoCategory"

// class VideoCategory {
//   static seedData = () => {
//     BaseModel.seedData(MODEL, this.#getFormattedVideoCategories());
//   }

//   static getAll = () => {
//     return BaseModel.getAll(MODEL);
//   }

//   // private method
//   static #getFormattedVideoCategories = () => {
//     let formattedVideoCategories = [];

//     videoCategories.map(videoCategory => {
//       formattedVideoCategories.push({...videoCategory, uuid: videoCategory.id});
//     });

//     return formattedVideoCategories;
//   }
// }

// export default VideoCategory;