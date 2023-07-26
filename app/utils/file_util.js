const fileUtil = (() => {
  return {
    getFilenameFromUrl
  }

  function getFilenameFromUrl(url) {
    if (!url) return '';
    const urlWithoutQueryString = url.split('?')[0];
    const splitedPaths = urlWithoutQueryString.split('/');
    return splitedPaths[splitedPaths.length - 1];
  }
})()

export default fileUtil;