import {Linking} from 'react-native';

const youtubeHelper = (() => {
  return {
    getThumbnail,
    openVideo,
  }

  function getThumbnail(url) {
    return `https://img.youtube.com/vi/${getVideoId(url)}/hqdefault.jpg`;
  }

  function openVideo(url) {
    const videoId = getVideoId(url);

    Linking.canOpenURL('vnd.youtube://shorts/' + videoId).then(supported => {
      if (supported)
        return Linking.openURL('vnd.youtube://shorts/' + videoId);
      else
        return Linking.openURL('https://www.youtube.com/shorts/' + videoId);
    });
  }

  // private method
  function getVideoId(url) {
    const result = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    const videoIdWithParams = result[2];

    if (videoIdWithParams !== undefined) {
      const cleanVideoId = videoIdWithParams.split(/[^0-9a-z_-]/i)[0];
      return cleanVideoId;
    }

    return null;
  };
})();

export default youtubeHelper;