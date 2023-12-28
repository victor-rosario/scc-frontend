import { MeSliceI } from './me.interface'

export const resetMeDataReducer = (state: MeSliceI) => {
	state.account = null
	state.isSuperAdmin = false

	return state
}