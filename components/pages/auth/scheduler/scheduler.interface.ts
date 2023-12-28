import { IStepField } from "@components/app/modal/FromStepModal/FromStepModal.interface";

export interface IAuthSchedulerProps<T> {
    stepFields: IStepField<T>[]
    onCreate: (data: T) => void
    onValidStep?: (data: T, step: number) => boolean
    resetSteps?: boolean
    thankYouPage: React.JSX.Element | null
}
