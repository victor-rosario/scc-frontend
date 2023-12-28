import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CaseModalProps } from './modalCase.interface';

const initialState: CaseModalProps = {
    maxWith: 'sm',
    open: false,
    logo: "check",
    message: "default",
    buttons: {
        cancel: {
            title: "Close",
            callback: () => { },
        },
        new: {
            title: "Create",
            callback: () => { },
        }
    }
};

const caseModal = createSlice({
    name: 'modal-case',
    initialState,
    reducers: {
        openCaseModal: (state: CaseModalProps, action: PayloadAction<CaseModalProps>) => {
            const { maxWith, open, message, buttons, logo } = action.payload;

            state.open = open || initialState.open
            state.maxWith = maxWith || initialState.maxWith
            state.message = message || initialState.message
            state.logo = logo || initialState.logo

            state.buttons.new = buttons.new || initialState.buttons.new
            state.buttons.cancel = buttons.cancel || initialState.buttons.cancel
        },

        closeCaseModal: (state: CaseModalProps) => {
            state.open = false;
            state = initialState
        }
    }
});

export default caseModal.reducer;

export const { closeCaseModal, openCaseModal } = caseModal.actions;
