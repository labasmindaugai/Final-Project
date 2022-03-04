class SectionViewModel {
  constructor({ _id, image, title, description, section, createdAt, updatedAt }) {
    const { SERVER_PORT, SERVER_DOMAIN, IMG_FOLDER_NAME } = process.env;
    this.id = _id;
    this.image = `${SERVER_DOMAIN}:${SERVER_PORT}/${IMG_FOLDER_NAME}/${image}`;
    this.title = title;
    this.description = description;
    this.section = section;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = SectionViewModel;
