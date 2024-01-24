import { createSlice } from '@reduxjs/toolkit';
import { message } from '../../types';
import { createNewUserMessage, fetchUserMessages } from './ThreadsThunks';
import { RootState } from '../../app/store';

interface threadsTypes {
  threadsMessages: message[];

  addNewMessageLoading: boolean;
  threadsMessagesLoading: boolean;
}

const initialState: threadsTypes = {
  threadsMessages: [],

  addNewMessageLoading: false,
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
    builder.addCase(createNewUserMessage.pending, (state: threadsTypes) => {
      state.addNewMessageLoading = true;
    });
    builder.addCase(createNewUserMessage.fulfilled, (state: threadsTypes) => {
      state.addNewMessageLoading = false;
    });
    builder.addCase(createNewUserMessage.rejected, (state: threadsTypes) => {
      state.addNewMessageLoading = false;
    });
  },
});

export const threadsReducer = threadsSlice.reducer;
export const selectThreadsMessages = (state: RootState) => state.threads.threadsMessages;

export const threadsOnLoading = (state: RootState) => state.threads.threadsMessagesLoading;
export const newMessageThreadOnLoading = (state: RootState) => state.threads.addNewMessageLoading;