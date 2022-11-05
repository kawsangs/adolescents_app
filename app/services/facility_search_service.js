import Facility from '../models/Facility';
import Service from '../models/Service';

const facilitySearchService = (() => {
  return {
    findFacilityByNameOrService
  }

  function findFacilityByNameOrService(text) {
    const facilitiesByName = Facility.containsByName(text);
    let facilitiesByService = [];

    Service.containsByName(text).map(service => {
      facilitiesByService.push(...Facility.findByServiceUuid(service.uuid));
    });

    const result = [...facilitiesByName, ...facilitiesByService];
    let uniq = {};
    const filteredResult = result.filter(obj => !uniq[obj.uuid] && (uniq[obj.uuid] = true));
    return filteredResult;
  }
})();

export default facilitySearchService;