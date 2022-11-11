const categoryHelper = (() => {
  return {
    isMentalSupport,
    isClinicService,
    isVideo,
  }

  function isMentalSupport(category) {
    return category.code.includes("mental_support");
  }

  function isClinicService(category) {
    return category.code.includes("clinic_and_examination_service");
  }

  function isVideo(category) {
    return category.code.includes("entertainment");
  }
})()

export default categoryHelper;