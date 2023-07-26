import { KM } from '../constants/main_constant';

export const environment = {
  domain: 'http://192.168.1.138:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  // apiKey: 'c7bfd9081b2e8d10a7a09c6cf32d141e',
  apiKey: '6650308c078ed719a6c4ded9dd092fa0',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true
};