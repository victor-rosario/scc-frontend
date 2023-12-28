import {
    Button,
    Grid,
    InputAdornment,
    OutlinedInput,
    Typography
} from "@mui/material"
import { IconSearch } from '@tabler/icons';
import Page from "@components/app/Page"
import MainCard from "@components/app/cards/MainCard"
import { gridSpacing } from "@constants/theme"
import BiomedicalModal from "./modal/biomedical";
import { useState } from "react";
import { ModalModeType } from "@interfaces/modal/modal.interface";
import CreateCaseModal from "./modal/create-case";
import RequestTable from "./table";
import CustomDateRangePicker from "@components/app/date-range-picker";
import ContextualModal from "./modal/contextual";
import WhodaForm from "./modal/whoda";
import ReevaluateModal from "./modal/re-evaluate";

const RequestComponentPage = () => {

    const [modalMode, setModalMode] = useState<ModalModeType>('create')
    const [openModal, setOpenModal] = useState(false)
    const [openReevaluateModal, setOpenReevaluateModal] = useState(false)
    const [modalReevaluateMode, setModalReevaluateMode] = useState<ModalModeType>('create')
    // const [openModalReceptionist, setOpenModalReceptionist] = useState(false)
    // const [openDocumentFormModal, setOpenDocumentFormModal] = useState(false)
    // const [openSelectDocumentFormModal, setOpenSelectDocumentFormModal] = useState(false)

    const handleChange = () => { }

    const handleOpenCreateModal = () => {
        setModalMode('create')
        setOpenModal(true)
    }

    const handleOpenReevaluateModal = () => {
        setModalReevaluateMode('create')
        setOpenReevaluateModal(true)
    }

    return (
        <Page title={"Solicitudes"}>
            <MainCard
                headerSX={{
                    padding: 0,
                    paddingTop: "24px",
                    paddingLeft: "24px",
                    paddingBottom: "15px"
                }}
                title={
                    <Grid sx={{ backgroundColor: "#fff", borderRadius: 5 }} container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                        <Grid paddingBottom={2} item xs={3}>
                            <Typography variant="h3">Solicitudes</Typography>
                        </Grid>
                        <Grid paddingBottom={2} item xs={9} justifyContent={"flex-end"} alignItems={"center"} style={{ display: 'flex', gap: 10 }}>
                            <Grid item xs={4}>
                                <CustomDateRangePicker keyName="request" onChange={(dates) => { dates; }} />
                            </Grid>
                            <Grid paddingRight={1} item xs={4}>
                                <OutlinedInput
                                    style={{ height: '100%', width: '100%' }}
                                    name="search"
                                    onChange={handleChange}
                                    placeholder={"Buscar"}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <IconSearch stroke={1.5} size="16px" />
                                        </InputAdornment>
                                    }
                                    size="small"
                                />
                            </Grid>
                            <Grid paddingRight={1} item xs={2}>
                                <Button
                                    variant='contained'
                                    sx={{ borderRadius: '28px' }}
                                    onClick={handleOpenCreateModal}
                                >
                                    + Nuevo caso
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                }
                content={false}
            >
                <RequestTable
                    onReevaluate={handleOpenReevaluateModal}
                />
                <CreateCaseModal
                    mode={modalMode}
                    open={openModal}
                    setOpenModal={setOpenModal}
                />
                <BiomedicalModal />
                <ContextualModal />
                <WhodaForm />
                <ReevaluateModal
                    mode={modalReevaluateMode}
                    open={openReevaluateModal}
                    setOpenModal={setOpenReevaluateModal}
                />
            </MainCard>
        </Page>
    )
}

export default RequestComponentPage