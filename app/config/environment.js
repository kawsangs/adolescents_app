import { KM } from '../constants/main_constant';

export const environment = {
  serverUrl: 'https://youthhealth-stg.ilabsea.org',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: '',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true,
  accountDeletionDuration: 30  // days
};