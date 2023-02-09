// import React, {useState} from 'react';
// import {Image} from 'react-native';

// import Category from '../../models/Category';
// import CardListComponent from '../shared/CardListComponent';

// const LeafCategoryCardListComponent = (props) => {
//   const [playingUuid, setPlayingUuid] = useState(null);
//   const categories = Category.getSubCategories(props.category.uuid);

//   return (
//     <React.Fragment>
//       <Image source={props.category.imageSource} resizeMode='contain' style={{width: '100%', height: 200}} />
//       <CardListComponent items={categories} playingUuid={playingUuid} updatePlayingUuid={(id) => setPlayingUuid(id)} />
//     </React.Fragment>
//   )
// }

// export default LeafCategoryCardListComponent;