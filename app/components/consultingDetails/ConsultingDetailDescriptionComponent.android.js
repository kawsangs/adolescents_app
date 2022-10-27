import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

import color from '../../themes/color';
import imageSources from '../../constants/image_source_constant';
import {descriptionLineHeight, cardBorderRadius, cardElevation} from '../../constants/component_constant';
import {descriptionFontSize} from '../../utils/font_size_util';

const ConsultingDetailDescription = () => {
  return (
    <Card mode="elevated" elevation={cardElevation} style={{borderRadius: cardBorderRadius, paddingBottom: 0}}>
      <Image source={imageSources.intro3} style={styles.image} resizeMode='cover' />

      <Text style={{fontSize: descriptionFontSize(), lineHeight: descriptionLineHeight, padding: 16, color: color.blackColor}}>
        អ្នកអាចរកមើលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមើលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗអ្នកអាចរកមើលគ្លីនិកដែលនៅជិតលោកអ្នកជាមួយព័តិមានលំអិតអំពី សេវាកម្ម  ម៉ោងផ្តល់សេវា និងផែនទីងាយស្រួលក្នុងការរកទីតាំងគ្លីនិចនិមួយៗ
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
    height: 200,
    width: '100%'
  }
});

export default ConsultingDetailDescription;