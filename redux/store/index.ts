import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

// slices
import meReducer from '../slices/me'
import modalCaseReducer from '../slices/ui/modalCase'
import snackbarReducer from '../slices/ui/snackbar'
import sweetAlertReducer from '../slices/ui/sweetAlert'
import menuReducer from '../slices/ui/menu'
import languageReducer from '../slices/language'
import biomedicalReducer from '../slices/biomedical'
import contextualReducer from '../slices/whodas/contextual'
import whodaFormReducer from '../slices/whodas/form'
import whodaQuestionReducer from '../slices/whodas/question'
import requestReducer from '../slices/request'
import modalReducer from '../slices/modal'

const rootReducer = combineReducers({
	me: meReducer,
	modalCase: modalCaseReducer,
	snackbar: snackbarReducer,
	sweetAlert: sweetAlertReducer,
	menu: menuReducer,
	language: languageReducer,
	biomedical: biomedicalReducer,
	contextual: contextualReducer,
	whodaForm: whodaFormReducer,
	whodaQuestion: whodaQuestionReducer,
	request: requestReducer,
	modal: modalReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	}),
})

const { dispatch } = store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { dispatch, useAppSelector, useAppDispatch }
