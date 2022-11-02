import VideoCategory from '../models/VideoCategory';

const topTabHelper = (() => {
  return {
    getVideoCategoryRoutes,
  }

  function getVideoCategoryRoutes() {
    let routes =[{key: "all", title: "ទាំងអស់", uuid: null}];
    VideoCategory.getAll().map(category => {
      routes.push({ key: category.name, title: category.name, uuid: category.uuid });
    });

    return routes;
  }
})();

export default topTabHelper;