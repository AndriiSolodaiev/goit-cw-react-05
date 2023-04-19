import { createSlice } from '@reduxjs/toolkit';
import {
  addUser,
  deleteUser,
  fetchCurrentUser,
  fetchUsers,
  updateUser,
} from './oparations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    items: [],
    currentUser: null,
    error: '',
  },
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
        state.currentUser = null;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.map(user => {
          if (user.id === payload.id) {
            user = payload;
          }
          return user;
        });
        state.error = '';
      }),
});

export const usersReducer = usersSlice.reducer;
