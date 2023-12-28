import { createSlice } from '@reduxjs/toolkit'
import { BiomedicalSliceI } from './biomedical.interface'
import updateBiomedicalReducer from './update.reducer'
import resetBiomedicalReducer from './reset-data.reducer'

export const biomedicalSliceInitialState: BiomedicalSliceI = {
    payload: {},
    modal: {
        open: false,
        mode: 'view'
    }
}

export const biomedicalSlice = createSlice({
    initialState: biomedicalSliceInitialState,
    name: 'biomedical',
    reducers: {
        updateBiomedical: updateBiomedicalReducer,
        resetBiomedical: resetBiomedicalReducer
    }
})

export const {
    updateBiomedical,
    resetBiomedical
} = biomedicalSlice.actions
export default biomedicalSlice.reducer
