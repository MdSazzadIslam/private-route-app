const TOKEN_KEY = "super secret key";

export const login = () => {
  debugger;
  localStorage.setItem(TOKEN_KEY, "login");
};
export const logOut = () => {
  debugger;
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  debugger;
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
};
