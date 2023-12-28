import {
    TableContainer,
    TableRow,
    TableBody,
    TableCell,
    Table,
    Paper,
    Typography
} from '@mui/material'
import { ONE_REQUEST } from '../../../../../../dummy/request.data'

const ReceptionistTable = () => {

    return (
        <TableContainer component={Paper} sx={{ border: "1.8px solid #dedede", borderRadius: 4 }}>
            <Table>
                <TableBody>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Caso #:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ONE_REQUEST.caseNumber}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Cédula: </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ONE_REQUEST.identification}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Edad:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ONE_REQUEST.age} años</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Sexo:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ONE_REQUEST.gender}</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow hover>
                        <TableCell>
                            <Typography>Fecha de nacimiento:</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>{ONE_REQUEST.date}</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReceptionistTable