
import { ObjectKeyDynamicI } from "@interfaces/common/common.interface"
import React, { ReactNode } from "react"

export interface ParamsRenderItemChildrenColumnsTableI<T> {
    data: T
    index: number
}

export interface RenderItemChildrenColumnsTableI<T> {
    (params: ParamsRenderItemChildrenColumnsTableI<T>): ReactNode
}

export type PositionItemChildrenColumnsTableType = "left" | "center" | "right"

export interface RenderColumnItemChildrenColumnsTableI {
    (): React.FC
}

export interface ItemChildrenColumnsTableI<T> {
    title: string
    checkbox?: boolean
    css?: React.CSSProperties
    position?: PositionItemChildrenColumnsTableType
    key?: string
    render?: RenderItemChildrenColumnsTableI<T>
    RenderColumn?: React.FC
}

export interface HandleChangePaginationTableI {
    (page: number): void
}
export interface PaginationTablePropsI {
    maxRowsPerPage?: number
    total?: number
    page?: number
    handleChange?: HandleChangePaginationTableI
}

export interface TablePropsI<T> {
    errorMessage?: string
    loading?: boolean
    withHover?: boolean
    columns: ItemChildrenColumnsTableI<T>[]
    data: ObjectKeyDynamicI[]
    pagination?: PaginationTablePropsI
}