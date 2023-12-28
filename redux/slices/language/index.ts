import { createSlice } from '@reduxjs/toolkit'
import { setLanguagesReducer } from './set-languages.reducer'
import { addLanguageReducer } from './add-language.reducer'
import { LanguageSliceI } from './language.interface'
import { removeLanguageReducer } from './remove-language.reducer'

export const languageSliceInitialState: LanguageSliceI = {
	languages: []
}

export const languageSlice = createSlice({
	initialState: languageSliceInitialState,
	name: 'languages',
	reducers: {
		setLanguagesData: setLanguagesReducer,
		addLanguage: addLanguageReducer,
		removeLanguage: removeLanguageReducer,
	}
})

export const { setLanguagesData, addLanguage, removeLanguage } = languageSlice.actions
export default languageSlice.reducer
