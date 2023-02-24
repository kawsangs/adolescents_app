import FacilityApi from '../api/facilityApi'
import apiService from './api_service';
import Facility from '../models/Facility';

const facilityService = (() => {
  return {
    getFacilities,
    syncFacility,
  }

  function getFacilities(startIndex, endIndex, facilities) {
    return facilities.slice(startIndex, endIndex)
  }

  async function syncFacility(page, successCallback, failureCallback) {
    // const response = await new FacilityApi().load()
    const response = null
    apiService.handleApiResponse(response, (res) => {
      console.log('== sync facility success = ', res)
      _handleSaveFacility([], successCallback)
    }, (error) => {
      console.log('== sync facility error = ', error)
      !!failureCallback && failureCallback();
    })
  }

  // private method
  function _handleSaveFacility(facilities, callback) {
    facilities.map(facility => {
      const {uuid, ...facilityParams} = facility;
      if (!!Facility.findByUuid(facility.uuid)) {
        Facility.update(facility.uuid, facilityParams)
      }
      else {
        Facility.create(facility)
      }
    });
    !!callback && callback(this.getFacilities(0, 10, Facility.getAll()));
  }
})()

export default facilityService