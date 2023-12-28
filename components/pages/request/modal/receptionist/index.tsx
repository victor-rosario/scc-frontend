import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    useTheme,
    Grid
} from '@mui/material';
import { EntityReceptionistModalPropsI } from './ModalReceptionist.interface';
import ReceptionistTable from './table';
import { useState } from 'react';
import FormInput from '@components/app/modal/FormModal/FormInput';
import { documentRequest } from '../create-case/fields';

const ModalReceptionist = <T extends object>({
    open,
    onClose,
    onSubmit,
    entityName,
}: EntityReceptionistModalPropsI<T>) => {

    const theme = useTheme()

    const [form, setForm] = useState<any>({})

    const handleClose = () => {
        onClose()
    }

    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'md'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ color: theme.palette.primary.main, fontWeight: "700", fontSize: 24 }}>
                {entityName}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item justifyContent={'center'} alignItems={'center'}>
                        <Grid item container>
                            <Grid item>
                                <Typography sx={{ paddingLeft: 1 }} variant="h6">Datos del paciente</Typography>
                            </Grid>
                            <ReceptionistTable />
                        </Grid>
                        <Grid container item sx={{ paddingTop: 3 }}>
                            <Grid item>
                                <Typography sx={{ paddingLeft: 1 }} variant="h6">Datos del paciente</Typography>
                            </Grid>
                            <Grid item sx={{ paddingTop: 1 }}>
                                <FormInput<any>
                                    form={form}
                                    setForm={setForm}
                                    errors={null}
                                    isEditMode={true}
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
