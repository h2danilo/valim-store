import { combineReducers } from 'redux';

import cart from './cart/reducer';
import home from './home/reducer';
// import user from '.user/reducer';

export default combineReducers({
  cart,
  home,
  // user,
});
