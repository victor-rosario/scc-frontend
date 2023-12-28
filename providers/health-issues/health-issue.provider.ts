import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { IHealthIssues } from './health-issue.interface';

class HealthIssueProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/health-issues`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IHealthIssues[]> {
        return this.get('/', options)
    }
}

const healthIssueProvider = new HealthIssueProvider()

export default healthIssueProvider
