import { ItemChildrenColumnsTableI } from "@components/app/table/table.interface";
import { ModalModeType } from "@interfaces/modal/modal.interface";

export interface IRequestTableProps {

    filter?: any
    onEdit?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onReport?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onListForm?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onReevaluate?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
}

export interface IColumnRequestTableProps {
    children: (columns: ItemChildrenColumnsTableI<any>[]) => React.ReactElement,
    onEdit?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onReport?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onListForm?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
    onReevaluate?: (mode: Exclude<ModalModeType, 'create'>, data: any) => void
}