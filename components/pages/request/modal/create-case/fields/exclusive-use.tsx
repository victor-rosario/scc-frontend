import { Grid, Typography } from "@mui/material"

const ExclusiveTermUse = () => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={2} padding={1}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid container spacing={2} justifyContent={'space-around'} alignItems={'center'}>
                            <Grid container item display={'flex'} justifyContent={'center'} alignItems={'center'} paddingBlock={.1}>
                                <Typography textAlign={'center'} variant="h3">
                                    Solicitud de registro, certificación y valoración de discapacidad
                                </Typography>
                            </Grid>
                            <Grid container item display={'flex'} justifyContent={'center'} alignItems={'center'} paddingBlock={1.5}>
                                <Typography variant="h4" fontWeight={700} textAlign={'center'}>
                                    Este certificado será para uso exclusivo del usuario o representante.
                                </Typography>
                            </Grid>
                            <Grid container item>
                                <Typography variant="h4" fontWeight={400} textAlign={'justify'}>
                                    Certifico que las informaciones rendidas en la presente solicitud y otros documentos requeridos son verídicos y reconozco que, en caso de comprobarse alguna falsedad, es estrictamente mi responsabilidad, y de constatarse tal situación, se invalidará el proceso.
                                </Typography>
                            </Grid>
                            <Grid container item>
                                <Typography variant="h4" fontWeight={400} textAlign={'justify'}>
                                    Por tal razón, al aceptar el presente documento, consiento que, en el marco del proceso de Valoración, Certificación y Registro Continuo de la Discapacidad y con ese único objetivo, puedan corroborar, aclarar e intercambiar las informaciones rendidas y/o deducidas de las evaluaciones médicas y otros documentos sometidos a esos fines, siempre preservando la confidencialidad de dicha información por parte de los actores.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ExclusiveTermUse