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

interface dataType {
  author: string;
  text: string;
  image: File | null;
}

export const createNewUserMessage = createAsyncThunk<>(
  'threads/new',
  async (data: dataType) => {
    try {
      const formData = new FormData();
      formData.append('author', data.author);
      formData.append('text', data.text);

      if (data.image) {
        formData.append('image', data.image);
      }

      return await axiosApi.post('/threads', formData);
    } catch (e) {
      console.error('Error: ', e);
    }
  }
);