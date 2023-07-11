import {minimumAge, maximumAge} from '../constants/user_constant';
import arrayUtil from '../utils/array_util';
import provinces from '../db/data/provinces';
import characteristics from '../db/data/characteristics';
import occupations from '../db/data/occupations';

const userHelper = (() => {
  return {
    getAgeDataset,
    getProvinceDataset,
    getCharacteristicDataset,
    getOccupationDataset,
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
    return _getPickerDataset(provinces, language);
  }

  function getCharacteristicDataset(language) {
    return _getPickerDataset(characteristics, language);
  }

  function getOccupationDataset(language) {
    return _getPickerDataset(occupations, language);
  }

  // private method
  function _getPickerDataset(data, language) {
    const dataset = [];
    data.map(item => {
      dataset.push({ label: item[`name_${language}`], value: item.value, audio: item.audio, uuid: item.uuid });
    });
    return dataset;
  }
})();

export default userHelper;