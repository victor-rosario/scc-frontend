import { ModalSliceI } from "./modal.interface"

export const resetCreateCaseModalReducer = (state: ModalSliceI) => {
    state.createCase.mode = 'create'
    state.createCase.open = false
}

export const resetOneRequestModalReducer = (state: ModalSliceI) => {
    state.requestInfo.mode = 'create'
    state.requestInfo.open = false
}

export const resetListFormModalReducer = (state: ModalSliceI) => {
    state.forms.mode = 'create'
    state.forms.open = false
}

export const resetBiomedicalModalReducer = (state: ModalSliceI) => {
    state.biomedical.mode = 'create'
    state.biomedical.open = false
}

export const resetReevaluateModalReducer = (state: ModalSliceI) => {
    state.reevaluate.mode = 'create'
    state.reevaluate.open = false
}

