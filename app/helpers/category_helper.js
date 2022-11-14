import Category from '../models/Category';
import Video from '../models/Video';
import Facility from '../models/Facility';
import {mentalSupportContacts} from '../constants/mental_support_constant';

const categoryHelper = (() => {
  return {
    isMentalSupport,
    isClinicService,
    isVideo,
    getSubPoint,
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
})()

export default categoryHelper;