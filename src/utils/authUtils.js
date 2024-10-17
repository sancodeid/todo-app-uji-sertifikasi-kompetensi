export const saveUser = (username, email, password) => {
  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const logOut = () => {
  localStorage.removeItem("isLoggedIn");
};
