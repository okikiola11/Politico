import officeStore from '../Data/officeData';

export default class Office {
  constructor(type, name) {
    this.id = null;
    this.name = name;
    this.type = type;
  }

  static save(office) {
    if (!officeStore.length) office.id = 1;
    else office.id = officeStore[officeStore.length - 1].id + 1;
    try {
      officeStore.push(office);
      return office;
    } catch (err) {
      return null;
    }
  }

  static getAllOffices() {
    try {
      return officeStore;
    } catch (err) {
      return null;
    }
  }

  static getAnOffice(id) {
    let office = {};
    for (let x = 0; x < officeStore.length; x++) {
      if (officeStore[x].id == id) {
        office = officeStore[x];
      }
    }
    return office;
  }
}
