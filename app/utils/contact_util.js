const contactUtil = (() => {
  return {
    getChannel,
    getIntent,
  }

  function getChannel(type) {
    return type.split('::')[1].toLowerCase();
  }

  function getIntent(type, value) {
    const channel = getChannel(type);
    const intents = {
      hotline: `tel:${value}`,
      sms: `sms:${value}`
    }
    return !!intents[channel] ? intents[channel] : value;
  }
})();

export default contactUtil;