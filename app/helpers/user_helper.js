import {minimumAge, maximumAge} from '../constants/user_constant';
import arrayUtil from '../utils/array_util';
import provinces from '../db/data/provinces';
import characteristics from '../db/data/characteristics';
import occupations from '../db/data/occupations';
import educations from '../db/data/educations';
import translationHelper from './translation_helper';

const userHelper = (() => {
  return {
    getAgeDataset,
    getProvinceDataset,
    getCharacteristicDataset,
    getOccupationDataset,
    getEducationDataset,
  }

  function getAgeDataset(postfix, translation) {
    const ages = arrayUtil.getRangeOfNumber(minimumAge, maximumAge);
    const dataset = [];
    ages.map(age => {
      dataset.push({ label: `${translationHelper.translateNumber(age, translation)} ${postfix}`, value: age });
    });
    return dataset
  }

  function getProvinceDataset(translation) {
    return _getPickerDataset(provinces, translation);
  }

  function getCharacteristicDataset(language) {
    return _getPickerDataset(characteristics, language);
  }

  function getOccupationDataset(translation) {
    return _getPickerDataset(occupations, translation);
  }

  function getEducationDataset(occupation, translation) {
    if (occupation == 'n_a') return [];

    return _getPickerDataset(occupation == 'student' ? educations.slice(0, -1) : educations, translation);
  }

  // private method
  function _getPickerDataset(data, translation) {
    const dataset = [];
    data.map(item => {
      dataset.push({ label: translation(item.name), value: item.value, audio: item.audio, uuid: item.uuid, subtitle: translation(item.subtitle) || null });
    });
    return dataset;
  }
})();

export default userHelper;