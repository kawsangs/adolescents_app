import Category from '../models/Category';
import Facility from '../models/Facility';
import Service from '../models/Service';

const seedDataService = (() => {
  return {
    seedToRealm,
  }

  function seedToRealm() {
    Category.seedData();
    Facility.seedData();
    Service.seedData();
  }
})();

export default seedDataService;