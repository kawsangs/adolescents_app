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

  static getMentalSupportContacts = () => {
    return BaseModel.findByAttr(MODEL, {contact_directory_name: "'សេវាគាំទ្រផ្លូវចិត្ត'"}, '', {});
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }

  // private methods
  static #getFormattedContacts = (contacts) => {
    let formattedContacts = [];
    contacts.map(contact => {
      formattedContacts.push({...contact, uuid: contact.id, contact_directory_name: !!contact.contact_directory ? contact.contact_directory.name : null})
    });
    return formattedContacts;
  }
}

export default Contact;