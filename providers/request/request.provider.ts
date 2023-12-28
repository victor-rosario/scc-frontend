import config from '@config'
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { IApplicantRequest, IGetAllRequestResponse, IRequest } from './request.interface';

class RequestProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/requests`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IGetAllRequestResponse> {
        return this.get('/', options)
    }

    public getOne(uuid: string): Promise<IRequest> {
        return this.get(`/${uuid}`)
    }

    public create(payload: FormData): Promise<IRequest> {
        return this.post("/", payload)
    }

    public createApplicant(payload: IApplicantRequest): Promise<IRequest> {
        return this.post("/applicants", payload)
    }
}

const requestProvider = new RequestProvider()

export default requestProvider
