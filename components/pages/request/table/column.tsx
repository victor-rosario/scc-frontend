import { IColumnRequestTableProps } from "./table.interface";
import { ItemChildrenColumnsTableI } from "@components/app/table/table.interface";
import {
    Box,
    Chip,
    useTheme
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EyeIcon from '@mui/icons-material/RemoveRedEye'
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import { IRequest, RequestStatusEnum } from "@providers/request/request.interface";
import { Fragment } from "react";
import { REQUEST_TABLE_STATUS_COLUMNS, REQUEST_TABLE_STATUS_LABELS } from "./request.table";
import ButtonMenu from "@components/app/button-menu";
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';


function ColumnRequestTable({
    children,
    onEdit,
    onReport,
    onListForm,
    onReevaluate
}: IColumnRequestTableProps<IRequest>) {

    const theme = useTheme();

    const columns: ItemChildrenColumnsTableI<IRequest>[] = [
        {
            title: "Nombre completo",
            css: { paddingLeft: "2rem" },
            render: ({ data }) => (
                <span>{data?.fullName}</span>
            )
        },
        {
            title: "Estados",
            render: ({ data }) => (
                <Fragment>
                    <Chip
                        label={REQUEST_TABLE_STATUS_LABELS[data!.status || RequestStatusEnum.PROGRESS]}
                        size="small"
                        sx={{
                            ...REQUEST_TABLE_STATUS_COLUMNS(theme)[(data?.status || RequestStatusEnum.PROGRESS) as RequestStatusEnum],
                        }}
                    />
                </Fragment>
            )
        },
        {
            title: "Cita",
            render: ({ data }) => (
                <span>{new Date(data.scheduledAt).toLocaleDateString()}</span>
            )
        },
        {
            title: "Número de caso",
            render: ({ data }) => (
                <span>{data?.caseCode}</span>
            )
        },
        {
            title: "",
            position: "center",
            render: ({ data }) => (
                <Box sx={{ pr: 3 }}>
                    <ButtonMenu
                        label=""
                        icon={<MoreVertTwoToneIcon fontSize="inherit" />}
                        items={[
                            {
                                label: 'Editar',
                                icon: <EditIcon sx={{ fontSize: '1.1rem' }} />,
                                onClick: () => onEdit?.('edit', data)
                            },
                            {
                                label: 'Ver',
                                icon: <EyeIcon sx={{ fontSize: '1.1rem' }} />,
                                onClick: () => onEdit?.('view', data)
                            },
                            {
                                label: 'Evaluar',
                                icon: <FeedIcon sx={{ fontSize: '1.1rem' }} />,
                                onClick: () => onListForm?.('view', data)
                            },
                            {
                                label: 'Reporte',
                                icon: <AssessmentIcon sx={{ fontSize: '1.1rem' }} />,
                                onClick: () => onReport?.('view', data)
                            },
                            {
                                label: 'Reevaluar',
                                icon: <CachedRoundedIcon sx={{ fontSize: '1.1rem' }} />,
                                onClick: () => onReevaluate?.('create', data)
                            }
                        ]}
                    />
                    {/* <Stack direction="row" justifyContent="center" alignItems="center">
                        <Tooltip placement="top" title={"Editar"}>
                            <IconButton
                                color="primary"
                                aria-label={"Editar" || 'Edit'}
                                size="large"
                                onClick={() => onEdit?.('edit', data)}
                            >
                                <EditIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
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
                        <Tooltip placement="top" title={"Reevaluar"}>
                            <IconButton
                                color="primary"
                                aria-label={"Reevaluar" || 'Reevaluate'}
                                size="large"
                                onClick={() => onReevaluate?.('create', data)}
                            >
                                <CachedRoundedIcon sx={{ fontSize: '1.1rem' }} />
                            </IconButton>
                        </Tooltip>
                    </Stack> */}
                </Box>
            )
        }
    ]

    return children(columns)
}

export default ColumnRequestTable;
