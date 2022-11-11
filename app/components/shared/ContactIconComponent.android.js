import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import {contactIcons} from '../../constants/contact_constant';
import {FEATHER, MATERIAL_COMMUNNITY} from '../../constants/icon_constant';

const ContactIconComponent = (props) => {
  if (contactIcons[props.type].type == FEATHER)
    return <FeatherIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || color.whiteColor} />
  else if (contactIcons[props.type].type == MATERIAL_COMMUNNITY)
    return <MaterialCommunityIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || color.whiteColor} brand />

  return <FontAwesome name={contactIcons[props.type].name} size={props.size || 24} color={props.color || color.whiteColor} />
}

export default ContactIconComponent;