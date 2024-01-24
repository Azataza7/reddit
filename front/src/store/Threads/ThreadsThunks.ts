import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { message } from '../../types';

export const fetchUserMessages = createAsyncThunk<message[], void>(
  'threads',
  async () => {
    try {
      const response = await axiosApi.get<message>('/threads');
      if (response.data) {
        return response.data;
      }
    } catch (e) {
      console.error('Error: ', e);
    }
  }
);