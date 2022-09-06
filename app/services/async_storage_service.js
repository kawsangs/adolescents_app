import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorageService = (() => {
  return {
    setItem,
    getItem,
  }

  function setItem(key, value) {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }
  
  async function getItem(key) {
    return JSON.parse(await AsyncStorage.getItem(key));
  }
})();

export default asyncStorageService;