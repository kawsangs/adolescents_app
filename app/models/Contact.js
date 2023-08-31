import BaseModel from './BaseModel';
import contacts from '../db/json/contacts.json';

const MODEL = "Contact";

class Contact {
  static seedData = () => {
    BaseModel.seedData(MODEL, this.#getFormattedContacts(contacts));
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  // private method
  static #getFormattedContacts = (contacts) => {
    let formattedContacts = [];
    contacts.map(contact => {
      formattedContacts.push({...contact, contact_directory_id: contact.contact_directory.id})
    });
    return formattedContacts;
  }
}

export default Contact;