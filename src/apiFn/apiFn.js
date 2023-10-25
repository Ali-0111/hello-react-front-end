import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:3000/messages';

const getMessagesAPI = createAsyncThunk(
  'msgSlice/getMessages',
  async () => {
    const response = await axios.get(BASE_URL);
    console.log(response.data)
    return response.data;
  },
);

export default getMessagesAPI;  