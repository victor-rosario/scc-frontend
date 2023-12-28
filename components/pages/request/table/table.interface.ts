import { ItemChildrenColumnsTableI } from "@components/app/table/table.interface";
import { ProviderGetOptionsI } from "@interfaces/common/common.interface";
import { ModalModeType } from "@interfaces/modal/modal.interface";

export interface IRequestTableProps<T> {
    filter?: Partial<ProviderGetOptionsI>
    onEdit?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onReport?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onListForm?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onReevaluate?: (mode: ModalModeType, data: T) => void
}

export interface IColumnRequestTableProps<T> {
    children: (columns: ItemChildrenColumnsTableI<T>[]) => React.ReactElement,
    onEdit?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onReport?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onListForm?: (mode: Exclude<ModalModeType, 'create'>, data: T) => void
    onReevaluate?: (mode: ModalModeType, data: T) => void
}