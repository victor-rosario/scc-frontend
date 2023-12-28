import { PayloadAction } from '@reduxjs/toolkit'
import { LanguageSliceI } from './language.interface'

export const addLanguageReducer = (state: LanguageSliceI, action: PayloadAction<string>) => {
	state.languages.push(action.payload)
	return state
}
