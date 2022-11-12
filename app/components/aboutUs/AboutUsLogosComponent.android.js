import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import {xLargeFontSize} from '../../utils/font_size_util';
import contactHelper from '../../helpers/contact_helper';
import {WEBSITE} from '../../constants/contact_constant';
import {initiators, funders, implementors} from '../../constants/partner_constant';

const AboutUsLogosComponent = () => {
  const {t} = useTranslation();
  const renderTitleAndLogos = (items, title) => {
    return (
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text style={{fontSize: xLargeFontSize(), marginBottom: 16}}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          { items.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => contactHelper.openContactLink(WEBSITE, item.url)}>
                <Image source={item.logo} style={item.style} resizeMode='contain' />
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    )
  }

  const renderQRcode = () => {
    const logos = [
      {
        logo: require("../../assets/images/YouthHealth_App_qr_code.png"),
        url: "https://play.google.com/store/apps/details?id=kh.org.childhelpline.youthhealth",
        style: {width: wp("36%"), height: wp("36%")}
      }
    ]
    return renderTitleAndLogos(logos, t("downloadMobileApp"))
  }

  return (
    <React.Fragment>
      {renderTitleAndLogos(initiators, t("initiatedBy"))}
      {renderTitleAndLogos(funders, t("fundedBy"))}
      {renderTitleAndLogos(implementors, t("implementedBy"))}
      {renderQRcode()}
    </React.Fragment>
  )
}

export default AboutUsLogosComponent;