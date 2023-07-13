import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import GradientViewComponent from '../shared/GradientViewComponent';
import AnonymousIconComponent from '../shared/AnonymousIconComponent';
import color from '../../themes/color';
import {largeFontSize} from '../../utils/font_size_util';
import translationHelper from '../../helpers/translation_helper';
import User from '../../models/User';
import {navigationRef} from '../../navigators/app_navigator';

const DrawerNavigatorHeaderComponent = (props) => {
  const {t, i18n} = useTranslation();
  const loggedInUser = User.currentLoggedIn();
  const userOccupation = useSelector(state => state.loginUserOccupation.value)
  const renderIcon = () => {
    return loggedInUser.anonymous ? <AnonymousIconComponent size={29} color={color.whiteColor}/>
                             : <FeatherIcon name='user' color={color.whiteColor} size={29} />
  }

  return (
    <TouchableOpacity onPress={() => navigationRef.current?.navigate('ProfileView')}
      style={{flexDirection: 'row', borderWidth: 0, marginTop: 40, alignItems: 'center'}}
    >
      <GradientViewComponent style={{ width: 64, height: 64, borderRadius: 64, justifyContent: 'center', alignItems: 'center', elevation: 4 }}>
        {renderIcon()}
      </GradientViewComponent>

      <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: color.whiteColor, marginLeft: 16, fontSize: largeFontSize()}}>
          {!loggedInUser.anonymous ?
            `${t(loggedInUser.gender)} | ${translationHelper.translateNumber(loggedInUser.age, i18n.language)} ${t('year')}`
            : t('anonymous')
          }
        </Text>
        <FeatherIcon name="chevron-right" color={color.whiteColor} size={22} style={{marginLeft: 10, marginTop: 2}} />

        { userOccupation == 'n_a' &&
          <View style={{width: 16, height: 16, backgroundColor: color.redColor, borderRadius: 16, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: -10, right: -4}}>
            <FontAwesomeIcon name='exclamation' size={11} color='white' />
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}

export default DrawerNavigatorHeaderComponent;
