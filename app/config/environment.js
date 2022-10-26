import { KM } from '../constants/main_constant';

export const environment = {
  domain: 'http://192.168.1.138:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  // apiKey: 'c7bfd9081b2e8d10a7a09c6cf32d141e',
  apiKey: 'cfc88f68fd4562629d312c838337af39',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
};