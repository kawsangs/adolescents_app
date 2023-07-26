import Category from '../models/Category';
import Video from '../models/Video';
import Facility from '../models/Facility';
import {mentalSupportContacts} from '../constants/mental_support_constant';
import {offlineHomeCatgories} from '../constants/category_constant';
import {ROW_CARD, TILTED_CARD} from '../constants/card_constant';

const categoryHelper = (() => {
  return {
    isMentalSupport,
    isClinicService,
    isVideo,
    getSubPoint,
    getHomeCategories,
    getFormattedSources
  }

  function isMentalSupport(category) {
    return category.code.includes("mental_support");
  }

  function isClinicService(category) {
    return category.code.includes("clinic_and_examination_service");
  }

  function isVideo(category) {
    return category.code.includes("entertainment");
  }

  function getSubPoint(category) {
    return Category.getSubCategories(category.uuid).length;
  }

  function getHomeCategories() {
    let categories = [...Category.getParentCategories()];
    let offlineCateIncluded = false;
    categories.map((category, index) => {
      categories[index].display = (index == 0 || index == 1) ? ROW_CARD : TILTED_CARD;
      if (offlineHomeCatgories.filter(offlineCate => offlineCate.code == category.code).length > 0)
        offlineCateIncluded = true
    })
    return offlineCateIncluded ? categories : [...categories, ...offlineHomeCatgories];
  }

  function getFormattedSources(sources) {
    return sources.map(source => JSON.stringify(source));
  }
})()

export default categoryHelper;