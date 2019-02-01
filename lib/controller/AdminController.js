'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataStorage = require('../model/DataStorage');

var _DataStorage2 = _interopRequireDefault(_DataStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminController = function () {
  function AdminController() {
    _classCallCheck(this, AdminController);
  }

  _createClass(AdminController, null, [{
    key: 'createPoliticalParty',
    value: function createPoliticalParty(req, res) {
      var _req$body = req.body,
          govtType = _req$body.govtType,
          partyName = _req$body.partyName,
          hqAddress = _req$body.hqAddress,
          logoUrl = _req$body.logoUrl;

      var newPoliticalParty = {
        _id: _DataStorage2.default.length + 1,
        govtType: govtType,
        partyName: partyName,
        hqAddress: hqAddress,
        logoUrl: logoUrl
      };

      _DataStorage2.default.push(newPoliticalParty);
      res.status(201).json({
        status: 200,
        data: [newPoliticalParty]
      });
    }
  }, {
    key: 'editPoliticalParty',
    value: function editPoliticalParty(req, res) {
      var id = req.params.id;
      var _req$body2 = req.body,
          govtType = _req$body2.govtType,
          partyName = _req$body2.partyName,
          hqAddress = _req$body2.hqAddress,
          logoUrl = _req$body2.logoUrl;

      var filteredID = _DataStorage2.default.filter(function (data) {
        return data.id == id;
      });
      var record = filteredID[0];

      record.govtType = govtType || record.govtType;
      record.partyName = partyName || record.partyName;
      record.hqAddress = hqAddress || record.hqAddress;
      record.logoUrl = logoUrl || record.logoUrl;

      res.status(201).json({ status: 200, data: 'updated political party' });
    }

    // static deletePoliticalParty(req, res){
    //   const { id } = req.params;
    //   const { govtType, partyName, hqAddress, logoUrl } = req.body;
    //   dataStorage.forEach(data => {
    //     if(data === data._id){
    //       console.log(data);
    //     }
    //   })

  }, {
    key: 'getPoliticalParty',
    value: function getPoliticalParty(req, res) {
      return res.status(200).json({ status: 200, data: _DataStorage2.default });
    }
  }]);

  return AdminController;
}();

exports.default = AdminController;