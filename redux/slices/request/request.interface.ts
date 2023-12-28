import { IRequest, IRequestPayload } from "@providers/request/request.interface"

export interface IPayloadRequest extends IRequestPayload {
    role: {
        slug: string
        roleUUID: string
    }
}

export interface RequestSliceI {
    payload: IPayloadRequest,
    data: IRequest | null,
    list: {
        data: IRequest[]
        count: number
    }
}