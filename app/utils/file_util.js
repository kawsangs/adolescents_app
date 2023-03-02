const fileUtil = (() => {
  return {
    getFilenameFromUrl
  }

  function getFilenameFromUrl(url) {
    const splitPaths = url.split('/');
    return splitPaths[splitPaths.length - 1]
  }
})()

export default fileUtil;