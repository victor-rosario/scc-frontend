import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    useTheme,
    Grid,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReceptionistTable from './table';
import { useState } from 'react';
import { dispatch, useAppSelector } from '@redux/store';
import { resetOneRequestModal } from '@redux/slices/modal';
import FormInput from '@components/app/modal/FormModal/FormInput';
import { documentRequest } from '../create-case/fields';
import { IPayloadRequest } from '@redux/slices/request/request.interface';

const ModalReceptionist = () => {

    const theme = useTheme()

    const { requestInfo } = useAppSelector(x => x.modal)
    const { data } = useAppSelector(x => x.request)

    const [form, setForm] = useState<IPayloadRequest>({} as IPayloadRequest)

    const handleClose = () => {
        dispatch(resetOneRequestModal())
    }

    const handleSubmit = () => {
    }

    return (
        <Dialog open={requestInfo.open} maxWidth={'md'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ color: theme.palette.primary.main, fontWeight: "700", fontSize: 24 }}>
                <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item>
                        {data?.fullName}
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleClose}>
                            <CloseIcon color='error' />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item justifyContent={'center'} alignItems={'center'}>
                        <Grid item container>
                            <Grid item>
                                <Typography sx={{ paddingLeft: 1 }} variant="h6">Datos del paciente</Typography>
                            </Grid>
                            <ReceptionistTable request={data} />
                        </Grid>
                        <Grid container item sx={{ paddingTop: 3 }}>
                            <Grid item>
                                <Typography sx={{ paddingLeft: 1 }} variant="h6">Datos del paciente</Typography>
                            </Grid>
                            <Grid item sx={{ paddingTop: 1 }}>
                                <FormInput<IPayloadRequest>
                                    form={form}
                                    setForm={setForm}
                                    fields={documentRequest}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ paddingRight: "34px" }}>
                <Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, width: "15%" }} size='large'>
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, width: "20%", textTransform: "none" }}>
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalReceptionist
