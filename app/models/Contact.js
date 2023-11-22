import BaseModel from './BaseModel';
import contacts from '../db/json/contacts.json';

const MODEL = "Contact";

class Contact {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedContacts(contacts));
  }

  static createCollection = (data) => {
    BaseModel.seedData(MODEL, this.#getFormattedContacts(data));
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL).sorted('display_order', false);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }

  // private methods
  static #getFormattedContacts = (contacts) => {
    let formattedContacts = [];
    contacts.map(contact => {
      formattedContacts.push({...contact, uuid: contact.id})
    });
    return formattedContacts;
  }
}

export default Contact;