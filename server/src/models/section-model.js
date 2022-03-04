const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const sectionSchema = new Mongoose.Schema({
  image: {
    type: 'string',
    require: 'true',
  },
  section: {
    require: 'true',
    type: 'number',
    unique: true,
  },
  description: {
    require: 'true',
    type: 'string',
  },
  title: {
    require: 'true',
    type: 'string',
  }
}, {
  timestamps: true,
});

sectionSchema.plugin(uniqueValidator);

const SectionModel = Mongoose.model('Section', sectionSchema);

module.exports = SectionModel;