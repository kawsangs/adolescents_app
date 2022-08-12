const apiService = (() => {
  return {
    handleApiResponse,
  }

  function handleApiResponse(response, successCallback, failureCallback) {
    if (response.error != undefined) {
      !!failureCallback && failureCallback(response.error);
    }
    else
      !!successCallback && successCallback(response.data);
  }
})();

export default apiService;