const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new Mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: isEmail,
      message: 'Incorrect email format',
    },
    unique: true,
  },
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const SubscriberModel = Mongoose.model('Subscribers', userSchema);

module.exports = SubscriberModel;
