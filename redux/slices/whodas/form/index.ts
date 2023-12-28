import { createSlice } from '@reduxjs/toolkit'
import { WhodaModalSliceI } from './form.interface'
import updateWhodaFormReducer from './update.reducer'
import resetWhodaFormReducer from './reset-data.reducer'

export const whodaSliceInitialState: WhodaModalSliceI = {
    payload: {},
    modal: {
        open: false,
        mode: 'view',
        title: ""
    }
}

export const whodaFormSlice = createSlice({
    initialState: whodaSliceInitialState,
    name: 'whoda-form',
    reducers: {
        updateWhodaForm: updateWhodaFormReducer,
        resetWhodaForm: resetWhodaFormReducer
    }
})

export const {
    resetWhodaForm,
    updateWhodaForm
} = whodaFormSlice.actions
export default whodaFormSlice.reducer
