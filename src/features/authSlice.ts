import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../store/models/Auth';
import userStorage from '../utils/localStorage';

export interface AuthState {
  admin: User | null;
}

const initialState: AuthState = {
  admin: userStorage.getUser() || null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const admin = { ...state.admin, ...action.payload };
      userStorage.setUser(admin);
      state.admin = admin;
    },
    logout: (state) => {
      userStorage.clearUser();
      state.admin = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
