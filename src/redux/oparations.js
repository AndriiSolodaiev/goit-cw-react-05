import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://643ec7d36c30feced83319dd.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'users/fetchCurrentUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/users/${user.id}`, user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
