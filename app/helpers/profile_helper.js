import genders from '../db/data/genders';
import provinces from '../db/data/provinces';
import characteristics from '../db/data/characteristics';
import occupations from '../db/data/occupations';

const profileHelper = (() => {
  return {
    getGender,
    getProvince,
    getCharacteristic,
    getOccupation,
  }

  function getGender(value) {
    return genders.find(gender => gender.value == value);
  }

  function getProvince(id) {
    return provinces.find(province => province.value == id);
  }

  function getCharacteristic(value) {
    return characteristics.find(characteristic => characteristic.value == value)
  }

  function getOccupation(value) {
    return occupations.find(occupation => occupation.value == value)
  }
})()

export default profileHelper;