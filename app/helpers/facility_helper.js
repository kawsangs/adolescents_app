import Facility from '../models/Facility';
import {itemsPerPage} from '../constants/sync_data_constant';

const facilityHelper = (() => {
  return {
    getFacilities,
    getStartingPage,
  }

  function getFacilities(location, tagUuid) {
    if (!tagUuid && !location.province)
      return Facility.getAll();

    const filteredFacilities = !!tagUuid ? Facility.findByTagUuid(tagUuid) : Facility.getAll();
    if (!location.province) return filteredFacilities;
    if (!!location.district)
      return filteredFacilities.filter(facility => facility.district_id == location.district);

    return filteredFacilities.filter(facility => facility.province_id == location.province);
  }

  function getStartingPage() {
    const numOfLocalFacility = Facility.getAll().length
    return numOfLocalFacility == 0 ? 1 : Math.floor(numOfLocalFacility/itemsPerPage)
  }
})()


export default facilityHelper;