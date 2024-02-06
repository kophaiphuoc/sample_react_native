import {createAsyncThunk} from '@reduxjs/toolkit';
import {post} from '../../utils/functionnetwork/Api';

export const loginAuth = createAsyncThunk('users/staff-login', async data => {
  const response = await post('users/staff-login', data);
  return response.data;
});
