import Cookies from "js-cookie";
const SetCookie = (cookieName, userInfo) => {
  Cookies.set(cookieName, userInfo, {
    expires: 1, // 1 day
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};
export default SetCookie;
