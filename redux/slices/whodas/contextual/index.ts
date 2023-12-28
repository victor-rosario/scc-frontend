import { createSlice } from '@reduxjs/toolkit'
import { ContextualModalSliceI } from './contextual.interface'
import updateBiomedicalReducer from './update.reducer'
import resetBiomedicalReducer from './reset-data.reducer'

export const contextualSliceInitialState: ContextualModalSliceI = {
    payload: {},
    modal: {
        open: false,
        mode: 'view'
    }
}

export const contextualSlice = createSlice({
    initialState: contextualSliceInitialState,
    name: 'contextual',
    reducers: {
        updateContextual: updateBiomedicalReducer,
        resetContextual: resetBiomedicalReducer
    }
})

export const {
    resetContextual,
    updateContextual
} = contextualSlice.actions
export default contextualSlice.reducer
