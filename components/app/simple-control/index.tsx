import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import {
    Button,
    Grid,
    IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SimpleControl = ({ onAdd }: { onAdd: () => void }) => {

    const theme = useTheme();

    return (
        <Grid
            container
            spacing="2"
            style={{
                border: `1px solid ${theme.palette.secondary.dark}`,
                backgroundColor: theme.palette.mode === "dark" ? (theme.palette.background.default + 50) : theme.palette.primary.light,
                borderRadius: '5px',
                padding: '5px 5px'
            }}
        >
            <Grid container spacing="2">
                <Grid item xs={8} style={{ textAlign: 'left' }}>
                    <IconButton
                        size="medium"
                        title="configuration"
                        color="inherit"
                    >
                        <SettingsSuggestTwoToneIcon fontSize="medium" />
                    </IconButton>
                </Grid>
                <Grid item xs={4} textAlign="right">
                    <Button
                        onClick={() => onAdd()}
                        style={{
                            marginTop: '1px', marginRight: '1px',
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.text.hint
                        }}
                        variant="outlined"
                        endIcon={<AddCircleOutlineSharpIcon />}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SimpleControl