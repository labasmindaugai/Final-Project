const SubscriberModel = require('../models/subscriber-model');
const SubscriberViewModel = require('../view-models/subscriber-view-model');


const getSubscribers = async (_, res) => {
  const subscriberDocs = await SubscriberModel.find();
  const subscriberCount = await SubscriberModel.find().count();
  const subscribers = subscriberDocs.map(subscriberDoc => new SubscriberViewModel(subscriberDoc));
  res.status(200).json({ subscribers, subscriberCount });
};

const createSubscribers = async (req, res) => {
  // res.status(200);
  const { email } = req.body;
  console.log(req.body);
  try {
    const subscriberDoc = await SubscriberModel.create({
      email,
    });

    const subscriber = new SubscriberViewModel(subscriberDoc);
    res.status(200).json({
      subscriber,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};


module.exports = {
  getSubscribers,
  createSubscribers,
};
