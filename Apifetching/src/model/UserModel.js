class UserModel {
  constructor({ id, name, email, gender, status } = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.status = status;
  }
}

export default UserModel;
