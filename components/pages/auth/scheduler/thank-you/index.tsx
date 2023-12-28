import {
    Grid,
    Typography,
    useTheme
} from "@mui/material"
import { IconStatus } from "@utils/images/image.util"

const ThankYou = () => {

    const theme = useTheme()

    return (
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item justifyContent={'center'} alignItems={'center'} sx={{ pb: 2 }}>
                {IconStatus(100)['check']}
            </Grid>
            <Grid item justifyContent={'center'} alignItems={'center'}>


                <Typography textAlign={'center'} variant='subtitle1' sx={{ fontSize: 30 }}>
                    ¡Gracias por Agendar!
                    <Typography variant="h4" paddingTop={2} textAlign={'center'} fontSize={25} color={theme.palette.primary.main}>
                        Número de caso: XCZ-2023-0001-JS
                    </Typography>
                </Typography>

                <Typography variant="h3" textAlign={'center'} paddingTop={3} fontSize={16}>
                    Miércoles, Diciembre 6
                </Typography>

                <Typography textAlign={'center'} paddingTop={1} fontSize={16}>
                    Revisa tu correo para obtener los detalles.
                </Typography>
            </Grid>
        </Grid>
    )

}

export default ThankYou