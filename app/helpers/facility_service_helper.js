import {isLowPixelDensityDevice} from '../utils/responsive_util';

const facilityServiceHelper = (() => {
  return {
    filterOverflowServices,
  }

  function filterOverflowServices(services, containerWidth, serviceWidths) {
    let totalWidth = 0;
    let maxWidth = containerWidth - (isLowPixelDensityDevice() ? 120 : 90)
    for(let i = 0; i < serviceWidths.length; i++) {
      if ((totalWidth > 0 && containerWidth > 0) && totalWidth > maxWidth)
        return services.slice(0, i);

      totalWidth += serviceWidths[i];
    }

    return services;
  }
})();

export default facilityServiceHelper;