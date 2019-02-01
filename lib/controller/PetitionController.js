'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DataPetition = require('../model/DataPetition');

var _DataPetition2 = _interopRequireDefault(_DataPetition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PetitionController = function () {
  function PetitionController() {
    _classCallCheck(this, PetitionController);
  }

  _createClass(PetitionController, null, [{
    key: 'createPetition',
    value: function createPetition(req, res) {
      var _req$body = req.body,
          createdOn = _req$body.createdOn,
          createdBy = _req$body.createdBy,
          office = _req$body.office,
          body = _req$body.body;

      var newPetition = {
        _id: _DataPetition2.default.length + 1,
        createdOn: new Date().toLocaleString(),
        createdBy: 2,
        office: office,
        body: body
      };

      _DataPetition2.default.push(newPetition);
      res.status(201).json({
        status: 200,
        data: [newPetition]
      });
    }
  }, {
    key: 'getPetition',
    value: function getPetition(req, res) {
      return res.status(200).json({ status: 200, data: _DataPetition2.default });
    }
  }, {
    key: 'editPetition',
    value: function editPetition(req, res) {
      var id = req.params.id;
      //console.log(id)

      var editValue = _DataPetition2.default.filter(function (data, index) {
        if (id === data._id) {
          var editIndex = index;
          var newUpdatedPetition = {
            office: req.body.office,
            body: req.body.body
          };
          console.log(newUpdatedPetition);
        }
      });
    }
  }, {
    key: 'deletePetition',
    value: function deletePetition(req, res) {
      var id = req.params.id;

      var newValue = _DataPetition2.default.filter(function (data, index) {
        if (id === data._id) {
          var removeIndex = index;
          _DataPetition2.default.splice(removeIndex, 1);
        }
      });

      console.log(newValue);

      //const { office, body } = req.body;
      // petitionData.forEach(data => {
      //   // if (id === data._id) {
      //   // }
      // });
    }
  }]);

  return PetitionController;
}();

exports.default = PetitionController;