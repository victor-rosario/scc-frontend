import { PayloadAction } from "@reduxjs/toolkit"
import { RequestSliceI, IPayloadRequest } from "./request.interface"
import { IRequest } from "@providers/request/request.interface"

export const updatePayloadReducer = (state: RequestSliceI, action: PayloadAction<Partial<IPayloadRequest>>) => {
    state.payload = {
        ...state.payload,
        ...action.payload
    }
    return state
}

export const updateDataReducer = (state: RequestSliceI, action: PayloadAction<IRequest>) => {
    state.data = action.payload
    return state
}

export const updateListReducer = (state: RequestSliceI, action: PayloadAction<{ data: IRequest[], count: number }>) => {
    state.list.data = action.payload.data
    state.list.count = action.payload.count || action.payload.data.length
    return state
}

export const updateOneListReducer = (state: RequestSliceI, action: PayloadAction<IRequest>) => {
    const list = [...state.list.data]
    const foundIndex = list.findIndex((x) => x.uuid === action.payload.uuid)
    if (foundIndex === -1) return

    list[foundIndex] = action.payload!

    state.list.data = list
    return state
}

export const addOneListReducer = (state: RequestSliceI, action: PayloadAction<IRequest>) => {
    const list = [...state.list.data];
    state.list.count = state.list.count + 1;

    if (list.length < 32) {
        state.list.data.unshift(action.payload);
        return;
    }

    list.shift();
    list.unshift(action.payload);

    state.list.data = list;
    return state
}