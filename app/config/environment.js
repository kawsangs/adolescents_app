import { KM } from '../constants/main_constant';

export const environment = {
  // serverUrl: 'https://youthhealth-stg.ilabsea.org',
  serverUrl: 'http://192.168.1.111:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: 'b33befe315730b4eed94ada294802734',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true,
  accountDeletionDuration: 30  // days
};