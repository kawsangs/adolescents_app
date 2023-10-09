import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import workingDayHelper from '../../helpers/working_day_helper';
import dateTimeHelper from '../../helpers/date_time_helper';
import {descriptionFontSize} from '../../constants/component_constant';

const FacilityDetailWorkingDaysComponent = (props) => {
  const {t} = useTranslation();
  const renderWorkingDays = () => {
    const groupedWorkingDays = workingDayHelper.getGroupedWorkingDays(JSON.parse(props.workingDays));
    let doms = [];

    for (let key in groupedWorkingDays) {
      const workingDays = groupedWorkingDays[key]
      if (workingDays.length == 0) continue; 

      doms.push(
        <View key={key} style={{marginTop: 10, alignItems: 'center'}}>
          <Text style={{fontSize: descriptionFontSize, textTransform: 'capitalize'}}>
            {t(workingDays[0].day)}
            {workingDays.length > 1 && ` - ${t(workingDays[workingDays.length - 1].day)}`}
          </Text>
          {renderworkingHours(workingDays[0].working_hours)}
        </View>
      )
    }
    return doms;
  }

  const renderworkingHours = (workingHours) => {
    return workingHours.map((workingHour, index) => {
      return <Text key={`hour-${index}`} style={{fontSize: descriptionFontSize}}>
                { !workingHour.close_at && workingHour.open_at == 24 ? `24${t('hour')}`
                  : `${dateTimeHelper.getReadableTime(workingHour.open_at, t)} - ${dateTimeHelper.getReadableTime(workingHour.close_at, t)}`
                }
             </Text>
    })
  }

  return renderWorkingDays();
}

export default FacilityDetailWorkingDaysComponent;