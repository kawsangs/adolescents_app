'use strict';

import Realm from 'realm';
import facilities from '../../json/facilities';

class Fascility extends Realm.Object {
  get imageSource() {
    if (!this.image_url) {
      const faci = facilities.filter(category => category.uuid == this.uuid)[0];
      return (!!faci && !!faci.image) ? faci.image : null;
    }

    return { uri: `file://${this.image_url}` };
  }

  get audioSource() {
    if (!this.audio_url) {
      const faci = facilities.filter(category => category.uuid == this.uuid)[0];
      return (!!faci && !!faci.audio) ? faci.audio : null;
    }

    return { uri: `file://${this.audio_url}` };
  }
}

Fascility.schema = {
  name: 'Facility',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    id: 'string?',
    name: 'string',
    description: 'string?',
    tels: 'string[]?',
    address: 'string?',
    emails: 'string[]?',
    websites: 'string[]?',
    facebook_pages: 'string[]?',
    telegram_username: 'string?',
    latitude: 'float?',
    longitude: 'float?',
    facility_batch_id: 'string?',
    audio_url: 'string?',
    image_url: 'string?',
    audio: 'int?',
    image: 'int?',
  }
}

export default Fascility;