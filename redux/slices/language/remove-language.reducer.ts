import { PayloadAction } from '@reduxjs/toolkit'
import { LanguageSliceI } from './language.interface'

export const removeLanguageReducer = (state: LanguageSliceI, action: PayloadAction<string>) => {
	state.languages = state.languages.filter((l) => l !== action.payload)
	return state
}
