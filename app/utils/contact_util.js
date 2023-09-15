const contactUtil = (() => {
  return {
    getIntent,
  }

  function getIntent(type, value) {
    const intents = {
      hotline: `tel:${value}`,
      sms: `sms:${value}`
    }
    return !!intents[type] ? intents[type] : value;
  }
})();

export default contactUtil;