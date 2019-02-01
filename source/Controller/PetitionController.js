import petitionData from '../Data/DataPetition';

export default class PetitionController {
  static createPetition(req, res) {
    const { createdOn, createdBy, office, body } = req.body;
    const newPetition = {
      _id: petitionData.length + 1,
      createdOn: new Date().toLocaleString(),
      createdBy: 2,
      office,
      body
    };

    petitionData.push(newPetition);
    res.status(201).json({
      status: 200,
      data: [newPetition]
    });
  }

  static getPetition(req, res) {
    return res.status(200).json({ status: 200, data: petitionData });
  }

  static editPetition(req, res) {
    const { id } = req.params;
    //console.log(id)
    const editValue = petitionData.filter((data, index) => {
      if (id === data._id) {
        const editIndex = index;
        const newUpdatedPetition = {
          office: req.body.office,
          body: req.body.body
        };
        console.log(newUpdatedPetition);
      }
    });
  }

  static deletePetition(req, res) {
    const { id } = req.params;
    const newValue = petitionData.filter((data, index) => {
      if (id === data._id) {
        const removeIndex = index;
        petitionData.splice(removeIndex, 1);
      }
    });

    console.log(newValue);

    //const { office, body } = req.body;
    // petitionData.forEach(data => {
    //   // if (id === data._id) {
    //   // }
    // });
  }
}
