import config from '@config'
import Base from '../base'
import { SignInPayloadI } from './auth-provider.interface'

class AuthProvider extends Base {
	constructor() {
		super(`${config.server.url}/api/auth`)
	}

	async signIn(data: SignInPayloadI, config = {}): Promise<{ login: boolean, twoFactor: boolean }> {
		return await this.post('/signin', data, config)
	}

	async logout(): Promise<unknown> {
		return await this.post('/signout')
	}

	async me(): Promise<unknown> {
		return await this.get('/me')
	}

}

const authProvider = new AuthProvider()

export default authProvider
