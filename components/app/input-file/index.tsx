import { MuiFileInput, MuiFileInputProps } from "mui-file-input"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close'
import { InputAdornment } from "@mui/material"

const InputFile = (props: MuiFileInputProps<any>) => {

    return (
        <MuiFileInput
            fullWidth
            inputProps={{
                accept: ".jpg, .jpeg, .png, .pdf",
            }}
            clearIconButtonProps={{
                title: "Remove",
                children: <CloseIcon fontSize="small" />
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <PictureAsPdfIcon color="error" />
                    </InputAdornment>
                )
            }}
            {...props}
        />
    )

}

export default InputFile