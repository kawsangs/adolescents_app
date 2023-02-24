import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import FacilityCardInfoComponent from './FacilityCardInfoComponent';
import ImageComponent from '../shared/ImageComponent';
import EmptyImageComponent from '../shared/EmptyImageComponent';
import { cardElevation, cardBorderRadius } from '../../constants/component_constant';
import imageSources from '../../constants/image_source_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import {navigationRef} from '../../navigators/app_navigator';
import visitService from '../../services/visit_service';

const FacilityCardItemComponent = (props) => {
  const renderImage = () => {
    return (
      <View style={{flex: getStyleOfDevice(0.8, 1.2), paddingLeft: 8, justifyContent: 'center', alignItems: 'center'}}>
        { props.facility.logo ? <ImageComponent source={imageSources[props.facility.logo]} resizeMode="contain" imageStyle={styles.image} emptyStyle={styles.emptyView} />
          : <EmptyImageComponent/>
        }
      </View>
    )
  }

  const renderInfo = () => {
    return <FacilityCardInfoComponent uuid={props.facility.uuid} name={props.facility.name} audio={props.facility.audioSource}
              services={props.facility.services}
              accessibilityLabel={props.accessibilityLabel}
           />
  }

  const viewDetail = () => {
    visitService.recordVisitFacility(props.facility, () => {
      navigationRef.current?.navigate('FacilityDetailView', {uuid: props.facility.uuid})
    });
  }

  return (
    <Card mode="elevated" elevation={cardElevation} style={[styles.container, props.containerStyle]} onPress={() => viewDetail()}>
      <View style={{flexDirection: 'row', flexGrow: 1}}>
        { renderImage() }
        { renderInfo() }
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    height: 90,
    marginTop: 11,
  },
  image: {
    marginTop: -2,
    width: '65%',
    height: '65%',
  },
  emptyView: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
  }
});

export default FacilityCardItemComponent;