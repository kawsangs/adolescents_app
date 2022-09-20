import Facility from '../models/Facility';
import Service from '../models/Service';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Facility.seedData();
    Service.seedData();
  }
})();

export default seedDataService;