import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        // console.log(res?.data);
        document.cookie = `accessToken=${res.data.token}`;

        // console.log(res.data.token);
        dispatch(loginSuccess(res?.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};