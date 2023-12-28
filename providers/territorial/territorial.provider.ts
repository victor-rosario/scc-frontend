import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { ITerritorial } from './territorial.interface';

class TerritorialProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/territorial`)
    }

    public getMunicipalities(options: Partial<ProviderGetOptionsI & { provinceUUID: string }> = {}): Promise<ITerritorial[]> {
        return this.get('/municipalities', options)
    }

    public getProvinces(options: Partial<ProviderGetOptionsI> = {}): Promise<ITerritorial[]> {
        return this.get('/provinces', options)
    }
}

const territorialProvider = new TerritorialProvider()

export default territorialProvider
