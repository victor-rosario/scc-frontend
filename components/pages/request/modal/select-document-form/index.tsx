import { Box, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { updateContextual } from '@redux/slices/whodas/contextual'
import { updateWhodaForm } from '@redux/slices/whodas/form'
import { dispatch, useAppSelector } from '@redux/store'
import ButtonDocumentFormItem from './button.item'
import { resetListFormModal, updateBiomedicalModal } from '@redux/slices/modal'
import { useMemo } from 'react'
import { calculateAge } from '@utils/dates/dates.util'

const SelectDocumentForm = () => {
    const { forms } = useAppSelector((x) => x.modal)
    const { data: requestData } = useAppSelector((x) => x.request)

    const { baby, kid, teen, adult } = useMemo(() => {
        if (!requestData) return { baby: false, kid: false, teen: false, adult: false }

        const { years } = calculateAge(new Date(requestData.birthDate))

        if (years < 2) return { baby: true, kid: false, teen: false, adult: false }
        if (years >= 2 && years < 6) return { baby: false, kid: true, teen: false, adult: false }
        if (years >= 6 && years < 18) return { baby: false, kid: false, teen: true, adult: false }
        if (years >= 18) return { baby: false, kid: false, teen: false, adult: true }

        return { baby: false, kid: false, teen: false, adult: false }
    }, [requestData])

    const handleClose = () => {
        dispatch(resetListFormModal())
    }

    const handleClickBiomedical = () => {
        dispatch(updateBiomedicalModal({ mode: 'edit', open: true }))
    }
    const handleClickContextual = () => {
        dispatch(
            updateContextual({
                modal: {
                    mode: 'create',
                    open: true
                }
            })
        )
    }

    const handleClickWhodas = (title: string) => {
        dispatch(
            updateWhodaForm({
                modal: {
                    mode: 'create',
                    open: true,
                    title
                }
            })
        )
    }

    return (
        <Dialog open={forms.open} maxWidth={'xs'} fullWidth PaperProps={{ sx: { borderRadius: 4 } }}>
            <DialogTitle sx={{ fontSize: 16 }}>
                <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Typography variant="subtitle1">Formularios</Typography>
                            <Typography paddingLeft={1} variant="subtitle2">
                                Selecciona uno formulario para continuar
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={handleClose}>
                            <CloseIcon color="error" />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container borderRadius={1} justifyContent={'center'} alignItems={'center'}></Grid>
                <Grid container paddingTop={1} width={'100%'}>
                    {/* <Typography color='error' textAlign={'center'} variant="subtitle1">Falta documentos</Typography> */}
                    <ButtonDocumentFormItem title="Ficha de información biomadica" onClick={handleClickBiomedical} />
                    <ButtonDocumentFormItem title="Contextual" onClick={handleClickContextual} />
                    {baby && (
                        <ButtonDocumentFormItem
                            title="Whodas Bebé | 0 - 2 años"
                            onClick={() => handleClickWhodas('Whoda Bebé')}
                        />
                    )}
                    {kid && (
                        <ButtonDocumentFormItem
                            title="Whodas Niños | 3 - 5 años"
                            onClick={() => handleClickWhodas('Whoda Niños')}
                        />
                    )}
                    {teen && (
                        <ButtonDocumentFormItem
                            title="Whodas Jóvenes | 6 - 17 años"
                            onClick={() => handleClickWhodas('Whoda Jóvenes')}
                        />
                    )}
                    {adult && (
                        <ButtonDocumentFormItem
                            title="Whodas Adultos | 18+ años"
                            onClick={() => handleClickWhodas('Whoda Adultos')}
                        />
                    )}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default SelectDocumentForm
