import VideoCategory from '../models/VideoCategory';
import Service from '../models/Service';
import topicHelper from './topic_helper';

const topTabHelper = (() => {
  return {
    getVideoCategoryRoutes,
    getTopicRoutes,
    getTopicTabKeys,
  }

  function getVideoCategoryRoutes() {
    let routes =[{key: "all", title: "ទាំងអស់", uuid: null}];
    VideoCategory.getAll().map(category => {
      routes.push({ key: category.name, title: category.name, uuid: category.uuid });
    });

    return routes;
  }

  function getTopicRoutes() {
    let routes = [
      { key: "បន្តពូជ", title: "បន្តពូជ", uuid: null },
      { key: "ផ្លូវចិត្ត", title: "ផ្លូវចិត្ត", uuid: null },
      { key: "មាតា និងទារក", title: "មាតា និងទារក", uuid: null },
    ];

    // const routes = [];
    // topicHelper.getRelatedServiceUuids().map(serviceUuid => {
    //   const service = Service.findByUuid(serviceUuid)
    //   console.log('=== each service = ', service)
    //   routes.push({ key: service.name, title: service.name, uuid: serviceUuid })
    // })

    return routes;
  }

  function getTopicTabKeys() {
    const keys = []
    topTabHelper.getTopicRoutes().map(route => {
      keys.push(route.key)
    })
    return keys;
  }
})();

export default topTabHelper;