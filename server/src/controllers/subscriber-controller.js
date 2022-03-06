const SubscriberModel = require('../models/subscriber-model');
const SubscriberViewModel = require('../view-models/subscriber-view-model');

const getSubscribers = async (req, res) => {
  const subscriber = await SubscriberModel.paginate({},{page: req.query.page, limit: req.query.limit, sort: {createdAt: req.query.order}});
  const subscribers = subscriber.docs.map(subscriberDoc => new SubscriberViewModel(subscriberDoc));
  const subscriberCount = subscriber.total;
  res.status(200).json({ subscribers, subscriberCount });
  
};

const createSubscribers = async (req, res) => {
  const { email } = req.body;
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
