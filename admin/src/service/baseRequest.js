import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjE0YWQwYzVmZWZjYTI1ZTMxYWZkMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjAxMDIyMCwiZXhwIjoxNjM2MjY5NDIwfQ.TOJSHnzacXEaUOJ_8gRZA5wQvOvfJJQd_sqaKETuGzc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
