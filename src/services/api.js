import { create } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';

import { baseUrl } from '../utils/base-url';

const api = create({
  baseURL: baseUrl,
  headers: { Accept: 'application/json' },
  timeout: 50000
});

api.addResponseTransform(response => {
  if (response.ok) {
    // TODO
  }
});

// api.addRequestTransform(request => {
//   const token = await AsyncStorage.getItem('@api:token');
//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
// });



