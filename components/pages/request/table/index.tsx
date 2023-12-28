import Table from "@components/app/table";
import { IRequest } from "@providers/request/request.interface";
import requestProvider from "@providers/request/request.provider";
import { updateListRequest } from "@redux/slices/request";
import { dispatch, useAppSelector } from "@redux/store";
import { generateUUID } from "@utils/strings/strings.util";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import ColumnRequestTable from "./column";
import { IRequestTableProps } from "./table.interface";

function RequestTable({
    filter,
    onEdit,
    onListForm,
    onReevaluate
}: IRequestTableProps<IRequest>) {

    const { list } = useAppSelector(x => x.request)
    const router = useRouter()
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        requestProvider.getAll({
            pagination: {
                take: 10,
                skip: page
            },
            ...filter
        }).then(result => {
            dispatch(updateListRequest(result))
            setLoading(false)
        })
    }, [JSON.stringify(filter), page])

    return (
        <ColumnRequestTable
            onEdit={onEdit}
            onListForm={onListForm}
            onReevaluate={onReevaluate}
            onReport={() => {
                router.push(`/requests/${generateUUID()}/report`)
            }}
        >
            {(columns) => (
                <Table
                    columns={columns}
                    withHover={false}
                    data={list.data}
                    loading={loading}
                    errorMessage="No hay solicitudes"
                    pagination={{
                        handleChange: setPage,
                        maxRowsPerPage: 10,
                        page,
                        total: list.count
                    }}
                />
            )}
        </ColumnRequestTable>
    )

}

export default RequestTable