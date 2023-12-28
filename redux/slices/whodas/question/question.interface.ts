
export type QuestionsObjectI = {
    [uuid: string]: {
        question: string
        value: number | string
    }
}

export interface QuestionSliceI {
    payloadQuestions: QuestionsObjectI
}