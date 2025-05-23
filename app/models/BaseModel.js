import realm from '../db/schema';

class BaseModel {
  static seedData = (model, items) => {
    realm.write(() => {
      items.map(item => {
        realm.create(model, item, 'modified');
      });
    });
  }

  static getAll = (model) => {
    return realm.objects(model);
  }

  static findByUuid = (model, uuid) => {
    return realm.objects(model).filtered(`uuid = '${uuid}'`)[0];
  }

  // Params example: ('User', {parent_code: null, display: `'row_card'`}, 'AND', {type: 'ASC', column: 'order'}, 'ANY')
  static findByAttr = (model, attr, operator = '', sortAttr = {}, property = undefined) => {
    const query = !!property ? this.#findByAttrWithPropertyQuery(attr, operator, sortAttr, property)
                             : this.#findByAttrQuery(attr, operator, sortAttr);

    return realm.objects(model).filtered(query);
  }

  static create = (model, data) => {
    realm.write(() => {
      realm.create(model, data, 'modified');
    });
  }

  static update = (model, uuid, data) => {
    realm.write(() => {
      realm.create(model, Object.assign(data, { uuid: uuid }), 'modified');
    });
  }

  static deleteByUuid = (model, uuid) => {
    const item = this.findByUuid(model, uuid);
    if (!!item) {
      realm.write(() => {
        realm.delete(item);
      });
    }
  }

  static deleteAll = (model) => {
    const items = realm.objects(model);
    if (items.length == 0) return;

    realm.write(() => realm.delete(items));
  }

  static deleteItem(item) {
    if (!!item)
      realm.write(() => realm.delete(item));
  }

  static deleteByCollection(items) {
    if (items.length == 0) return;

    realm.write(() => realm.delete(items));
  }

  static containsByAttr = (model, column, value) => {
    return realm.objects(model).filtered(`${column} CONTAINS[c] ${value}`);
  }

  static findAttrNotEmpty = (model, column) => {
    return realm.objects(model).filtered(`${column} != null`);
  }

  // private method
  static #findByAttrQuery = (attr, operator = '', sortAttr = {}) => {
    const columns = Object.keys(attr);
    let query = '';
    columns.map((column, index) => {
      query += `${column} = ${attr[column]} ${index < columns.length - 1 ? `${operator} ` : ''}`;
    });

    if(!!sortAttr.type)
      query += `SORT(${sortAttr.column} ${sortAttr.type})`

    return query;
  }

  static #findByAttrWithPropertyQuery = (attr, operator = '', sortAttr = {}, property) => {
    return `${property} ${this.#findByAttrQuery(attr, operator, sortAttr)}`;
  }
}

export default BaseModel;