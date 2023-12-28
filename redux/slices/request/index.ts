import { createSlice } from '@reduxjs/toolkit'
import { requestSliceInitialState } from './data.request'
import {
    updateOneListReducer,
    updatePayloadReducer,
    addOneListReducer,
    updateListReducer,
    updateDataReducer
} from './update.reducer'
import {
    resetListRequestReducer,
    resetPayloadRequestReducer,
    resetDataRequestReducer
} from './reset.reducer'

export const requestSlice = createSlice({
    initialState: requestSliceInitialState,
    name: 'requests',
    reducers: {
        addDataRequest: updateDataReducer,
        addPayloadRequest: updatePayloadReducer,
        updateListRequest: updateListReducer,
        addOneRequest: addOneListReducer,
        updateOneRequest: updateOneListReducer,
        resetPayloadRequest: resetPayloadRequestReducer,
        resetListRequest: resetListRequestReducer,
        resetDataRequest: resetDataRequestReducer
    }
})

export const {
    addOneRequest,
    addDataRequest,
    addPayloadRequest,
    resetListRequest,
    resetPayloadRequest,
    updateListRequest,
    updateOneRequest,
    resetDataRequest
} = requestSlice.actions
export default requestSlice.reducer
