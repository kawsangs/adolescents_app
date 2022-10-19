import React, {useState} from 'react';
import {Image} from 'react-native';
import EmptyMediaComponent from './EmptyMediaComponent';

const ImageComponent = (props) => {
  const [isError, setIsError] = useState(!props.source)
  const renderImage = () => {
    return <Image source={props.source} resizeMode={props.resizeMode}
            onError={() => setIsError(true)}
            style={props.imageStyle}
         />
  }

  if (isError)
    return <EmptyMediaComponent isImage={true} style={props.emptyStyle}/>

  return renderImage();
}

export default ImageComponent;