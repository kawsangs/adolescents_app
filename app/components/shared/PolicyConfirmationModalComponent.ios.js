import React, {useState} from 'react';
import {View, Linking} from 'react-native';
import {Text, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import BottomSheetModalMainComponent from './BottomSheetModalMainComponent';
import BoldLabelComponent from './BoldLabelComponent';
import PolicyConfirmationButtonComponent from './policyConfirmationModals/PolicyConfirmationButtonComponent';
import color from '../../themes/color';
import {signUpConfirmationContentHeight} from '../../constants/modal_constant';
import {PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../../constants/main_constant';
import {bottomSheetTitleFontSize} from '../../constants/bottom_sheet_picker_constant';
import componentUtil from '../../utils/component_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/policyConfirmationModalComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/policyConfirmationModalComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const PolicyConfirmationModalComponent = (props) => {
  const [checked, setChecked] = useState(false);
  const renderIcon = () => {
    return <View style={styles.infoIcon}>
              <Icon name="exclamation" size={18} color={color.secondaryColor} />
            </View>
  }

  const renderContent = () => {
    return <React.Fragment>
              <Text style={styles.instruction}>
                សូមអានលក្ខខណ្ឌខាងក្រោម មុនពេលធ្វើការចុះឈ្មោះចូលប្រើប្រាស់កម្មវិធី សុខភាពយុវជន។ ដោយចុច <BoldLabelComponent label='"យល់ព្រម"' style={styles.instruction}/> បញ្ចាក់ថាអ្នកយល់ព្រមទៅនឹងគោលការណ៍ឯកជនភាព និងលក្ខខណ្ឌនៃកម្មវិធី សុខភាពយុវជន។
              </Text>
              {renderCheckBox()}
              <PolicyConfirmationButtonComponent checked={checked} saveUser={props.saveUser}/>
           </React.Fragment>
  }

  const renderCheckBox = () => {
    return <View style={styles.checkboxContainer}>
              <View style={{marginLeft: -10}}>
                <Checkbox.Item
                  status={checked ? 'checked' : 'unchecked'}
                  style={{width: componentUtil.pressableItemSize(), height: componentUtil.pressableItemSize(), justifyContent: 'center'}}
                  uncheckedColor={color.primaryColor}
                  color={color.secondaryColor}
                  position='leading'
                  onPress={() => setChecked(!checked)}
                  mode="android"
                />
              </View>
              <Text style={styles.checkboxLabel}>
                ខ្ញុំបានអាន និងយល់ព្រមតាម {renderUrl('“គោលការណ៍ឯកជនភាព”', PRIVACY_POLICY_URL)} និង {renderUrl('“គោលការណ៍ និងលក្ខខណ្ឌប្រើប្រាស់កម្មវិធី”', TERMS_AND_CONDITIONS_URL)}
              </Text>
           </View>
  }

  const renderUrl = (label, url) => {
    return <Text onPress={() =>  Linking.openURL(url)} style={{color: color.primaryColor}}>{label}</Text>
  }

  return (
    <BottomSheetModalMainComponent
      title='លក្ខខណ្ឌចុះឈ្មោះប្រើប្រាស់'
      titleIcon={renderIcon()}
      titleStyle={{fontSize: bottomSheetTitleFontSize, marginTop: getStyleOfDevice(0, 1)}}
      titleContainerStyle={{marginBottom: getStyleOfDevice(8, 0)}}
      containerStyle={{height: hp(signUpConfirmationContentHeight)}}
      scrollViewStyle={{paddingVertical: 0}}
    >
      {renderContent()}
    </BottomSheetModalMainComponent>
  )
}

export default PolicyConfirmationModalComponent;