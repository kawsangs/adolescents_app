import FacilityApi from '../api/facilityApi'
import apiService from './api_service';
import Facility from '../models/Facility';

const facilityListingService = (() => {
  return {
    syncData,
  }

  async function syncData(page, successCallback, failureCallback) {
    const response = await new FacilityApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      _handleSaveFacility(res.facilities)
      !!successCallback && successCallback(res.pagy.count)
    }, (error) => !!failureCallback && failureCallback())
  }

  // private method
  function _handleSaveFacility(facilities) {
    facilities.map(facility => {
      if (!!Facility.findByUuid(facility.id))
        Facility.update(facility.id, facility)
      else
        Facility.create(facility)
    });
  }
})()

export default facilityListingService