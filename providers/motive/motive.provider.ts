import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { IMotive } from './motive.interface';

class MotiveProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/motives`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IMotive[]> {
        return this.get('/', options)
    }
}

const motiveProvider = new MotiveProvider()

export default motiveProvider
