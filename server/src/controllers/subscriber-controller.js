const SubscriberModel = require('../models/subscriber-model');
const SubscriberViewModel = require('../view-models/subscriber-view-model');

const getSubscribers = async (req, res) => {
  // console.log(req.query)
  const subscriber = await SubscriberModel.paginate({},{page: req.query.page, limit: req.query.limit, sort: {createdAt: req.query.order}});
  // const subscriberCount = await SubscriberModel.find().count();
  const subscribers = subscriber.docs.map(subscriberDoc => new SubscriberViewModel(subscriberDoc));
  const subscriberCount = subscriber.total;
  // const subscribers =  new SubscriberViewModel(subscriberDocs);
  res.status(200).json({ subscribers, subscriberCount });
  
};

const createSubscribers = async (req, res) => {
  // res.status(200);
  const { email } = req.body;
  // console.log(req.body);
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
