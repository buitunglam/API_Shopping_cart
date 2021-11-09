import { getProductStart, getProductSuccess, getProductFailed, deleteProductSuccess, deleteProductStart, deleteProductFailed } from "redux/productRedux";
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

export const deleteProduct = async (dispatch, id) => {
  dispatch(deleteProductStart());
  try {
    // const res = await publicRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    // dispatch(
    //   deleteProductFailed({
    //     message: error.response.data,
    //     status: error.response.status,
    //   })
    // );
  }
};