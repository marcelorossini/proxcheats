import Cookie from "js-cookie";

export const APP_DATA = "agencia-clinica-data";

export const login = ({ token }) => {
  // Seta cookie
  Cookie.set(APP_DATA, token, { expires: 1 });
};

export const logout = () => {
  Cookie.remove(APP_DATA);
};

export const token = () => {
  return Cookie.get(APP_DATA);
};
