import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    Typography,
    useTheme
} from '@mui/material';
import { closeCaseModal } from '@redux/slices/ui/modalCase';
import { dispatch, useAppSelector } from '@redux/store';
import { IconStatus } from '@utils/images/image.util';
import { Fragment } from 'react';

const CaseModal = () => {
    const {
        message,
        open,
        maxWith,
        buttons,
        logo
    } = useAppSelector(x => x.modalCase)

    const theme = useTheme()

    const handleSubmit = () => {
        dispatch(closeCaseModal())
        buttons.new?.callback && buttons.new?.callback()
    }

    const handleClose = () => {
        dispatch(closeCaseModal())
        buttons.cancel?.callback && buttons.cancel?.callback()
    }

    return (
        <Dialog open={open} maxWidth={maxWith} PaperProps={{ sx: { borderRadius: 4, width: "25%" } }}>
            <DialogContent>
                <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Grid item justifyContent={'center'} alignItems={'center'} sx={{ pb: 2 }}>
                        {IconStatus()[logo || 'check']}
                    </Grid>
                    <Grid item justifyContent={'center'} alignItems={'center'}>

                        {typeof message === 'string' && (
                            <Typography textAlign={'center'} variant='h2' sx={{ fontSize: 35, color: theme.palette.primary.main, }}>
                                {message}
                            </Typography>
                        )}

                        {typeof message != 'string' && (
                            <Fragment>
                                {Object.keys(message).map((x, i) => (
                                    <Typography
                                        key={`modal-case-index#${i}`}
                                        textAlign={'center'}
                                        variant={message[x].variant}
                                        sx={{
                                            ...message[x].style
                                        }}
                                    >
                                        {message[x].message}
                                    </Typography>
                                ))}
                            </Fragment>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
                <Button onClick={handleClose} variant='outlined' sx={{ borderRadius: 50, minWidth: "150px" }} size='large'>
                    {buttons?.cancel?.title || "Cerrar"}
                </Button>
                <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 50, minWidth: "25%", textTransform: "none" }} autoCapitalize=''>
                    {buttons?.new?.title || "Nuevo"}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CaseModal
