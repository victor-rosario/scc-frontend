import {
    Grid,
    Typography,
    useTheme
} from "@mui/material"
import { IRequest } from "@providers/request/request.interface"
import { IconStatus } from "@utils/images/image.util"
import dayjs from "dayjs"
import { useMemo } from "react"

interface IThankYouProps {
    request: IRequest
}

const ThankYou = ({ request }: IThankYouProps) => {

    const theme = useTheme()

    const datetime = useMemo(() => {
        const parsedDate = dayjs(request.scheduledAt);

        const dayOfWeek = parsedDate.format('dddd');
        const month = parsedDate.format('MMMM');
        const dayOfMonth = parsedDate.format('D');

        return `${dayOfWeek}, ${month} ${dayOfMonth}`
    }, [request])

    const dateHours = useMemo(() => {
        const time = new Date(request.scheduledAt)
        const actualHour = time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        time.setHours(time.getHours() + 1)

        const futureHour = time.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        return `${actualHour} - ${futureHour}`

    }, [request])

    return (
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Grid item justifyContent={'center'} alignItems={'center'} sx={{ pb: 2 }}>
                {IconStatus(100)['check']}
            </Grid>
            <Grid item justifyContent={'center'} alignItems={'center'}>
                <Typography textAlign={'center'} variant='subtitle1' sx={{ fontSize: 30 }}>
                    ¡Gracias por Agendar!
                    <Typography variant="h4" paddingTop={2} textAlign={'center'} fontSize={25} color={theme.palette.primary.main}>
                        Número de caso: {request.caseCode}
                    </Typography>
                </Typography>

                <Typography variant="h3" textAlign={'center'} paddingTop={3} fontSize={16}>
                    {datetime}
                    <Typography variant="h3" textAlign={'center'} paddingTop={1} fontSize={16}>
                        {dateHours}
                    </Typography>
                </Typography>

                <Typography textAlign={'center'} paddingTop={1} fontSize={16}>
                    Revisa tu correo para obtener los detalles.
                </Typography>
            </Grid>
        </Grid>
    )

}

export default ThankYou