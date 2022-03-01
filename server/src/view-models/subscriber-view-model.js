class SubscriberViewModel {
  constructor({ _id, email, createdAt }) {
    this.id = _id;
    this.email = email;
    this.createdAt = createdAt;
  }
}

module.exports = SubscriberViewModel;
