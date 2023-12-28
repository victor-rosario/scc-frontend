// types
import { createSlice } from '@reduxjs/toolkit';
import { MenuProps } from './menu.interface';
import { dispatch } from '../../../store';

// initial state
const initialState: MenuProps = {
  selectedItem: ['dashboard'],
  selectedID: null,
  drawerOpen: false,
  error: null,
  menu: {}
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.selectedItem = action.payload;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },

    // has error
    hasError(state, action) {
      state.error = action.payload;
    },

    // get dashboard menu
    getMenuSuccess(state, action) {
      state.menu = action.payload;
    }
  }
});

export default menu.reducer;

export const { activeItem, openDrawer, activeID } = menu.actions;

export function getMenu() {
  return async () => {
    try {
      const response = await fetch('/api/menu/widget');
      const data = await response.json();
      dispatch(menu.actions.getMenuSuccess(data.widget));
    } catch (error) {
      dispatch(menu.actions.hasError(error));
    }
  };
}
