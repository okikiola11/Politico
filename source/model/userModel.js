import bcrypt from 'bcryptjs';
import userStore from '../Data/userData';

export default class User {
  constructor(firstname, lastname, othername, email, phoneNumber, passportUrl, password) {
    this.id = null;
    this.firstname = firstname;
    this.lastname = lastname;
    this.othername = othername;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.passportUrl = passportUrl;
    this.isAdmin = false;
    this.password = password;
  }

  static Save(user) {
    if (!userStore.length) user.id = 1;
    else user.id = userStore[userStore.length - 1].id + 1;
    try {
      const hash = bcrypt.hashSync(user.password, 10);
      user.password = hash;
      userStore.push(user);
      return {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname
      };
    } catch (err) {
      return null;
    }
  }

  static findById(id) {
    if (typeof id === 'number') {
      let user = {};
      for (let x = 0; x < userStore.length; x++) {
        if (userStore[x].id == id) {
          user = userStore[x];
          return user;
        }
      }
    }
    return null;
  }

  static findByEmail(email) {
    if (typeof id === 'string') {
      for (let x = 0; x < userStore.length; x++) {
        if (userStore[x].email === email) return userStore[x];
      }
    }
    return null;
  }

  static findByPassword(email) {
    const user = User.findByEmail(email);
    const hash = bcrypt.hashSync(user.password, 10);
    if (user) {
      if (bcrypt.compareSync('somePassword', hash)) {
        return user;
      }
      return null;
    }
    return null;
  }

  static updatePassword(id, newPassword) {
    const user = User.findById(id);
    if (user) {
      const index = userStore.indexOf(user);
      try {
        const hash = bcrypt.hashSync(newPassword, 10);
        user.password = hash;

        userStore[index] = user;
        return true;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}
