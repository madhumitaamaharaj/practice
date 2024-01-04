import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  admin: userReducer,
});
const initialState = {
  admin: {
    adminEmail: '',
    adminPassword: '',
    showPassword: false,
   
  },
 
};
const store = createStore(rootReducer, initialState);
export default store;