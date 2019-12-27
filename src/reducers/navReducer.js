import {
  SET_NAV,
  CLEAR_NAV,
  ADD_NAV,
  REMOVE_NAV
} from '../actions/types';

const initialState = {
  navItems: [
    {
      id: 1,
      name: 'Sass',
      link: 'sass'
    },
    {
      id: 2,
      name: 'Components',
      link: 'components'
    },
    {
      id: 3,
      name: 'Dropdown',
      subitems: [{
        id: 1,
        name: 'One',
        link: 'one'
      },
      {
        id: 2,
        divider: true
      },
      {
        id: 3,
        name: 'Two',
        link: 'two'
      },
      {
        id: 4,
        name: 'Three',
        link: 'three'
      },]
    }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV:
      return {
        ...state,
        navItems: action.payload
      };
    case ADD_NAV:
      return {
        ...state,
        navItems: [...state.navItems, action.payload]
      };
    case REMOVE_NAV:
      return {
        ...state,
        navItems: state.navItems.filter(item => item.id !== action.payload)
      };
    case CLEAR_NAV:
      return {
        ...state,
        navItems: []
      };
    default:
      return state;
  }
};