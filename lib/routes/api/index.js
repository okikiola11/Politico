'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AdminController = require('../../controller/AdminController');

var _AdminController2 = _interopRequireDefault(_AdminController);

var _PetitionController = require('../../controller/PetitionController');

var _PetitionController2 = _interopRequireDefault(_PetitionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/view', _AdminController2.default.getPoliticalParty);

router.post('/create-political-party', _AdminController2.default.createPoliticalParty);

router.put('/edit-political-party/:id', _AdminController2.default.editPoliticalParty);

router.post('/create-petition', _PetitionController2.default.createPetition);

router.get('/get-petition', _PetitionController2.default.getPetition);

router.put('/edit-petition/:id', _PetitionController2.default.editPetition);

router.delete('/delete-petition/:id', _PetitionController2.default.deletePetition);

exports.default = router;