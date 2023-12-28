import { PayloadAction } from "@reduxjs/toolkit"
import { QuestionSliceI } from "./question.interface"

const updateWhodaQuestion = (state: QuestionSliceI, action: PayloadAction<Partial<QuestionSliceI>>) => {
    if (action.payload.payloadQuestions) state.payloadQuestions = action.payload.payloadQuestions
}

export default updateWhodaQuestion
