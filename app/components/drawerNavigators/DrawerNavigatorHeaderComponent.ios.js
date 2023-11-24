import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import GradientViewComponent from '../shared/GradientViewComponent';
import NoticeBadgeComponent from '../shared/NoticeBadgeComponent';
import ProfileIconComponent from '../shared/ProfileIconComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import User from '../../models/User';
import {navigationRef} from '../../navigators/app_navigator';

const DrawerNavigatorHeaderComponent = (props) => {
  const {t, i18n} = useTranslation();
  const loggedInUser = User.currentLoggedIn();
  const userOccupation = useSelector(state => state.loginUserOccupation.value)

  return (
    <TouchableOpacity onPress={() => navigationRef.current?.navigate('ProfileNavigator')}
      style={{flexDirection: 'row', borderWidth: 0, marginTop: 40, alignItems: 'center'}}
    >
      <GradientViewComponent style={{ width: 64, height: 64, borderRadius: 64, justifyContent: 'center', alignItems: 'center', elevation: 4 }}>
        <ProfileIconComponent iconSize={29} />
      </GradientViewComponent>

      <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: color.whiteColor, marginLeft: 16, fontSize: largeFontSize()}}>
          {!loggedInUser.anonymous ?
            `${t(loggedInUser.gender)} | ${translationHelper.translateNumber(loggedInUser.age, t)} ${t('yearOld')}`
            : t('anonymous')
          }
        </Text>
        <FeatherIcon name="chevron-right" color={color.whiteColor} size={22} style={{marginLeft: i18n.language == 'en' ? 4 : 10, marginTop: 2}} />

        { (!User.isLoginAsAnonymous() && userOccupation == 'n_a') && <NoticeBadgeComponent style={{width: 16, height: 16, top: -10, right: -4}}/> }
      </View>
    </TouchableOpacity>
  )
}

export default DrawerNavigatorHeaderComponent;
