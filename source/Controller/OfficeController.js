import OfficeModel from '../model/officeModel';

export default class Office {
  //   Post : Create User
  static create(req, res) {
    // To do : validation First
    const { type, name } = req.body;
    const office = new OfficeModel(type, name);
    const data = OfficeModel.save(office);
    if (data) {
      return res.status(201).json({
        status: 201,
        data: [data]
      });
    }

    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying to save your data'
    });
  }

  // Get : To Get An office
  static getOffice(req, res) {
    const { id } = req.params;
    const office = OfficeModel.getAnOffice(id);
    if (office) {
      const { _id, type, name } = office;
      return res.status(200).json({
        status: 200,
        data: [{ _id, type, name }]
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'The requested user does not exist'
    });
  }

  static getAllOffice(req, res) {
    const offices = OfficeModel.getAllOffices();
    if (offices) {
      return res.status(200).json({
        status: 200,
        data: offices
      });
    }
    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying retrieve data'
    });
  }
}
