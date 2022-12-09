import BaseModel from './BaseModel';
import realm from '../db/schema';
import uuidv4 from '../utils/uuidv4_util';
import Moment from 'moment';

const MODEL = "Notification";

const notifications = [
  {
    uuid: "A7B2X",
    title: '0.1. សូមអភ័យទោសចំពោះការរអាក់រអួល 0.1',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-06T14:26:27.316Z',
    read: false
  },
  {
    uuid: "A7B2Xc",
    title: '0.2. សូមអភ័យទោសចំពោះការរអាក់រអួល 0.2',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-06T15:26:27.316Z',
    read: false
  },
  {
    uuid: "V7B2Xc",
    title: '0.3. សូមអភ័យទោសចំពោះការរអាក់រអួល 0.3',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-06T15:30:27.316Z',
    read: false
  },
  {
    uuid: "V7B2Sc",
    title: '0.4. សូមអភ័យទោសចំពោះការរអាក់រអួល 0.4',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-06T16:30:27.316Z',
    read: false
  },
  {
    uuid: "AB12",
    title: '1. កម្មវិធីកំណែទំរង់ថ្មី ១.១',
    content: 'កម្មវិធីត្រូវបានធ្វើកំណែទំរង់ទៅលើប្រព័ន្ធប្រតិបត្តិការសំខាន់ៗមួយចំនួន',
    createdAt: '2022-12-07T09:26:27.316Z',
    read: false
  },
  {
    uuid: "A1B23",
    title: '2. បន្ថែមព័តិមានអំពីសុខភាពផ្លូវភេទ',
    content: 'ឥឡូវនេះអ្នកអាចស្វែងយល់បន្ថែមទៅលើបញ្ហាសុខភាពបុរស',
    createdAt: '2022-12-07T09:29:27.316Z',
    read: false
  },
  {
    uuid: "A1B2C",
    title: '3. សូមអភ័យទោសចំពោះការរអាក់រអួល',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-08T09:26:27.316Z',
    read: false
  },
  {
    uuid: "A1B2z",
    title: '4. កម្មវិធីកំណែទំរង់ថ្មី ១.២',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-09T09:26:27.316Z',
    read: false
  },
  {
    uuid: "A1B1C",
    title: '5. សូមអភ័យទោសចំពោះការរអាក់រអួល',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-10T09:30:27.316Z',
    read: false
  },
  {
    uuid: "A1B2v",
    title: '6. កម្មវិធីកំណែទំរង់ថ្មី ១.៣',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-10T10:26:27.316Z',
    read: false
  },
  {
    uuid: "A151C6",
    title: '7. សូមអភ័យទោសចំពោះការរអាក់រអួល ២',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-10T12:26:27.316Z',
    read: false
  },
  {
    uuid: "A1B83",
    title: '8. បន្ថែមព័តិមានអំពីសុខភាពផ្លូវភេទ 1',
    content: 'ឥឡូវនេះអ្នកអាចស្វែងយល់បន្ថែមទៅលើបញ្ហាសុខភាពបុរស',
    createdAt: '2022-12-10T13:26:27.316Z',
    read: false
  },
  {
    uuid: "A7B2C",
    title: '9. សូមអភ័យទោសចំពោះការរអាក់រអួល 3',
    content: 'ដោយមានបញ្ហាមួយចំនួនទាក់ទងទៅនឹងម៉ាស៊ីនធំរបស់ប្រព័ន្ធ ជាហេត្តបណ្តាលអោយមានការរអាក់រអួលមុននេះបន្តិច សូមអធ្យាស្រ័យ',
    createdAt: '2022-12-10T14:26:27.316Z',
    read: false
  },
]


class Notification {
  static seedData = () => {
    BaseModel.seedData(MODEL, notifications)
  }


  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('createdAt', true);
  }

  static getUnreads = () => {
    return Notification.getAll().filtered('read = false');
  }

  static findById = (id) => {
    return realm.objects(MODEL).filtered(`id = '${id}'`)[0];
  }

  static create = (params) => {
    BaseModel.create(MODEL, { ...params, uuid: uuidv4(), createdAt: Moment().toDate() });
  }

  static deleteAll = () => {
    realm.write(() => {
      realm.delete(Notification.getAll());
    });
  }

  static setAllAsRead = () => {
    realm.write(() => {
      const notifications = Notification.getUnreads();

      for (const notification of notifications) {
        notification.read = true
      }
    });
  }

  static firstRecord = () => {
    const notifications = this.getAll();
    return notifications.length > 0 ? notifications[notifications.length - 1] : null;
  }
}

export default Notification;