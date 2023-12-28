import { PayloadAction } from '@reduxjs/toolkit'
import { LanguageSliceI } from './language.interface'

export const setLanguagesReducer = (state: LanguageSliceI, action: PayloadAction<string[]>) => {
	state.languages = action.payload
	return state
}
