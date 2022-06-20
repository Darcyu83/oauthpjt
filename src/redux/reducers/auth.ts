import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoading: false, authorized: false},
  reducers: {
    getAuthori(state) {
      console.log('getAuthori==1');
      state.isLoading = true;
    },

    getAuthoriSuccess(state, action) {
      console.log('getAuthori==2');

      state.authorized = action.payload;
      state.isLoading = false;
    },
  },
});

export const authAct = authSlice.actions;
export const authReducer = authSlice.reducer;
