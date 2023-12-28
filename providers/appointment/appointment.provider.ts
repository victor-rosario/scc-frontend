import config from '@config';
import { ProviderGetOptionsI } from '@interfaces/common/common.interface';
import Base from "@providers/base";
import { IAppointment } from './appointment.interface';

class AppointmentsProvider extends Base {
    constructor() {
        super(`${config.server.url}/api/appointments`)
    }

    public getAll(options: Partial<ProviderGetOptionsI> = {}): Promise<IAppointment[]> {
        return this.get('/', options)
    }
}

const appointmentsProvider = new AppointmentsProvider()

export default appointmentsProvider
