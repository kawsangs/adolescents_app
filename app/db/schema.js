'use strict';

import Realm from 'realm';
import schemaV1 from './schemas/schemaV1';

const schemas = [
  schemaV1,
];

let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
if (nextSchemaIndex !== -1) {
  while (nextSchemaIndex < schemas.length) {
    const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
    migratedRealm.close();
  }
}

export default new Realm(schemas[schemas.length - 1]);



// let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
// if (nextSchemaIndex !== -1) {
//   while (nextSchemaIndex < schemas.length) {
//     const migraitonRealm = await Realm.open({
//       schema: schemas[nextSchemaIndex++],
//       schemaVersion: nextSchemaIndex++
//     });
//     migraitonRealm.close();
//   }
// }

// const realmSchema = await Realm.open({
//   schema: schemas[schemas.length - 1],
//   schemaVersion: schemas.length
// });

// export default realmSchema;