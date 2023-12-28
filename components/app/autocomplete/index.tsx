import React, { useCallback, useMemo } from "react"
import { useState } from "react"
import { AutoCompletePropsI } from "./autocomplete.interface"
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import { Alert, Autocomplete, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, Grid, IconButton, TextField } from "@mui/material"

const AutoComplete = ({ options, variant, ComponentAddItem, errorMessage, label, handleClick, disabled, autoComplete, onChange, value }: AutoCompletePropsI) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [openDialog, setOpenDialog] = React.useState(false)

    const selected = useMemo(() => options.find(o => o.value == value || o.title === value), [options])

    const activeDialog = useMemo(() => (ComponentAddItem && !disabled ? true : false), [ComponentAddItem, disabled])

    const handleCloseDialog = useCallback(() => {
        setOpenDialog(false)
    }, [])

    const handleOpenDialog = useCallback(() => {
        setOpenDialog(true)
    }, [])

    const handleGetData = () => {
        setLoading(true)
        handleClick(() => {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        })
    }

    return (
        <React.Fragment>
            {ComponentAddItem ? (
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                    fullScreen
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <Alert style={{ textAlign: 'center' }} severity="info">
                        This is a modal type form, once the process is finished you must close it, if you leave the form you will lose the changes you have in the parent form.
                    </Alert>
                    <DialogContent>
                        <DialogContentText tabIndex={-1}>
                            Document
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            ) : null}

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Autocomplete
                        open={open}
                        disabled={disabled}
                        onOpen={() => {
                            handleGetData()
                            setOpen(true)
                        }}
                        onClose={() => {
                            setOpen(false)
                        }}
                        isOptionEqualToValue={(option, value) => option?.title === value?.title}
                        getOptionLabel={(option) => option.title}
                        value={selected}
                        options={options}
                        loading={loading}
                        fullWidth
                        size="medium"
                        autoComplete={autoComplete}
                        onChange={(_event, data) => {
                            data && onChange(data)
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                variant={variant}
                                error={errorMessage ? true : false}
                                helperText={errorMessage}
                                fullWidth
                                size="medium"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <div>
                                            {loading ? <CircularProgress color="inherit" size={20} style={{
                                                position: "relative",
                                                top: !activeDialog ? -5 : -4,
                                                right: activeDialog ? 5 : 0
                                            }} /> : null}
                                            {params.InputProps.endAdornment}
                                            {activeDialog ? (
                                                <IconButton size="small" onClick={handleOpenDialog} aria-label="Agregar" style={{
                                                    position: "relative",
                                                    top: -10
                                                }} >
                                                    <AddCircleTwoToneIcon titleAccess="Add" fontSize="small" />
                                                </IconButton>
                                            ) : null}
                                        </div>
                                    )
                                }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AutoComplete