import Facility from '../models/Facility';

const facilityHelper = (() => {
  return {
    getFacilities,
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
})()


export default facilityHelper;