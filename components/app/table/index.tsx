
import { gridSpacing } from "@constants/theme"
import { ObjectKeyDynamicI } from "@interfaces/common/common.interface"
import {
    Box,
    Checkbox,
    Grid,
    Table as MaterialTable,
    Pagination,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@mui/material'
import React, { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { TablePropsI } from "./table.interface"
import { StyledTableCell, StyledTableRow, StyledTableHead } from './table.style'

function Table<T>({ columns, withHover = true, data, pagination, errorMessage }: TablePropsI<T>) {

    const { t: tLayout } = useTranslation('layout')

    const [allCheckboxActive, setAllCheckboxActive] = useState(false)
    const [_data, setData] = useState<ObjectKeyDynamicI[]>([])

    const [page, setPage] = useState(pagination?.page || 1)

    const handleChange = useCallback((_: unknown, value: number) => {
        setPage(value)
        typeof pagination?.handleChange == "function" && (
            pagination.handleChange(value - 1)
        )
    }, [page])

    useEffect(() => {
        setData(data)
    }, [data])

    const handleClickPrimaryCheckbox = useCallback(() => {
        setData(_data.map((item: ObjectKeyDynamicI) => ({
            ...item,
            checked: !allCheckboxActive
        })))

        setAllCheckboxActive(!allCheckboxActive)
    }, [_data, allCheckboxActive])

    const handleChangeStatusCheckbox = useCallback((index: number) => {
        const updated = _data.map((item: ObjectKeyDynamicI, e) => {
            return e == index ? {
                ...item,
                checked: !_data[index].checked
            } : item
        })

        setData(updated)
        setAllCheckboxActive(updated.filter((d: ObjectKeyDynamicI) => (d.checked)).length == _data.length)
    }, [_data, allCheckboxActive])

    return (
        <React.Fragment>
            <TableContainer>
                <MaterialTable>
                    <StyledTableHead>
                        <TableRow>
                            {columns.map((column, i) => (
                                <StyledTableCell
                                    key={i}
                                    style={{
                                        textAlign: column.position,
                                        ...(column?.css ? column.css : {})
                                    }}
                                >
                                    {column.RenderColumn ? (
                                        <column.RenderColumn />
                                    ) : (
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={700}
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            {column.title}
                                        </Typography>
                                    )}

                                    {column.checkbox && (
                                        <Box sx={{ mt: 2 }} onClick={handleClickPrimaryCheckbox}>
                                            <Checkbox
                                                color="primary"
                                                checked={allCheckboxActive}
                                                inputProps={{
                                                    'aria-labelledby': `table-head-cell-checkbox-${i}`
                                                }}
                                            />
                                        </Box>
                                    )}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </StyledTableHead>
                    <TableBody>
                        {_data?.map((item: ObjectKeyDynamicI, i) => (
                            <StyledTableRow hover={withHover} key={i} sx={{ gap: "15px" }}>
                                {columns.map((column, e) => (
                                    <React.Fragment key={`${i}-${e}`}>
                                        {column.key && !column.checkbox && (
                                            <TableCell style={{ ...(column?.css ? column.css : {}) }}>{item[column.key] as any}</TableCell>
                                        )}

                                        {typeof column.render == "function" && !column.checkbox && (
                                            <TableCell style={{ ...(column?.css ? column.css : {}) }}>{column.render({ data: item as T, index: i })}</TableCell>
                                        )}

                                        {column.checkbox && (
                                            <TableCell style={{ ...(column?.css ? column.css : {}) }} padding="checkbox" sx={{ pl: 3 }} onClick={() => handleChangeStatusCheckbox(i)}>
                                                <Checkbox
                                                    color="primary"
                                                    checked={item.checked}
                                                    inputProps={{
                                                        'aria-labelledby': `table-body-cell-checkbox-${e}`
                                                    }}
                                                />
                                            </TableCell>
                                        )}
                                    </React.Fragment>
                                ))}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </MaterialTable>
            </TableContainer>
            {!_data.length && (<>
                <Box sx={{ textAlign: "center", pb: 2 }}>
                    <Box sx={{ p: 2, alignItems: "center", display: "flex", justifyContent: "center" }}>
                        <img width={100} src="/assets/images/icons/empty.svg" alt="no-data-image" />
                    </Box>
                    <Typography variant="h4">{errorMessage || tLayout("table-not-data")}</Typography>
                </Box>
            </>)}
            {pagination && (
                <Grid item xs={12} sx={{ p: 3 }}>
                    <Grid container justifyContent="center" spacing={gridSpacing}>
                        <Grid item>
                            <Pagination
                                color="primary"
                                page={page}
                                count={Math.ceil((pagination.total || 1) / (pagination.maxRowsPerPage || 10))}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            {/* <Button
                           size="large"
                           sx={{ color: theme.palette.grey[900] }}
                           color="secondary"
                           endIcon={<ExpandMoreRoundedIcon />}
                           onClick={handleClick}
                       >
                           10 Rows
                       </Button>
                       <Menu
                           id="menu-list-show-more"
                           open={Boolean(anchorEl)}
                           anchorEl={anchorEl}
                           keepMounted
                           onClose={handleClose}
                           variant="selectedMenu"
                           anchorOrigin={{
                               vertical: 'top',
                               horizontal: 'right'
                           }}
                           transformOrigin={{
                               vertical: 'bottom',
                               horizontal: 'right'
                           }}
                       >
                           <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                           <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                           <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                       </Menu> */}
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    )
}

export default Table