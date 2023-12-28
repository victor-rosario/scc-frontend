import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { IDiseaseHistories } from './disease-histories.interface';

class DiseaseHistoryProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/disease-histories`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IDiseaseHistories[]> {
        return this.get('/', options)
    }
}

const diseaseHistoryProvider = new DiseaseHistoryProvider()

export default diseaseHistoryProvider
