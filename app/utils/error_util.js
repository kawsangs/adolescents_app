import {
  ERROR_AUTHENTICATION, ERROR_UNAUTHORIZED, ERROR_NOT_FOUND,
  ERROR_UNPROCESSABLE, ERROR_NETWORK_AUTHENTICATION, ERROR_SOMETHING_WENT_WRONG
} from '../constants/error_constant';

const errorUtil = (() => {
  return {
    getApiErrorObject,
    getErrorTypeByStatus,
    getErrorMessage,
  }

  function getApiErrorObject(error) {
    let errorObject = {
      status: !!error.response ? error.response.status : 511,
      message: error.toJSON().message,
    };

    return errorObject;
  }

  function getErrorTypeByStatus(errorStatus) {
    const errorDictionary = {
      401: ERROR_AUTHENTICATION,
      403: ERROR_UNAUTHORIZED,
      404: ERROR_NOT_FOUND,
      422: ERROR_UNPROCESSABLE,
      511: ERROR_NETWORK_AUTHENTICATION,
      'default': ERROR_SOMETHING_WENT_WRONG
    }

    return errorDictionary[errorStatus] || errorDictionary['default'];
  }

  function getErrorMessage(type, translation) {
    const errors = {
      'ERROR_AUTHENTICATION': {
        title: translation('loginRequired'),
        description: translation('pleaseLoginWithYourAccount')
      },
      'ERROR_UNAUTHORIZED': {
        title: translation('loginRequired'),
        description: translation('pleaseLoginWithYourAccount')
      },
      'default': {
        title: translation('somethingWentWrong'),
        description: translation('somethingWentWrongPleaseTryAgain')
      }
    };

    return errors[type] || errors.default;
  }
})();

export default errorUtil;