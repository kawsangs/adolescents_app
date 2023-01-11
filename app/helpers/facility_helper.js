import Facility from '../models/Facility';

const facilityHelper = (() => {
  return {
    getFacilities,
  }

  function getFacilities(location, serviceUuid) {
    if (!serviceUuid && !location)
      return Facility.getAll();

    const filteredFacilities = !!serviceUuid ? Facility.findByServiceUuid(serviceUuid) : Facility.getAll();
    if (!location) return filteredFacilities;
    if (!!location.district)
      return filteredFacilities.filter(facility => facility.district_id == location.district);

    return filteredFacilities.filter(facility => facility.province_id == location.province);
  }
})()


export default facilityHelper;