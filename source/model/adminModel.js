import dataStorage from '../Data/DataStorage';

export default class adminModel {
  static getAllrecord() {
    try {
      return dataStorage;
    } catch (err) {
      return err;
    }
  }

  static findById(id) {
    return dataStorage.find(data => data.id === +id);
  }
}
