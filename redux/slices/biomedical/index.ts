import { createSlice } from '@reduxjs/toolkit'
import { biomedicalSliceInitialState } from './data.biomedical'
import {
    resetPayloadBiomedicalReducer
} from './reset-data.reducer'
import {
    updatePayloadBiomedicalReducer
} from './update.reducer'

export const biomedicalSlice = createSlice({
    initialState: biomedicalSliceInitialState,
    name: 'biomedical',
    reducers: {
        updatePayloadBiomedical: updatePayloadBiomedicalReducer,
        resetPayloadBiomedical: resetPayloadBiomedicalReducer
    }
})

export const {
    updatePayloadBiomedical,
    resetPayloadBiomedical
} = biomedicalSlice.actions

export default biomedicalSlice.reducer
