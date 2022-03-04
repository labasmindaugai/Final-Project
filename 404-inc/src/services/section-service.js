/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import AuthService from './auth-service';

const SectionService = new (class SectionService {
  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Need authentication');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/sections',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async getSections() {
    try {
      const response = await this.requester.get('/');
      console.log(response);
      const result = response.data;
      return result;
    } catch (args) {
      console.log(args);
      throw new Error(args);
    }
  }

  async createSection(body) {
    const token = SectionService.validateToken();
    const {
      image, title, description, section,
    } = body;
    // const data = rest;
    const formData = new FormData();
    formData.append('files', image[0]);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('section', section);
    try {
      const response = await this.requester.post('/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data;
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
})();

export default SectionService;
