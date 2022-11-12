import visitService from './visit_service';
import categoryHelper from '../helpers/category_helper';
import {tabVisitParams} from '../constants/bottom_tab_constant';
import {navigationRef} from '../navigators/app_navigator';

const categoryVisitService = (() => {
  return {
    recordVisit
  }

  function recordVisit(category) {
    if (categoryHelper.isVideo(category)) {
      visitService.recordVisitAction(tabVisitParams.video);
      return navigationRef.current?.navigate("VideoViewStack")
    }
    else if (categoryHelper.isClinicService(category))
      return visitService.recordVisitAction(tabVisitParams.service);

    visitService.recordVisitCategory(category)
  }
})()

export default categoryVisitService;