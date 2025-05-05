import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import {Ticker} from 'react-native-ticker-tape';

import {xxLargeFontSize} from '../../utils/font_size_util';
import {FontFamily} from '../../themes/font';
import color from '../../themes/color';
import {totalNavigationHeaderHorizontalPadding} from '../../constants/component_constant';

const AutoScrollLabelComponent = (props) => {
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [measuredText, setMeasuredText] = useState(false);
  
  // Check if text is overflowing container
  useEffect(() => {
    if (textWidth > 0 && containerWidth > 0) {
      setIsOverflowing(textWidth > containerWidth);
      setMeasuredText(true);
    }
  }, [textWidth, containerWidth]);

  return (
    <View 
      style={{ flex: 1 }}
      onLayout={(event) => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
    >
      {/* Hidden text measurement view */}
      <Text
        style={[
          styles.label,
          { position: 'absolute', opacity: 0}
        ]}
        onLayout={(event) => {
          setTextWidth(event.nativeEvent.layout.width + totalNavigationHeaderHorizontalPadding);
        }}
      >
        {props.label}
      </Text>

      { measuredText &&
        (isOverflowing
          ? (
            <Ticker msPerPX={50} loop={true}>
              <Text style={[styles.label, { textAlignVertical: 'center' }]}>
                {props.label}
              </Text>
            </Ticker>
          )
          : (
            <Text style={styles.label} numberOfLines={1}>
              {props.label}
            </Text>
          )
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: color.whiteColor,
    fontSize: xxLargeFontSize(),
    fontFamily: FontFamily.bold,
    lineHeight: 30
  }
});

export default AutoScrollLabelComponent;