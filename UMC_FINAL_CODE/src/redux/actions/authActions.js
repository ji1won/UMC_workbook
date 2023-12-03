import { loginUser, clearUser } from '../reducers/authSlice';

export const authActions = {
  loginUser,
  clearUser,
  performLogin: (userInfo) => (dispatch) => {
    dispatch(loginUser(userInfo));
  },
  performLogout: () => (dispatch) => {
    dispatch(clearUser());
  },
};

export default authActions;
