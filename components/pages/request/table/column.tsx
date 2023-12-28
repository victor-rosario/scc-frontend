import { IColumnRequestTableProps } from "./table.interface";
import { ItemChildrenColumnsTableI } from "@components/app/table/table.interface";
import {
    Box,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    useTheme
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EyeIcon from '@mui/icons-material/RemoveRedEye'
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
// import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';

function ColumnRequestTable({ children, onEdit, onReport, onListForm, onReevaluate }: IColumnRequestTableProps) {

    const theme = useTheme();

    const columns: ItemChildrenColumnsTableI<any>[] = [
        {
            title: "Nombre completo",
            css: { paddingLeft: "2rem" },
            render: ({ data }) => (
                <span>{data.fullName}</span>
            )
        },
        {
            title: "Estados",
            render: ({ data }) => (
                <Chip
                    label={data.status}
                    size="small"
                    sx={{
                        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light + 60,
                        color: theme.palette.success.dark
                    }}
                />
            )
        },
        {
            title: "Fecha",
            render: ({ data }) => (
                <span>{new Date(data.date).toLocaleDateString()}</span>
            )
        },
        {
            title: "Número de caso",
            render: ({ data }) => (
                <span>{data.caseNumber}</span>
            )
        },
        {
            title: "Acciones",
            position: "center",
            render: ({ data }: any) => (
                <Box sx={{ pr: 3 }}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                        {/* <Tooltip placement="top" title={"Editar"}>
                            <IconButton
                                color="primary"
                                aria-label={"Editar" || 'Edit'}
                                size="large"
                                onClick={() => onEdit?.('edit', data)}
                            >
                                <EditIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip> */}
                        <Tooltip placement="top" title={"Ver"}>
                            <IconButton
                                color="primary"
                                aria-label={"Ver" || 'View'}
                                size="large"
                                onClick={() => onEdit?.('view', data)}
                            >
                                <EyeIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title={"Evaluar"}>
                            <IconButton
                                color="primary"
                                aria-label={"Evaluar" || 'Forms'}
                                size="large"
                                onClick={() => onListForm?.('view', data)}
                            >
                                <FeedIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title={"Reporte"}>
                            <IconButton
                                color="primary"
                                aria-label={"Reporte" || 'Report'}
                                size="large"
                                onClick={() => onReport?.('view', data)}
                            >
                                <AssessmentIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title={"Reconsideración"}>
                            <IconButton
                                color="primary"
                                aria-label={"Reconsideración" || 'Report'}
                                size="large"
                                onClick={() => onReevaluate?.('view', data)}
                            >
                                <CachedRoundedIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            )
        }
    ]

    return children(columns)
}

export default ColumnRequestTable;
