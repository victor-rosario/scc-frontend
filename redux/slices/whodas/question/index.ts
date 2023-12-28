import { createSlice } from '@reduxjs/toolkit'
import { QuestionSliceI } from './question.interface'
import updateWhodaQuestionReducer from './update.reducer'
import resetWhodaQuestionReducer from './reset-data.reducer'

export const whodaBabySliceInitialState: QuestionSliceI = {
    payloadQuestions: {},
}

export const whodaQuestionSlice = createSlice({
    initialState: whodaBabySliceInitialState,
    name: 'whoda-questions',
    reducers: {
        updateWhodaQuestion: updateWhodaQuestionReducer,
        resetWhodaQuestion: resetWhodaQuestionReducer
    }
})

export const {
    updateWhodaQuestion,
    resetWhodaQuestion
} = whodaQuestionSlice.actions
export default whodaQuestionSlice.reducer
