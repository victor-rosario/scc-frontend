import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { ICODSI } from './icod.interface';

class IcodProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/icods`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<ICODSI[]> {
        return this.get('/', options)
    }
}

const icodProvider = new IcodProvider()

export default icodProvider
