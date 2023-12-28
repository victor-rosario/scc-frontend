import { useCallback, useState } from "react";

export const useCreatePagination = (data: Array<any>, offset: number = 1, limit: number = 5) => {
    const [paginationInfo, setPaginationInfo] = useState({ offset, limit })

        const pagination = useCallback((list: Array<any>, size: number, pageNumber: number) => {
            return list?.slice((pageNumber - 1) * size, pageNumber * size);
        }, [])
    
        return {
            data: pagination(data, paginationInfo.limit, paginationInfo.offset),
            setPaginationInfo,
            paginationInfo
        }
}