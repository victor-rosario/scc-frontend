import { ReactElement } from 'react'
import { useTheme, styled } from '@mui/material/styles'
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'
import Link from '@components/app/Link'
import LAYOUT from '@constants/layout'
import Layout from '@components/layouts'
import Page from '@components/app/Page'
import { gridSpacing } from '@constants/theme'
import AnimateButton from '@components/app/extended/AnimateButton'
import config from '@config'
import { useTranslation } from 'react-i18next'

const imageBackground = '/assets/images/maintenance/img-error-bg.svg'
const imageDarkBackground = '/assets/images/maintenance/img-error-bg-dark.svg'
const imageBlue = '/assets/images/maintenance/img-error-blue.svg'
const imageText = '/assets/images/maintenance/img-error-text.svg'
const imagePurple = '/assets/images/maintenance/img-error-purple.svg'

// styles
const CardMediaWrapper = styled('div')({
  maxWidth: 720,
  margin: '0 auto',
  position: 'relative'
})

const ErrorWrapper = styled('div')({
  maxWidth: 350,
  margin: '0 auto',
  textAlign: 'center'
})

const ErrorCard = styled(Card)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const CardMediaBlock = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '3s bounce ease-in-out infinite'
})

const CardMediaBlue = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '15s wings ease-in-out infinite'
})

const CardMediaPurple = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  animation: '12s wings ease-in-out infinite'
})

// ==============================|| ERROR PAGE ||============================== //

const Error404 = () => {
  const theme = useTheme()

  const { t: tError } = useTranslation('404')

  return (
    <Page title={tError('title')}>
      <ErrorCard>
        <CardContent>
          <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item xs={12}>
              <CardMediaWrapper>
                <CardMedia
                  component="img"
                  image={theme.palette.mode === 'dark' ? imageDarkBackground : imageBackground}
                  title="Slider5 image"
                />
                <CardMediaBlock src={imageText} title="Slider 1 image" />
                <CardMediaBlue src={imageBlue} title="Slider 2 image" />
                <CardMediaPurple src={imagePurple} title="Slider 3 image" />
              </CardMediaWrapper>
            </Grid>
            <Grid item xs={12}>
              <ErrorWrapper>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Typography variant="h1" component="div">
                      {tError('something-is-wrong')}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">{tError('message')}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button variant="contained" size="large" component={Link} href={config.app.url}>
                        <HomeTwoToneIcon sx={{ fontSize: '1.3rem', mr: 0.75 }} />
                        {tError('home')}
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </ErrorWrapper>
            </Grid>
          </Grid>
        </CardContent>
      </ErrorCard>
    </Page>
  )
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.minimal}>{page}</Layout>
}

export default Error404
