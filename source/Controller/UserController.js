import UserModel from '../model/userModel';

export default class User {
  //   Post : Create User
  static create(req, res) {
    // To do : validation First
    const { firstname, lastname, othername, email, phoneNumber, passportUrl, password } = req.body;

    const user = new UserModel(
      firstname,
      lastname,
      othername,
      email,
      phoneNumber,
      passportUrl,
      password
    );

    const data = UserModel.Save(user);
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

  // Get : To Get User
  static getUser(req, res) {
    const { id } = req.params;
    const user = UserModel.findById(id);
    if (user) {
      const { firstname, lastname, othername, email, phoneNumber, passportUrl } = user;
      return res.status(200).json({
        status: 200,
        data: [
          {
            firstname,
            lastname,
            othername,
            email,
            phoneNumber,
            passportUrl
          }
        ]
      });
    }
    return res.status(404).json({
      status: 404,
      message: 'The requested user does not exist'
    });
  }

  static editUserPassword(req, res) {
    const { id } = req.params;
    const { newPassword } = req.body;
    const updated = UserModel.updatePassword(id, newPassword);

    if (updated) {
      return res.status(200).json({
        status: 200,
        data: []
      });
    }
    return res.status(500).json({
      status: 500,
      message: 'Your updated was unsuccessful due to some issue with the server'
    });
  }
}
