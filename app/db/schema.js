'use strict';

import Realm from 'realm';
import schemaV1 from './schemas/schemaV1';
import schemaV2 from './schemas/schemaV2';
import schemaV3 from './schemas/schemaV3';
import schemaV4 from './schemas/schemaV4';
import schemaV5 from './schemas/schemaV5';
import schemaV6 from './schemas/schemaV6';
import schemaV7 from './schemas/schemaV7';
import schemaV8 from './schemas/schemaV8';
import schemaV9 from './schemas/schemaV9';
import schemaV10 from './schemas/schemaV10';
import schemaV11 from './schemas/schemaV11';
import schemaV12 from './schemas/schemaV12';
import schemaV13 from './schemas/schemaV13';
import schemaV14 from './schemas/schemaV14';
import schemaV15 from './schemas/schemaV15';
import schemaV16 from './schemas/schemaV16';

const schemas = [
  schemaV1,
  schemaV2,
  schemaV3,
  schemaV4,
  schemaV5,
  schemaV6,
  schemaV7,
  schemaV8,
  schemaV9,
  schemaV10,
  schemaV11,
  schemaV12,
  schemaV13,
  schemaV14,
  schemaV15,
  schemaV16,
];

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
if (nextSchemaIndex !== -1) {
  while (nextSchemaIndex < schemas.length) {
    const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
    migratedRealm.close();
  }
}

export default new Realm(schemas[schemas.length - 1]);