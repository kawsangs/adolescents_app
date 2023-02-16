import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import NavigationHeaderButtonComponent from '../shared/navigationHeaders/NavigationHeaderButtonComponent';
import color from '../../themes/color';
import {setIsGridView} from '../../features/subCategories/subCategoryDisplayModeSlice';

const SubCategoryDisplayModeButtonsComponent = (props) => {
  const dispatch = useDispatch();
  const isGridView = useSelector(state => state.subCategoryDisplayMode.isGridView);

  const onPress = () => {
    props.clearAudio();
    dispatch(setIsGridView(!isGridView))
  }

  return <View style={{flexDirection: 'row', height: '100%'}}>
            <NavigationHeaderButtonComponent onPress={() => onPress()}
              icon={<Icon name={isGridView ? 'list' : 'grid'} size={20} color={color.whiteColor} />}
            />
         </View>
}

export default SubCategoryDisplayModeButtonsComponent;