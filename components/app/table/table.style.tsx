import { TableHead, TableCell, TableRow, styled, tableCellClasses, tableRowClasses } from "@mui/material";

export const StyledTableHead = styled(TableHead)(() => ({
    ['& th:first-of-type']: {
        borderRadius: '1em 0 0 1em',
    },
    ['& th:last-child']: {
        borderRadius: '0 1em 1em 0'
    },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary,
    },
    ['& td:first-of-type']: {
        borderRadius: '1em 0 0 1em'
    },
    ['& td:last-child']: {
        borderRadius: '0 1em 1em 0'
    },
}));