import { createSlice } from '@reduxjs/toolkit';
import { message } from '../../types';
import { fetchUserMessages } from './ThreadsThunks';
import { RootState } from '../../app/store';

interface threadsTypes {
  threadsMessages: message[];

  threadsMessagesLoading: boolean;
}

const initialState: threadsTypes = {
  threadsMessages: [],

  threadsMessagesLoading: false,
};

const threadsSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    setState(state, action) {
      state.threadsMessages = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserMessages.pending, (state: threadsTypes) => {
      state.threadsMessagesLoading = true;
    });
    builder.addCase(fetchUserMessages.fulfilled, (state: threadsTypes, {payload: messages}) => {
      state.threadsMessages = messages;
      state.threadsMessagesLoading = false;
    });
    builder.addCase(fetchUserMessages.rejected, (state: threadsTypes) => {
      state.threadsMessagesLoading = false;
    });
  },
});

export const threadsReducer = threadsSlice.reducer;
export const selectThreadsMessages = (state: RootState) => state.threads.threadsMessages;

export const threadsOnLoading = (state: RootState) => state.threads.threadsMessagesLoading;