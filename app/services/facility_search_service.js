import Facility from '../models/Facility';

const facilitySearchService = (() => {
  return {
    findFacilityByNameOrService
  }

  function findFacilityByNameOrService(text) {
    const facilitiesByName = Facility.containsByName(text);
    let facilitiesByService = [];
    facilitiesByService.push(...Facility.findByService(text));
    const result = [...facilitiesByName, ...facilitiesByService];
    let uniq = {};
    const filteredResult = result.filter(obj => !uniq[obj.uuid] && (uniq[obj.uuid] = true));
    return filteredResult;
  }
})();

export default facilitySearchService;