import { KM } from '../constants/main_constant';

export const environment = {
  domain: 'http://192.168.1.138:3000',
  type: 'development',
  showIntroSlider: true,
  defaultLanguage: KM,
  // sentryDSN: 'https://d252675dfeb049a0adf1ef7a4abe1b86@o952154.ingest.sentry.io/5901440',
  sentryDSN: '',
  encryptionKey: '',        // Use 256 bytes key
  apiKey: 'c7bfd9081b2e8d10a7a09c6cf32d141e',
  isUserBasedAuth: false,
  apiVersion: 'v1',
  isUserBasedApi: false,
  hasPrivacyConfirmation: true
};