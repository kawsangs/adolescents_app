'use strict';

import Realm from 'realm';
import facilities from '../../json/facilities';
import imageSources from '../../../constants/image_source_constant';

class Facility extends Realm.Object {
  get galleries() {
    let images = [];
    this.images.map(image => {
      images.push(imageSources[image]);
    });
    return images;
  }

  get audioSource() {
    if (!this.audio_url) {
      const faci = facilities.filter(facility => facility.uuid == this.uuid)[0];
      return (!!faci && !!faci.audio) ? faci.audio : null;
    }

    return { uri: `file://${this.audio_url}` };
  }
}

Facility.schema = {
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
  }
}

export default Facility;
