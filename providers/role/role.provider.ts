import config from "@config"
import { ProviderGetOptionsI } from "@interfaces/common/common.interface"
import Base from "@providers/base"
import { IRole } from "./role.interface"

class RoleProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/roles`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IRole[]> {
        return this.get('/', options)
    }
}

const roleProvider = new RoleProvider()

export default roleProvider
