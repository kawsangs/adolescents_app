import FacilityApi from '../api/facilityApi'
import apiService from './api_service';
import fileDownloadService from './file_download_service';
import Facility from '../models/Facility';
import FacilityImage from '../models/FacilityImage';

const facilityListingService = (() => {
  return {
    syncData,
  }

  async function syncData(page, successCallback, failureCallback) {
    const response = await new FacilityApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      _handleSaveFacility(res.facilities)
      _handleDownloadLogo(0, res.facilities, () => {
        !!successCallback && successCallback(res.pagy.count)
      })
    }, (error) => !!failureCallback && failureCallback())
  }

  // private method
  function _handleSaveFacility(facilities) {
    facilities.map((facility, index) => {
      !!Facility.findByUuid(facility.id) ? Facility.update(facility.id, facility) : Facility.create(facility)
    });
  }

  function _handleDownloadLogo(index, facilities, callback) {
    if (index >= facilities.length)
      return !!callback && callback();

    const facility = facilities[index]
    if (!!facility.logo && !FacilityImage.isFileNameExisted(facility.logo)) {
      fileDownloadService.download(facility.logo, (filename, isNewFile) => {
        !!isNewFile && FacilityImage.create({name: filename})
        _handleDownloadLogo(index + 1, facilities, callback)
      }, () => _handleDownloadLogo(index + 1, facilities, callback))
    }
    else _handleDownloadLogo(index + 1, facilities, callback)
  }
})()

export default facilityListingService