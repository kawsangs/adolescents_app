import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import {xLargeFontSize} from '../../utils/font_size_util';
import workingDayHelper from '../../helpers/working_day_helper';
import dateTimeHelper from '../../helpers/date_time_helper';
import {days} from '../../constants/date_time_constant';

const FacilityDetailWorkingDaysComponent = (props) => {
  const {i18n} = useTranslation();
  const renderWorkingDays = () => {
    const groupedWorkingDays = workingDayHelper.getGroupedWorkingDays(JSON.parse(props.workingDays));
    let doms = [];

    for (let key in groupedWorkingDays) {
      const workingDays = groupedWorkingDays[key]
      if (workingDays.length == 0) continue; 

      doms.push(
        <View key={key} style={{marginTop: 10, alignItems: 'center'}}>
          <Text style={{fontSize: xLargeFontSize()}}>
            {days[workingDays[0].day][i18n.language]}
            {workingDays.length > 1 && ` - ${days[workingDays[workingDays.length - 1].day][i18n.language]}`}
          </Text>
          {renderworkingHours(workingDays[0].working_hours)}
        </View>
      )
    }
    return doms;
  }

  const renderworkingHours = (workingHours) => {
    return workingHours.map((workingHour, index) => {
      return <Text key={`hour-${index}`} style={{fontSize: xLargeFontSize()}}>
                {dateTimeHelper.getReadableTime(workingHour.open_at, i18n.language)} - {dateTimeHelper.getReadableTime(workingHour.close_at, i18n.language)}
             </Text>
    })
  }

  return renderWorkingDays();
}

export default FacilityDetailWorkingDaysComponent;