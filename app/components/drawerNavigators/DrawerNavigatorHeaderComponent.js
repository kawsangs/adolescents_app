import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import GradientViewComponent from '../shared/GradientViewComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';

const DrawerNavigatorHeaderComponent = (props) => {
  const {t} = useTranslation();
  const renderIcon = () => {
    return props.isAnonymous ? <AnonymousIconComponent size={29} color={color.whiteColor}/>
                             : <FeatherIcon name='user' color={color.whiteColor} size={29} />
  }

  return (
    <View style={{flexDirection: 'row', borderWidth: 0, marginTop: 40, alignItems: 'center'}}>
      <GradientViewComponent style={{ width: 64, height: 64, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 4 }}>
        {renderIcon()}
      </GradientViewComponent>

      { !props.isAnonymous &&
        <Text style={{color: color.whiteColor, marginLeft: 16, fontSize: largeFontSize()}}>ប្រុស | ២០{t('year')}</Text>
      }
    </View>
  )
}

export default DrawerNavigatorHeaderComponent;