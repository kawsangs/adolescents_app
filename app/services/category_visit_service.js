import visitService from './visit_service';
import categoryHelper from '../helpers/category_helper';
import {tabVisitParams} from '../constants/bottom_tab_constant';
import {navigationRef} from '../navigators/app_navigator';
import {pageable_types} from '../constants/visit_constant';

const categoryVisitService = (() => {
  return {
    recordVisit
  }

  function recordVisit(category) {
    if (categoryHelper.isVideo(category)) {
      visitService.recordVisitAction(tabVisitParams.video);
      return navigationRef.current?.navigate("VideoView")
    }
    else if (categoryHelper.isClinicService(category)) {
      visitService.recordVisitAction(tabVisitParams.service);
      return navigationRef.current?.navigate("FacilityViewStack")
    }
    else if (categoryHelper.isMentalSupport(category)) {
      visitService.recordVisitAction({code: "mental_support", name: "សេវាគាំទ្រផ្លូវចិត្ត", parent_code: null, pageable_id: null, pageable_type: pageable_types.page})
      return navigationRef.current?.navigate("MentalSupportView", {name: category.name});
    }

    visitService.recordVisitCategory(category)
  }
})()

export default categoryVisitService;