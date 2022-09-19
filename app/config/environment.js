import { KM } from '../constants/main_constant';

export const environment = {
  domain: 'http://192.168.1.138:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: '',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
};