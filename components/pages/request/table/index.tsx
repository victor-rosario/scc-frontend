import Table from "@components/app/table";
import ColumnRequestTable from "./column";
import { Fragment, useState } from "react";
import ModalReceptionist from "../modal/receptionist";
import SelectDocumentForm from "../modal/select-document-form";
import { useRouter } from 'next/router'
import { generateUUID } from "@utils/strings/strings.util";
import { IRequestTableProps } from "./table.interface";
import { REQUESTS } from "../../../../dummy/request.data";


function RequestTable({ onReevaluate }: IRequestTableProps) {

    const router = useRouter()
    const [openModal, setOpenModal] = useState(false)
    const [openSelectDocumentFormModal, setOpenSelectDocumentFormModal] = useState(false)
    const [page, setPage] = useState(0)

    return (
        <Fragment>
            <ColumnRequestTable
                onEdit={() => {
                    setOpenModal(true)
                }}
                onReport={() => {
                    router.push(`/requests/${generateUUID()}/report`)
                }}
                onListForm={() => {
                    setOpenSelectDocumentFormModal(true)
                }}
                onReevaluate={onReevaluate}
            >
                {(columns) => (
                    <Table
                        columns={columns}
                        withHover={false}
                        data={REQUESTS}
                        pagination={{
                            handleChange: setPage,
                            maxRowsPerPage: 10,
                            page,
                            total: 10
                        }}
                    />
                )}
            </ColumnRequestTable>
            <ModalReceptionist
                open={openModal}
                entityName="Victor Rosario"
                onClose={() => {
                    setOpenModal(false)
                }}
                onSubmit={() => {
                    setOpenModal(false)
                }}
            />
            <SelectDocumentForm
                open={openSelectDocumentFormModal}
                onBack={() => {
                    setOpenSelectDocumentFormModal(false)
                }}
                onClose={() => {
                    setOpenSelectDocumentFormModal(false)
                    // setOpenDocumentFormModal(true)
                }}
            />
        </Fragment>
    )

}

export default RequestTable