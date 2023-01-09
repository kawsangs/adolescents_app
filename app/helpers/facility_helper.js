import Facility from '../models/Facility';

const facilityHelper = (() => {
  return {
    getFacilities,
  }

  function getFacilities(provinceId, serviceUuid) {
    if (!serviceUuid && !provinceId)
      return Facility.getAll();

    const filteredFacilities = !!serviceUuid ? Facility.findByServiceUuid(serviceUuid) : Facility.getAll();
    return !!provinceId ? filteredFacilities.filter(facility => facility.province_id == provinceId) : filteredFacilities;
  }
})()


export default facilityHelper;