const modelHelper = (() => {
  return {
    getItemUuids
  }

  function getItemUuids(items) {
    const uuids = [];
    items.map(item => uuids.push(item.id));
    return uuids;
  }
})();

export default modelHelper;