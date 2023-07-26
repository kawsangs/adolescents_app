import React from 'react';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AnonymousIconComponent from './AnonymousIconComponent';
import User from '../../models/User';
import color from '../../themes/color';

const ProfileIconComponent = (props) => {
  const user = User.currentLoggedIn();
  const iconSize = props.iconSize || 34
  const icons = {
    'lgbt': { name: 'gender-transgender', size: iconSize, type: <MaterialIcon/> },
    'unknown': { name: 'progress-question', size: iconSize + 4, type: <MaterialIcon/>},
    'male': { name: 'user', size: iconSize, type: <SimpleLineIcon/>, style: {marginTop: -3} },
    'female': { name: 'user-female', size: iconSize, type: <SimpleLineIcon/>, style: {marginTop: -3} }
  }

  if (user.anonymous)
    return <AnonymousIconComponent size={iconSize} color={color.whiteColor} containerStyle={{marginLeft: -3}}/>

  return React.cloneElement(icons[user.gender].type, {
          name: icons[user.gender].name,
          size: icons[user.gender].size,
          style: [{color: color.whiteColor}, !!icons[user.gender].style && icons[user.gender].style]
        })
}

export default ProfileIconComponent;