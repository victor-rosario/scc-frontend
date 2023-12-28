import config from '@config'
import Base from '@providers/base'

class TranslateProvider extends Base {
	constructor() {
		super(`${config.server.url}/api/languages`)
	}

	languages() {
		return this.get<Array<string>>(`/`)
	}
}

const translateProvider = new TranslateProvider()

export default translateProvider
