import SurveyOption from '../models/SurveyOption';
import DownloadedFile from '../models/DownloadedFile';
import fileService from './file_service';
import fileUtil from '../utils/file_util';

const surveyOptionService = (() => {
  return {
    save
  }

  function save(options) {
    SurveyOption.upsertCollection(options);
    _downloadImage(0, options);
  }

  // private method
  function _downloadImage(index, options) {
    if (index == options.length)
      return;

    const option = options[index];
    if (!!option.image_url && !DownloadedFile.findByName(fileUtil.getFilenameFromUrl(option.image_url))) {
      fileService.download(option.image_url, (fileUrl, isNewFile) => {
        !!isNewFile && DownloadedFile.create({name: fileUtil.getFilenameFromUrl(option.image_url), type: 'image'})
        _downloadImage(index + 1, options);
      }, () => {
        _downloadImage(index + 1, options);
      })
    }
  }
})();

export default surveyOptionService;