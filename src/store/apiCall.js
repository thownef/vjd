import { loginFailure, loginStart } from './authSlice';
import axios from 'axios';

export const loginUser = async (data, dispatch) => {
  console.log(data);
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'http://localhost:8000/server/auth/login',
      data
    );
    console.log(res.data);
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const registerUser = async (data, dispatch) => {
  console.log(data);
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'http://localhost:8000/server/auth/register',
      data
    );
    console.log(res);
  } catch (error) {
    dispatch(loginFailure());
  }
};
