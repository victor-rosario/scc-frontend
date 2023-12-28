import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import RestoreIcon from '@mui/icons-material/Restore';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import UpdateIcon from '@mui/icons-material/Update';
import {
    Box,
    Button,
    ButtonGroup,
    Stack
} from '@mui/material';
import { CrudControlPropsI } from './crud-control.interface';
import { useTheme } from '@mui/material/styles';

const CrudControl = (props: CrudControlPropsI) => {

    const {
        onCreate, onPrint, onDelete, onUpdate,
        showLeftSection = true, showRightSection = true, handleRightAction,
        showSaveButton = false, saveButtonText, showUpdateButton = false, updateButtonText
    } = props;

    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: "center",
                padding: '10px',
                marginBottom: '15px',
                border: `1px solid ${theme.palette.secondary.dark}`,
                backgroundColor: theme.palette.mode === "dark" ? (theme.palette.background.default + 50) : theme.palette.primary.light,
                borderRadius: '5px',
            }}
        >
            <Stack direction="row" spacing={1}>
                {showLeftSection && (
                    <>
                        {onPrint && (
                            <Button
                                onClick={onPrint}
                                variant="outlined"
                                color="primary"
                                style={{ margin: '5px', border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.mode === "dark" ? theme.palette.text.hint : theme.palette.text.dark }}>
                                print
                                <PrintIcon />
                            </Button>
                        )}

                        {onDelete && (
                            <Button onClick={onDelete} variant="outlined" color="error" style={{ margin: '5px' }}>
                                Delete
                                <DeleteIcon />
                            </Button>
                        )}

                        {onCreate && (
                            <ButtonGroup onClick={onCreate} style={{ margin: '5px' }}>
                                <Button>{saveButtonText ?? "Create"}</Button>
                                {showSaveButton && (
                                    <Button>
                                        <SaveAsIcon />
                                        <ArrowDropDownIcon />
                                    </Button>
                                )}
                            </ButtonGroup>
                        )}

                        {onUpdate && (
                            <ButtonGroup onClick={onUpdate} style={{ margin: '5px' }}>
                                <Button>{updateButtonText ?? "Update"}</Button>
                                {showUpdateButton && (
                                    <Button>
                                        <UpdateIcon />
                                        <ArrowDropDownIcon />
                                    </Button>
                                )}
                            </ButtonGroup>
                        )}
                    </>
                )}
            </Stack>

            <Stack direction="row" spacing={1}>
                {showRightSection && (
                    <>
                        <SettingsSuggestIcon onClick={() => handleRightAction?.("settings")} sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
                        <RestoreIcon onClick={() => handleRightAction?.("restore")} sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
                        <SkipPreviousIcon onClick={() => handleRightAction?.("previous")} sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
                        <SkipNextIcon onClick={() => handleRightAction?.("next")} sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
                        <ManageSearchIcon onClick={() => handleRightAction?.("manage")} sx={{ mr: 0.5 }} fontSize="inherit" color="inherit" />
                    </>
                )}
            </Stack>
        </Box>
    )
}

export default CrudControl