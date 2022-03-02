const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');
const mongoosePaginate = require('mongoose-paginate');


const subscriberSchema = new Mongoose.Schema({
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

subscriberSchema.plugin(mongoosePaginate);
subscriberSchema.plugin(uniqueValidator);

const SubscriberModel = Mongoose.model('Subscribers', subscriberSchema);

module.exports = SubscriberModel;
