import {minimumAge, maximumAge} from '../constants/user_constant';
import arrayUtil from '../utils/array_util';
import provinces from '../db/json/provinces';

const userHelper = (() => {
  return {
    getAgeDataset,
    getProvinceDataset,
  }

  function getAgeDataset(postfix) {
    const ages = arrayUtil.getRangeOfNumber(minimumAge, maximumAge);
    const dataset = [];
    ages.map(age => {
      dataset.push({ label: `${age} ${postfix}`, value: age });
    });
    return dataset
  }

  function getProvinceDataset(language) {
    const dataset = [];
    provinces.map(province => {
      dataset.push({ label: province[`name_${language}`], value: province.value });
    });
    return dataset;
  }
})();

export default userHelper;