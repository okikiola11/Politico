import dataStorage from '../Data/DataStorage';
import adminModel from '../model/adminModel';

export default class AdminController {
  static createPoliticalParty(req, res) {
    const { govtType, partyName, hqAddress, logoUrl } = req.body;
    const newPoliticalParty = {
      id: dataStorage[dataStorage.length - 1].id + 1,
      govtType,
      partyName,
      hqAddress,
      logoUrl
    };

    const data = dataStorage.push(newPoliticalParty);
    if (data) {
      return res.status(200).json({
        status: 200,
        data: [newPoliticalParty]
      });
    }

    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying to save your data'
    });
  }

  static editPoliticalParty(req, res) {
    const error = {};

    const { id } = req.params;
    const { govtType, partyName, hqAddress, logoUrl } = req.body;
    const record = adminModel.findById(id);

    if (record === undefined || record === null) {
      error.mgs = 'Political Party id not Found';
      return res.status(404).json({ status: 404, error });
    }

    record.govtType = govtType || record.govtType;
    record.partyName = partyName || record.partyName;
    record.hqAddress = hqAddress || record.hqAddress;
    record.logoUrl = logoUrl || record.logoUrl;

    return res.status(200).json({ status: 200, data: 'updated political party' });
  }

  static deletePoliticalParty(req, res) {
    const error = {};
    const { id } = req.params;
    const removedIndex = dataStorage.findIndex(data => data.id === +id);
    if (removedIndex === -1) {
      error.mgs = 'Ooops! no record with such Id';
      return res.status(404).json({ status: 404, error });
    }

    dataStorage.splice(removedIndex, 1);
    return res.status(200).json({
      status: 200,
      data: [{ id, message: 'Political party record deleted successfully' }]
    });
  }

  static getPoliticalParty(req, res) {
    const error = {};
    if (dataStorage.length > 0) {
      return res.status(200).json({ status: 200, data: adminModel.getAllrecord() });
    }
    error.mgs = 'No record Found';
    return res.status(404).json({ status: 404, error });
  }

  static getOnePoliticalParty(req, res) {
    const error = {};
    const { id } = req.params;
    const record = adminModel.findById(id);

    if (record) {
      res.status(404).json({ status: 200, data: record });
    }

    error.mgs = 'record id not found';
    res.status(200).json({ status: 404, error });
  }
}
