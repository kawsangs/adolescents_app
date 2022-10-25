import {Dimensions} from 'react-native';
import {isLowPixelDensityDevice} from '../utils/responsive_util';

const facilityServiceHelper = (() => {
  return {
    filterOverflowServices,
  }

  function filterOverflowServices(serviceUuids, containerWidth, serviceWidths) {
    let totalWidth = 0;
    let maxWidth = containerWidth - (isLowPixelDensityDevice() ? 115 : 60)
    for(let i = 0; i < serviceWidths.length; i++) {
      if ((totalWidth > 0 && containerWidth > 0) && totalWidth > maxWidth)
        return serviceUuids.slice(0, i);

      totalWidth += serviceWidths[i];
    }

    return serviceUuids;
  }
})();

export default facilityServiceHelper;