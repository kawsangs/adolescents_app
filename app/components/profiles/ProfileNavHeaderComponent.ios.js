import React from 'react';
import {View} from 'react-native';
import { Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import NavigationHeaderComponent from '../shared/NavigationHeaderComponent';
import NavigationHeaderBackButtonComponent from '../shared/NavigationHeaderBackButtonComponent';
import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import {largeFontSize} from '../../utils/font_size_util';

const ProfileNavHeaderComponent = (props) => {
  const {t} = useTranslation();
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const renderRightButton = () => {
    return <Menu
              visible={isMenuVisible}
              onDismiss={() => setIsMenuVisible(false)}
              anchor={
                <View style={{flexDirection: 'row', height: '100%'}}>
                  <NavigationHeaderButtonComponent onPress={() => setIsMenuVisible(true)}
                    icon={<Icon name='more-vertical' size={20} color={color.whiteColor} />}
                  />
                </View>
              }
            >
              <Menu.Item
                theme={{colors: {text: color.redColor} }}
                onPress={() => {}}
                title={t('deleteAccount')}
                icon='trash'
                titleStyle={{fontSize: largeFontSize(), color: color.blackColor}}
              />
          </Menu>
  }

  return <NavigationHeaderComponent
            leftButton={<NavigationHeaderBackButtonComponent onPress={props.onPress}/>}
            label={t('yourProfile')}
            rightButton={renderRightButton()}
         />
}

export default ProfileNavHeaderComponent;