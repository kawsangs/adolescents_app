'use strict';

const FacilitySchema = {
  name: 'Facility',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    addresses: 'string?',
    tels: {type:'list', objectType: 'mixed'},
    emails: {type:'list', objectType: 'mixed'},
    websites: {type:'list', objectType: 'mixed'},
    facebook_pages: {type:'list', objectType: 'mixed'},
    telegram_username: 'string?',
    description: 'string?',
    latitude: 'float?',
    longitude: 'float?',
    services: {type:'list', objectType: 'mixed'},
    service_uuids: {type:'list', objectType: 'mixed'},
    working_days: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    audio: 'string?',
    images: {type:'list', objectType: 'mixed'},
    province_id: 'string?',
    district_id: 'string?',
    tags: {type:'list', objectType: 'mixed'},
    logo: 'string?'
  }
}

export default FacilitySchema;