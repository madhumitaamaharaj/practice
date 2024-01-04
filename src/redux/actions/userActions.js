export const SET_ADMIN_EMAIL = 'SET_ADMIN_EMAIL';
export const SET_ADMIN_PASSWORD = 'SET_ADMIN_PASSWORD';
export const SET_SHOW_PASSWORD = 'SET_SHOW_PASSWORD';  

export const setAdminEmail = (email) => ({
  type: SET_ADMIN_EMAIL,
  payload: email,
});

export const setAdminPassword = (password) => ({
  type: SET_ADMIN_PASSWORD,
  payload: password,
});

export const setShowPassword = (showPassword) => ({
  type: SET_SHOW_PASSWORD,
  payload: showPassword,
});
