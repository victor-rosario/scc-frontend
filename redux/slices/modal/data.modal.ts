import { ModalSliceI } from "./modal.interface";

export const modalSliceInitialState: ModalSliceI = {
    createCase: {
        mode: "create",
        open: false
    },
    requestInfo: {
        open: false,
        mode: "create",
    },
    forms: {
        open: false,
        mode: "create",
    },
    biomedical: {
        open: false,
        mode: "create",
    },
    reevaluate: {
        open: false,
        mode: "create",
    },
}