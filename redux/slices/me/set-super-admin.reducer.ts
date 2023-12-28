import { PayloadAction } from '@reduxjs/toolkit'
import { MeSliceI } from './me.interface'

export const setSuperAdminReducer = (state: MeSliceI, action: PayloadAction<boolean>) => {
	state.isSuperAdmin = action.payload
	return state
}