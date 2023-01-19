import Facility from '../models/Facility';

const facilitySearchService = (() => {
  return {
    findFacilityByNameOrService
  }

  function findFacilityByNameOrService(text) {
    const result = [...Facility.containsByName(text), ...Facility.findByService(text), ...Facility.findByTag(text)];
    let uniq = {};
    const filteredResult = result.filter(obj => !uniq[obj.uuid] && (uniq[obj.uuid] = true));
    return filteredResult;
  }
})();

export default facilitySearchService;