import axios from 'axios';

const API_URL = 'https://xbx-server.vercel.app';

class ProductsService {
  async addProduct(formData) {
    try {
      const response = await axios.post(`${API_URL}/admin/addProduct`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      console.error('ProductsService.addProduct Error:', error);
      throw error;
    }
  }
}

export default new ProductsService();
