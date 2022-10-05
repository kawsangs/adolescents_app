import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import GradientViewComponent from '../shared/GradientViewComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import User from '../../models/User';

const DrawerNavigatorHeaderComponent = (props) => {
  const {t, i18n} = useTranslation();
  const user = new User();
  const loggedInUser = user.loggedInUser();
  const renderIcon = () => {
    return User.isAnonymous() ? <AnonymousIconComponent size={29} color={color.whiteColor} containerStyle={{marginLeft: -4}}/>
                             : <FeatherIcon name='user' color={color.whiteColor} size={29} />
  }

  return (
    <View style={{flexDirection: 'row', borderWidth: 0, marginTop: 40, alignItems: 'center'}}>
      <GradientViewComponent style={{ width: 64, height: 64, borderRadius: 64, justifyContent: 'center', alignItems: 'center', elevation: 4 }}>
        {renderIcon()}
      </GradientViewComponent>

      { !user.isAnonymous() &&
        <Text style={{color: color.whiteColor, marginLeft: 16, fontSize: largeFontSize()}}>
          {t(loggedInUser.gender)} | {translationHelper.translateNumber(loggedInUser.age, i18n.language)} {t('year')}
        </Text>
      }
    </View>
  )
}

export default DrawerNavigatorHeaderComponent;