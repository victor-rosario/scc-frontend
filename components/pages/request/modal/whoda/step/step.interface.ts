import { EntityStepModalPropsI } from "@components/app/modal/FromStepModal/FromStepModal.interface";
import { ExcludeProperties } from "@interfaces/common/common.interface";

export interface FormWhodaStepModalProps<T> extends ExcludeProperties<EntityStepModalPropsI<T>, 'errors' | 'onSave' | 'open' | 'mode' | 'onValidStep'> {

}