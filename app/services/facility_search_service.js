import Facility from '../models/Facility';
import Service from '../models/Service';

const facilitySearchService = (() => {
  return {
    findServicesAndFacilities
  }

  function findServicesAndFacilities(text) {
    return {
      services: Service.findByName(text),
      facilities: _findFacilities(text),
    }
  }

  // private method
  function _findFacilities(text) {
    const facilitiesByName = Facility.findByName(text);
    let facilitiesByService = [];

    Service.findByName(text).map(service => {
      facilitiesByService.push(Facility.findByServiceUuid(service.uuid));
    });

    const result = [...facilitiesByName, ...facilitiesByService];

    console.log('RESULT == ', result)

    let uniq = {};
    const filteredResult = result.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
    console.log('arrFiltered = ', filteredResult);
    return filteredResult;
  }
})();

export default facilitySearchService;