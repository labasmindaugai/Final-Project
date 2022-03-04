class SectionViewModel {
  constructor({ _id, image, title, description, section, createdAt, updatedAt }) {
    this.id = _id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.section = section;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = SectionViewModel;
