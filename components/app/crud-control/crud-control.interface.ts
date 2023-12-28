export interface CrudControlPropsI {
    showRightSection?: boolean;
    showLeftSection?: boolean;
    showSaveButton?: boolean;
    showUpdateButton?: boolean;
    saveButtonText?: string;
    updateButtonText?: string;
    handleRightAction?: (action: CrudControlRightActions) => void;
    onPrint?: () => void;
    onDelete?: () => void;
    onCreate?: () => void;
    onUpdate?: () => void;
}

export type CrudControlRightActions = "settings" | "restore" | "previous" | "next" | "manage"