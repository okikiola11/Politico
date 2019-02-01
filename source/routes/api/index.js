import express from 'express';
import AdminController from '../../Controller/AdminController';
import PetitionController from '../../Controller/PetitionController';
import OfficeController from '../../Controller/OfficeController';

const router = express.Router();

router.get('/view', AdminController.getPoliticalParty);
router.get('/view-one/:id', AdminController.getOnePoliticalParty);
router.post('/create-political-party', AdminController.createPoliticalParty);
router.put('/edit-political-party/:id', AdminController.editPoliticalParty);
router.delete('/delete-political-party/:id', AdminController.deletePoliticalParty);

router.post('/create-office', OfficeController.create);
router.get('/get-offices/:id', OfficeController.getOffice);
router.get('/get-offices', OfficeController.getAllOffice);

router.post('/create-petition', PetitionController.createPetition);
router.get('/get-petition', PetitionController.getPetition);
router.put('/edit-petition/:id', PetitionController.editPetition);

router.delete('/delete-petition/:id', PetitionController.deletePetition);

export default router;
