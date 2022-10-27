import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import GradientViewComponent from '../../components/shared/GradientViewComponent';
import NavigationHeaderComponent from '../../components/shared/NavigationHeaderComponent';
import NavigationHeaderMenuButtonComponent from '../../components/shared/navigationHeaders/NavigationHeaderMenuButtonComponent';
import ConsultingTabBarComponent from '../../components/consultings/ConsultingTabBarComponent';
import color from '../../themes/color';

const ConsultingView = (props) => {
  const {t} = useTranslation();
  const renderHeader = () => {
    return <NavigationHeaderComponent
              leftButton={<NavigationHeaderMenuButtonComponent navigation={props.navigation}/>}
              label={t('healthServiceConsulting')}
           />
  }

  return (
    <GradientViewComponent colors={[color.primaryColor, 'rgba(170, 73, 133, 0.88)']}
      style={{flexGrow: 1}}
    >
      <React.Fragment>
        {renderHeader()}
        <ConsultingTabBarComponent/>
      </React.Fragment>
    </GradientViewComponent>
  )
}

export default ConsultingView;