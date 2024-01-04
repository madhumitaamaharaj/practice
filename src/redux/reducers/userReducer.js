import {
  SET_ADMIN_EMAIL,
  SET_ADMIN_PASSWORD,
  SET_SHOW_PASSWORD,
} from '../actions/userActions';


const initialState = {
  adminEmail: '',
  adminPassword: '',
  showPassword: false,
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_EMAIL:
      return {
        ...state,
        adminEmail: action.payload,
      };
    case SET_ADMIN_PASSWORD:
      return {
        ...state,
        adminPassword: action.payload,
      };
    case SET_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
