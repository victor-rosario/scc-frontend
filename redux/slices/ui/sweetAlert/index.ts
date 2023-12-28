import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISweetAlertOption } from './sweetAlert.interface';

const initialState: ISweetAlertOption = {
  open: false,
  icon: 'success',
  showCancelButton: true,
  text: "",
  textCancelButton: "Cancel",
  title: ""
};

const sweetAlert = createSlice({
  name: 'sweetAlert',
  initialState,
  reducers: {
    openSweetAlert(state: ISweetAlertOption, action: PayloadAction<ISweetAlertOption>) {
      const { open, icon, showCancelButton, text, textCancelButton, title, confirmButtonText, onConfirm } = action.payload;
      state.icon = icon
      state.open = open
      state.showCancelButton = showCancelButton
      state.title = title
      state.text = text
      state.textCancelButton = textCancelButton
      state.confirmButtonText = confirmButtonText || "Ok"
      state.onConfirm = (onConfirm && typeof onConfirm === 'function') ? onConfirm : undefined
    },
    closeSweetAlert(state) {
      state.open = false;
    }
  }
});

export default sweetAlert.reducer;

export const { openSweetAlert, closeSweetAlert } = sweetAlert.actions;
