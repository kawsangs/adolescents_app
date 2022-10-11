import VideoCategory from '../models/VideoCategory';

const videoCategoryHelper = (() => {
  return {
    getCategoryRoutes
  }

  function getCategoryRoutes() {
    let routes =[{key: 'all', title: 'ទាំងអស់', uuid: null}];
    VideoCategory.getAll().map(category => {
      routes.push({ key: category.name, title: category.name, uuid: category.uuid });
    });

    return routes;
  }
})();

export default videoCategoryHelper;