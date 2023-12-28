import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { ICommunication } from './communication.interface';

class CommunicationProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/communications`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<ICommunication[]> {
        return this.get('/', options)
    }
}

const communicationProvider = new CommunicationProvider()

export default communicationProvider
