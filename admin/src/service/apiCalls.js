import { getProductStart, getProductSuccess, getProductFailed } from "redux/productRedux";
import { loginStart, loginSuccess, loginFailure } from "redux/userRedux";
import { publicRequest } from "./baseRequest";

export const loginCallApi = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(
      loginFailure({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(
      getProductFailed({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};