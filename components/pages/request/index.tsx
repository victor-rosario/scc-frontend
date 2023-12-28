import Page from "@components/app/Page";
import MainCard from "@components/app/cards/MainCard";
import CustomDateRangePicker from "@components/app/date-range-picker";
import { gridSpacing } from "@constants/theme";
import { useDebounce } from "@hooks/useDebounce";
import {
    Button,
    Grid,
    InputAdornment,
    OutlinedInput,
    Typography
} from "@mui/material";
import { IconSearch } from '@tabler/icons';
import { useMemo, useState } from "react";
import BiomedicalModal from "./modal/biomedical";
import ContextualModal from "./modal/contextual";
import CreateCaseModal from "./modal/create-case";
import ModalReceptionist from "./modal/receptionist";
import SelectDocumentForm from "./modal/select-document-form";
import WhodaForm from "./modal/whoda";
import RequestTable from "./table";
import {
    updateListFormModal,
    updateModal,
    updateOneRequestModal,
    updateReevaluateModal
} from "@redux/slices/modal";
import { dispatch, useAppSelector } from "@redux/store";
import { IRequest } from "@providers/request/request.interface";
import { ModalModeType } from "@interfaces/modal/modal.interface";
import requestProvider from "@providers/request/request.provider";
import { openSnackbar } from "@redux/slices/ui/snackbar";
import { addDataRequest } from "@redux/slices/request";
import ReevaluateModal from "./modal/re-evaluate";

const RequestComponentPage = () => {

    const { data: requestSelected } = useAppSelector(x => x.request)
    const [filter, setFilter] = useState({ search: "" })
    const [dateFilter, setDateFilter] = useState<{ start: Date, end: Date } | null>(null)

    const search = useDebounce(filter.search)

    const generalFilter = useMemo(() => ({
        ...filter,
        ...dateFilter ? { dates: { start: dateFilter.start.toString(), end: dateFilter.end.toString(), } } : {}
    }), [dateFilter])

    const getOneRequest = async (uuid: string) => {
        if (uuid === requestSelected?.uuid) return

        const data = await requestProvider.getOne(uuid).catch(e => {
            dispatch(openSnackbar({
                open: true,
                message: e.message || 'Something went wrong',
                variant: 'alert',
                alert: {
                    color: 'error'
                },
                close: false
            }))
            return null
        })
        if (!data) return

        dispatch(addDataRequest(data))
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target
        setFilter(prev => ({ ...prev, [name]: value }))
    }

    const handleOpenCreateModal = () => {
        dispatch(updateModal({
            mode: 'edit',
            open: true
        }))
    }

    const handleOpenViewReceptionistModal = (mode: Exclude<ModalModeType, 'create'>, data: IRequest) => {
        getOneRequest(data.uuid).then(() => {
            dispatch(updateOneRequestModal({
                mode,
                open: true
            }))
        })
    }

    const handleOpenListFormModal = (mode: Exclude<ModalModeType, 'create'>, data: IRequest) => {
        getOneRequest(data.uuid).then(() => {
            dispatch(updateListFormModal({
                mode,
                open: true
            }))
        })
    }

    const handleOpenReevaluateModal = (mode: ModalModeType, _data: IRequest) => {
        dispatch(updateReevaluateModal({
            mode,
            open: true
        }))
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
                                <CustomDateRangePicker keyName="request" onChange={setDateFilter} />
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
                            <Grid item sx={{ paddingRight: "35px" }}>
                                <Button
                                    variant='contained'
                                    sx={{ borderRadius: '25px' }}
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
                    onEdit={handleOpenViewReceptionistModal}
                    onListForm={handleOpenListFormModal}
                    onReevaluate={handleOpenReevaluateModal}
                    filter={{
                        ...generalFilter,
                        search
                    }}
                />

                <CreateCaseModal />
                <ReevaluateModal />
                <ModalReceptionist />
                <SelectDocumentForm />
                <BiomedicalModal />
                <ContextualModal />
                <WhodaForm />
            </MainCard>
        </Page>
    )
}

export default RequestComponentPage