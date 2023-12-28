import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Typography
} from "@mui/material";
import Image from "next/image";
import { EntityUploadDocumentFormModalPropsI } from './UploadDocumentForm.interface';

const UploadDocumentForm = ({ open, onClose, onClickForm }: EntityUploadDocumentFormModalPropsI) => {
    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth={'xs'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ fontSize: 16 }}>
                Selecciona uno para continuar
            </DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container spacing={1} flex={1} justifyContent={'space-evenly'} alignItems={'center'}>
                        {/* <Grid item>
                            <Button
                                disabled
                                type="button"
                                onClick={onClickDocument}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    cursor: "not-allowed"
                                }}
                            >
                                <Image
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                    src="/assets/images/modal/add-document-disabled.svg"
                                    alt="Documento"
                                />
                                <Typography textAlign={'center'} variant="h2">Documento</Typography>
                            </Button>
                        </Grid> */}
                        <Grid item>
                            <Button
                                type="button"
                                onClick={onClickForm}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}
                            >
                                <Image loading="lazy" width={100} height={100} src="/assets/images/modal/add-form.svg" alt="Formulario" />
                                <Typography textAlign={'center'} variant="h2">Formulario</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center", alignItems: "center" }}>
                <Button onClick={handleClose} variant="contained" sx={{ borderRadius: 50, width: "30%" }}>
                    Volver
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UploadDocumentForm