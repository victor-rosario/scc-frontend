import {
    TableContainer,
    TableRow,
    TableBody,
    TableCell,
    Table,
    Paper,
    Typography
} from '@mui/material'
import { GenderEnum, IRequest } from '@providers/request/request.interface'
import { calculateAge } from '@utils/dates/dates.util'
import { useMemo } from 'react'

interface IReceptionistTableProps {
    request?: IRequest | null
}

const ReceptionistTable = ({ request }: IReceptionistTableProps) => {

    const ageDateTime = useMemo(() => {

        const { days, months, years } = calculateAge(new Date(request?.birthDate || Date.now()))

        if (years) return `${years} años`
        if (months) return `${months} meses`
        if (days) return `${days} días`

        return '0 días'
    }, [request])

    const gender = useMemo(() => {

        const genderData = {
            [GenderEnum.MALE]: 'Masculino',
            [GenderEnum.FEMALE]: 'Femenino',
            [GenderEnum.OTHER]: 'Otro',
        }

        return request?.gender ? genderData[request?.gender] : 'No definido'

    }, [request])

    return (
        <TableContainer component={Paper} sx={{ border: "1.8px solid #dedede", borderRadius: 4 }}>
            <Table>
                <TableBody>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Caso #:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{request?.caseCode}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Cédula: </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{request?.identification}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Edad:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ageDateTime}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Sexo:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{gender}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Fecha de nacimiento:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{new Date(request?.birthDate || Date.now()).toLocaleDateString()}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReceptionistTable