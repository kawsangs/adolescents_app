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
    const response = await new FacilityApi().load()
    apiService.handleApiResponse(response, (res) => {
      console.log('== sync facility success = ', res.length)
      _handleSaveFacility(res, successCallback)
    }, (error) => {
      console.log('== sync facility error = ', error)
      !!failureCallback && failureCallback();
    })
  }

  // private method
  function _handleSaveFacility(facilities, callback) {
    facilities.map(facility => {
      if (!!Facility.findByUuid(facility.id)) {
        const {id, ...facilityParams} = facility;
        Facility.update(id, Facility.getFormattedData(facilityParams))
      }
      else
        Facility.create(Facility.getFormattedData(facility))
    });
    !!callback && callback(Facility.getAll());
    // !!callback && callback(this.getFacilities(0, 10, Facility.getAll()));
  }
})()

export default facilityService