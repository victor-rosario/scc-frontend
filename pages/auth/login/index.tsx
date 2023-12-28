import { ReactElement } from 'react';
import { Divider, Grid, Typography } from '@mui/material';

import Link from '@components/app/Link';
import Logo from '@components/app/Logo';
import Layout from '@components/layouts';
import LAYOUT from '@constants/layout';
import AuthWrapper1 from '@components/pages/auth/AuthWrapper1';
import AuthLogin from '@components/pages/auth/login/AuthLogin';
import AuthCardWrapper from '@components/pages/auth/AuthCardWrapper';
import Page from '@components/app/Page';

const Login = () => {

  return (
    <Page title={"Iniciar sesión"}>
      <AuthWrapper1>
        <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh' }}>
          <Grid item container justifyContent="center">
            <AuthCardWrapper>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Grid item >
                      <Link href="#" aria-label="theme-logo">
                        <Logo src={"/assets/images/logo.png"} />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <AuthLogin />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Grid item container direction="column" alignItems="flex-end" xs={12}>
                    <Typography component={Link} href="/register" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                      Crear nueva cuenta
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </AuthCardWrapper>
          </Grid>
        </Grid>
      </AuthWrapper1>
    </Page>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant={LAYOUT.noauth}>{page}</Layout>;
};

export default Login;
