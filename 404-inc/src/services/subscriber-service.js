import axios from 'axios';

const SubscriberService = new (class SubscriberService {
  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/subscriber',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createSubscriber(formData) {
    try {
      const response = await this.requester.post('/subscribe', formData);
      const result = response.data;
      return result;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  async getSubscribers() {
    try {
      const { data } = await this.requester.get('/');
      return data;
    } catch (error) {
      return error.message;
    }
  }
})();

export default SubscriberService;
