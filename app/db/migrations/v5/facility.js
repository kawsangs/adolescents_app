'use strict';

const FacilitySchema = {
  name: 'Facility',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    name: 'string',
    addresses: 'string?',
    tels: {type: 'string[]', optional: true},
    emails: {type: 'string[]', optional: true},
    websites: {type: 'string[]', optional: true},
    facebook_pages: {type: 'string[]', optional: true},
    telegram_username: 'string?',
    description: 'string?',
    latitude: 'float?',
    longitude: 'float?',
    services: {type: 'string[]', optional: true},
    service_uuids: {type: 'string[]', optional: true},
    working_days: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    audio: 'string?',
    images: {type: 'string[]', optional: true},
    province_id: 'string?',
    district_id: 'string?',
    tags: {type: 'string[]', optional: true},
    logo: 'string?',
    local_logo: 'string?'
  }
}

export default FacilitySchema;