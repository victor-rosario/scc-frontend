import { createSlice } from '@reduxjs/toolkit'
import { MeSliceI } from './me.interface'
import { setMeDataReducer } from './set-data.reducer'
import { resetMeDataReducer } from './reset-data.reducer'
import { setSuperAdminReducer } from './set-super-admin.reducer'

export const meSliceInitialState: MeSliceI = {
	account: null,
	isSuperAdmin: false,
}

export const meSlice = createSlice({
	initialState: meSliceInitialState,
	name: 'me',
	reducers: {
		setMeData: setMeDataReducer,
		setSuperAdmin: setSuperAdminReducer,
		cleanMeData: resetMeDataReducer
	}
})

export const { setMeData, cleanMeData, setSuperAdmin } = meSlice.actions
export default meSlice.reducer
