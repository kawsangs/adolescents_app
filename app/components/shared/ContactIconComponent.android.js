import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import {contactIcons, WHATSAPP} from '../../constants/contact_constant';
import {FEATHER, MATERIAL_COMMUNNITY} from '../../constants/icon_constant';

const ContactIconComponent = (props) => {
  if (props.type == WHATSAPP)
    return <View style={{width: 43, height: 43, backgroundColor: color.whatsappColor, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
              <FontAwesome name={contactIcons[props.type].name} size={33} color={color.whiteColor} />
           </View>
  else if (contactIcons[props.type].type == FEATHER)
    return <FeatherIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || contactIcons[props.type].color} />
  else if (contactIcons[props.type].type == MATERIAL_COMMUNNITY)
    return <MaterialCommunityIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || contactIcons[props.type].color} brand />

  return <FontAwesome name={contactIcons[props.type].name} size={props.size || 24} color={props.color || contactIcons[props.type].color} />
}

export default ContactIconComponent;