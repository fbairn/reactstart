import { combineReducers } from 'redux';
import navReducer from './navReducer';


export default combineReducers({
  navbar: navReducer
});