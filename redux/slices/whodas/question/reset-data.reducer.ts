import { QuestionSliceI } from "./question.interface"

const resetWhodaQuestion = (state: QuestionSliceI) => {
    state.payloadQuestions = {}
}

export default resetWhodaQuestion
