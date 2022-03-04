class UserViewModel {
  constructor({ _id, email, role, createdAt, updatedAt }) {
    this.id = _id;
    this.email = email;
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = UserViewModel;
