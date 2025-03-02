import { KM } from '../constants/main_constant';

export const environment = {
  serverUrl: 'https://youthhealth-stg.ilabsea.org',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  // apiKey: '6650308c078ed719a6c4ded9dd092fa0',
  apiKey: 'b33befe315730b4eed94ada294802734',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true,
  accountDeletionDuration: 30  // days
};