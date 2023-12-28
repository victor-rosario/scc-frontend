import config from '@config';
import Base from "@providers/base";
import { IBioMedicalPayload, IGetCreateBiomedicalResponse } from './biomedical.interface';

class BiomedicalProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/biomedicals`)
    }

    public create(payload: IBioMedicalPayload): Promise<IGetCreateBiomedicalResponse> {
        return this.post("/", payload)
    }
}

const biomedicalProvider = new BiomedicalProvider()

export default biomedicalProvider
