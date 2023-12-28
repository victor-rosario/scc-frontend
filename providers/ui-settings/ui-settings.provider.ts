import { ProviderGetOptionsI } from "@interfaces/common/common.interface"
import { UISettingsI } from "./ui-settings.interface"
import Base from "@providers/base"

class UISettingsAdminProvider extends Base {
	constructor() {
		super(`/ui-settings`)
	}

	getUISettings(options: ProviderGetOptionsI = {}) {
		return this.get<UISettingsI>('/', options)
	}

	updateUISettings(payload: Partial<UISettingsI>) {
		return this.update('/', payload)
	}
}


const uiSettingsAdminProvider = new UISettingsAdminProvider()

export default uiSettingsAdminProvider