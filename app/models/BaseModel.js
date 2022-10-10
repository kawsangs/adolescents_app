import realm from '../db/schema';

class BaseModel {
  constructor(model) {
    this.model = model;
  }

  seedData = (items) => {
    realm.write(() => {
      items.map(item => {
        if (!this.findByUuid(item.uuid))
          realm.create(this.model, item);
      });
    });
  }

  getAll = () => {
    return realm.objects(this.model);
  }

  findByUuid = (uuid) => {
    return realm.objects(this.model).filtered(`uuid = '${uuid}'`)[0];
  }

  // Params example: ({parent_code: null, display: `'row_card'`}, 'AND', {type: 'ASC', column: 'order'})
  findByAttr = (attr, operator = '', sortAttr = {}) => {
    const columns = Object.keys(attr);
    let query = '';
    columns.map((column, index) => {
      query += `${column} = ${attr[column]} ${index < columns.length - 1 ? `${operator} ` : ''}`;
    });

    if(!!sortAttr.type)
      query += `SORT(${sortAttr.column} ${sortAttr.type})`

    return realm.objects(this.model).filtered(query);
  }

  create = (data) => {
    realm.write(() => {
      realm.create(this.model, data);
    });
  }

  update = (uuid, data) => {
    realm.write(() => {
      realm.create(this.model, Object.assign(data, { uuid: uuid }), 'modified');
    });
  }

  deleteByUuid = (uuid) => {
    const item = this.findByUuid(uuid);
    if (!!item) {
      realm.write(() => {
        realm.delete(item);
      });
    }
  }
}

export default BaseModel;