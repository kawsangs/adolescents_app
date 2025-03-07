import { KM } from '../constants/main_constant';

export const environment = {
  // serverUrl: 'https://youthhealth-stg.ilabsea.org',
  serverUrl: 'http://192.168.1.104:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: 'f739197aa57076df651c6e25afc400bb',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true,
  accountDeletionDuration: 30  // days
};