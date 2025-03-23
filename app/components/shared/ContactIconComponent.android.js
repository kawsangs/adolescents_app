import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import color from '../../themes/color';
import {contactIcons, WHATSAPP} from '../../constants/contact_constant';
import {FEATHER, MATERIAL_COMMUNNITY, FONTAWESOME_5} from '../../constants/icon_constant';

const ContactIconComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  switch (contactIcons[props.type].type) {
    case FEATHER:
      return <FeatherIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || appTheme.primary_color} />
      break;
    case MATERIAL_COMMUNNITY:
      return <MaterialCommunityIcon name={contactIcons[props.type].name} size={props.size || 24} color={props.color || appTheme.primary_color} brand />
      break;
    case FONTAWESOME_5:
      return <FontAwesome5 name={contactIcons[props.type].name} size={props.size || 24} color={props.color || appTheme.primary_color} />
      break;
    case WHATSAPP:
      return <View style={{width: 43, height: 43, backgroundColor: color.whatsappColor, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome name={contactIcons[props.type].name} size={33} color={color.whiteColor} />
             </View>
      break;
    default:
      return <FontAwesome name={contactIcons[props.type].name} size={props.size || 24} color={props.color || appTheme.primary_color} />
  }
}

export default ContactIconComponent;