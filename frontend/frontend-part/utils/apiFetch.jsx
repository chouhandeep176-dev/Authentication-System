import { logoutSuccess } from "../src/features/user slice/userSlice.js";

export const apiFetch = async (url, dispatch) => {
  const res = await fetch(url, {
    credentials: "include",
  });

  if (res.status === 401) {
    dispatch(logoutSuccess());
    return null;
  }

  return res;
};
