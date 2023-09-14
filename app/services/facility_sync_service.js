import FacilityApi from '../api/facilityApi'
import apiService from './api_service';
import fileService from './file_service';
import Facility from '../models/Facility';
import DownloadedFile from '../models/DownloadedFile';
import {itemsPerPage} from '../constants/sync_data_constant';

const facilitySyncService = (() => {
  return {
    syncData,
    syncAllData
  }

  async function syncData(page, successCallback, failureCallback) {
    const response = await new FacilityApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      _handleSaveFacility(res.facilities, page)
      _handleDownloadLogo(0, res.facilities, () => {
        !!successCallback && successCallback(res.pagy.count)
      })
    }, (error) => !!failureCallback && failureCallback())
  }

  function syncAllData(successCallback, failureCallback) {
    _syncAndRemoveByPage(1, 1, successCallback, failureCallback)
  }

  // private method
  function _handleSaveFacility(facilities) {
    facilities.map((facility, index) => {
      !!Facility.findByUuid(facility.id) ? Facility.update(facility.id, facility) : Facility.create(facility)
    });
  }

  async function _syncAndRemoveByPage(page, totalPage, successCallback, failureCallback, prevFacilities = []) {
    if (page > totalPage) {
      Facility.deleteAll()
      _handleSaveFacility(prevFacilities)
      return successCallback(prevFacilities)
    }

    const response = await new FacilityApi().load(page)
    apiService.handleApiResponse(response, (res) => {
      _handleDownloadLogo(0, res.facilities, () => {
        const allPage = Math.ceil(res.pagy.count / itemsPerPage)
        _syncAndRemoveByPage(page+1, allPage, successCallback, failureCallback, [...prevFacilities, ...res.facilities])
      })
    }, (error) => !!failureCallback && failureCallback())
  }

  function _handleDownloadLogo(index, facilities, callback) {
    if (index >= facilities.length)
      return !!callback && callback();

    const facility = facilities[index]
    if (!!facility.logo && !DownloadedFile.isFileNameExisted(facility.logo)) {
      fileService.download(facility.logo, (filename, isNewFile) => {
        !!isNewFile && DownloadedFile.create({name: filename, type: 'image'})
        _handleDownloadLogo(index + 1, facilities, callback)
      }, () => _handleDownloadLogo(index + 1, facilities, callback))
    }
    else _handleDownloadLogo(index + 1, facilities, callback)
  }
})()

export default facilitySyncService