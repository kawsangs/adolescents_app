import VideoCategory from '../models/VideoCategory';

const topTabHelper = (() => {
  return {
    getVideoCategoryRoutes,
    getConsultingRoutes,
  }

  function getVideoCategoryRoutes() {
    let routes =[{key: "all", title: "ទាំងអស់", uuid: null}];
    VideoCategory.getAll().map(category => {
      routes.push({ key: category.name, title: category.name, uuid: category.uuid });
    });

    return routes;
  }

  function getConsultingRoutes() {
    let routes = [
      { key: "បន្តពូជ", title: "បន្តពូជ", uuid: null },
      { key: "ផ្លូវចិត្ត", title: "ផ្លូវចិត្ត", uuid: null },
      { key: "មាតា និងទារក", title: "មាតា និងទារក", uuid: null },
    ];

    return routes;
  }
})();

export default topTabHelper;