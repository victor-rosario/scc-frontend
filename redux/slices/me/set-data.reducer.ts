import { PayloadAction } from '@reduxjs/toolkit'
import { MeSliceI } from './me.interface'

export const setMeDataReducer = (state: MeSliceI, action: PayloadAction<MeSliceI>) => {
	if (action.payload.account) state.account = action.payload.account
	state.isSuperAdmin = action.payload.isSuperAdmin
	// if(action.payload.role) state.role = action.payload.role
	return state
}
