import { createSlice } from '@reduxjs/toolkit'
import { requestSliceInitialState } from './data.request'
import resetRequestReducer from './reset-data.reducer'
import updateRequestReducer from './update.reducer'

export const requestSlice = createSlice({
    initialState: requestSliceInitialState,
    name: 'requests',
    reducers: {
        updateRequest: updateRequestReducer,
        resetRequest: resetRequestReducer
    }
})

export const {
    resetRequest,
    updateRequest
} = requestSlice.actions
export default requestSlice.reducer
