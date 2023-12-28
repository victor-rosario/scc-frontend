import { createSlice } from '@reduxjs/toolkit'
import { modalSliceInitialState } from './data.modal'
import {
    updateCreateCaseModalReducer,
    updateOneRequestModalReducer,
    updateListFormModalReducer,
    updateBiomedicalModalReducer,
    updateReevaluateModalReducer
} from './update.reducer'
import {
    resetCreateCaseModalReducer,
    resetOneRequestModalReducer,
    resetListFormModalReducer,
    resetBiomedicalModalReducer,
    resetReevaluateModalReducer
} from './reset.reducer'

export const modalSlice = createSlice({
    initialState: modalSliceInitialState,
    name: 'modals',
    reducers: {
        updateModal: updateCreateCaseModalReducer,
        resetModal: resetCreateCaseModalReducer,

        // One request modal
        updateOneRequestModal: updateOneRequestModalReducer,
        resetOneRequestModal: resetOneRequestModalReducer,

        // List form modal
        updateListFormModal: updateListFormModalReducer,
        resetListFormModal: resetListFormModalReducer,

        // Biomedical modal
        updateBiomedicalModal: updateBiomedicalModalReducer,
        resetBiomedicalModal: resetBiomedicalModalReducer,

        // Reevaluate modal
        updateReevaluateModal: updateReevaluateModalReducer,
        resetReevaluateModal: resetReevaluateModalReducer
    }
})

export const {
    updateModal,
    resetModal,

    // One request modal
    updateOneRequestModal,
    resetOneRequestModal,

    // List form modal
    updateListFormModal,
    resetListFormModal,

    // Biomedical modal
    updateBiomedicalModal,
    resetBiomedicalModal,

    // Reevaluate modal
    updateReevaluateModal,
    resetReevaluateModal
} = modalSlice.actions
export default modalSlice.reducer
