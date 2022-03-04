import axios from 'axios';
import AuthService from './auth-service';

const SectionService = new (class SectionService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Can not get user images without authentication');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/sections',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async createSection(body) {
    const token = SectionService.validateToken();
    try {
      const response = await this.requester.post('/create', body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data;
      return result;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
})();

export default SectionService;
