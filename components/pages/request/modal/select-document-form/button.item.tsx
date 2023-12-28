import {
    Button,
    Grid,
    Typography,
    useTheme
} from "@mui/material"
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IButtonDocumentFormItem {
    title: string
    onClick: VoidFunction
}

const ButtonDocumentFormItem = ({ title = "default", onClick }: IButtonDocumentFormItem) => {

    const theme = useTheme()

    return (
        <Grid item width={"100%"} justifyContent={'flex-start'} paddingBottom={1}>
            <Button onClick={onClick} sx={{ width: "100%", backgroundColor: theme.palette.primary.light, display: "flex", justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid direction={'row'} container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid container item xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                        <ArticleIcon />
                        <Typography paddingLeft={1} textAlign={'left'} color={theme.palette.primary.main} variant="h5">{title}</Typography>
                    </Grid>
                    <Grid item xs={1} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <ArrowForwardIcon />
                    </Grid>
                </Grid>
            </Button>
        </Grid>
    )
}

export default ButtonDocumentFormItem