import {
  ADD_NAV,
  REMOVE_NAV
} from './types';

export const addNavItem = (navItem) => dispatch => dispatch({
  type: ADD_NAV,
  payload: navItem
});

export const deleteNavItem = (itemId) => dispatch => dispatch({
  type: REMOVE_NAV,
  payload: itemId
});