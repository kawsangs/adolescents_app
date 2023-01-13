import districts from '../db/data/districts';

const locationHelper = (() => {
  return {
    getDistrictsByProvince
  }

  function getDistrictsByProvince(provinceId) {
    return districts.filter(district => district.id.slice(0, 2) == provinceId)
                    .reduce((result, curr) => {
                      result.push({label: curr.name.km, value: curr.id, audio: null, uuid: curr.id});
                      return result;
                    }, []);
  }
})();

export default locationHelper;