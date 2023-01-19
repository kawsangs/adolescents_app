const workingDayHelper = (() => {
  return {
    getGroupedWorkingDays,
  }

  function getGroupedWorkingDays(workingDays) {
    const orderedWorkingDays = _getOrderedWorkingDays(workingDays)
    // Group the working days by order number
    const groupedWorkingDays = orderedWorkingDays.reduce((prevObj, currentObj) => (
      { ...prevObj, [currentObj.order] : (prevObj[currentObj.order] || []).concat(currentObj)}
    ), {});

    return groupedWorkingDays;
  }

  // private method
  function _getOrderedWorkingDays(workingDays) {
    const orderedWorkingDays = [];
    let order = 1;
    let previousWorkingHours = [];

    // sort the working days start from Monday to Sunday
    [...workingDays.slice(1), ...workingDays.slice(0, 1)].map((workingDay, index) => {
      if (workingDay.open) {
        if (index > 0 && _hasDifferentWorkingHours(previousWorkingHours, workingDay.working_hours))
          order += 1;

        orderedWorkingDays.push({...workingDay, order: order});
        previousWorkingHours = workingDay.working_hours;
      }
      else
        order += 1;
    });

    return orderedWorkingDays;
  }

  function _hasDifferentWorkingHours(previousHours, currentHours) {
    return JSON.stringify(previousHours) != JSON.stringify(currentHours);
  }
})();

export default workingDayHelper;