import axios from 'axios';
import { Image } from '../components/App/App.types';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'NKLno9T0HMTAIYNPgosxO38KtoQ2PhTH_IVMs4zxOac';

interface UnsplashResponse {
  results: Image[];
  total: number;
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 9,
      orientation: 'landscape',
      client_id: ACCESS_KEY,
    },
  });
  return data;
};
