import { ENDPOINTS } from '../constants';
import axios from 'axios';

export const askAI = async (query: string): Promise<string> => {
  try {
    const response = await axios.post(ENDPOINTS.getProducts, { message: query });
    return response.data;
  } catch (error) {
    throw error;
  }
};
