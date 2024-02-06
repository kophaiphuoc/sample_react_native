import {createSlice} from '@reduxjs/toolkit';
import {loginAuth} from './LoginThunk';

interface LoginState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: LoginState = {
  data: [],
  loading: false,
  error: null,
};

const loginAuthSlice = createSlice({
  name: 'login-auth',
  initialState,
  reducers: {
    clearData: state => {
      state.data = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAuth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong.';
      });
  },
});

export const {clearData} = loginAuthSlice.actions;
export default loginAuthSlice.reducer;
