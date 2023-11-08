import { KM } from '../constants/main_constant';

export const environment = {
  serverUrl: 'http://192.168.1.140:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: '6650308c078ed719a6c4ded9dd092fa0',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true
};