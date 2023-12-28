import Loader from '@components/app/Loader';
import AnimateButton from '@components/app/extended/AnimateButton';
import { LAYOUT_CONST } from '@constants/layout';
import { drawerWidth } from '@constants/theme';
import useConfig from '@hooks/useThemeConfig';
import { AppBar, Box, Button, Container, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import { Theme, styled, useTheme } from '@mui/material/styles';
import { openDrawer } from '@redux/slices/ui/menu';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { Fragment, useEffect, useMemo } from 'react';
import { ToastBar, Toaster, toast } from 'react-hot-toast';
import { MainLayoutPropsI } from '../layout.interface';
import Header from './Header';
import HorizontalBar from './HorizontalBar';
import Sidebar from './Sidebar';
import { setMeData } from '@redux/slices/me';

interface MainStyleProps {
  theme: Theme;
  open: boolean;
  layout: string;
}

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open, layout }: MainStyleProps) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...(!open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shorter + 200
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: layout === LAYOUT_CONST.VERTICAL_LAYOUT ? -(drawerWidth - 72) : '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginTop: 88
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
      marginTop: 88
    }
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.shorter + 200
    }),
    marginLeft: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? '20px' : 0,
    marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up('md')]: {
      marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      marginTop: 88
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      marginTop: 88
    }
  })
}));

const MainLayout = ({ children }: MainLayoutPropsI) => {

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const accountProps = children?.props;

  const dispatch = useAppDispatch();
  const { drawerOpen } = useAppSelector((state) => state.menu);
  const { drawerType, container, layout, isLoadingSettings } = useConfig();

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    } else {
      dispatch(openDrawer(false));
    }
  }, [drawerType]);

  useEffect(() => {
    if (!accountProps) return
    if (!accountProps?.account) return
    if (Object.keys(accountProps?.account || {}).length === 0) return

    dispatch(setMeData({
      account: accountProps.account,
      isSuperAdmin: accountProps.isSuperAdmin || false
    }))
  }, [
    JSON.stringify(children?.props?.account),
  ])

  useEffect(() => {
    if (drawerType === LAYOUT_CONST.DEFAULT_DRAWER) {
      dispatch(openDrawer(true));
    }
  }, []);

  useEffect(() => {
    if (matchDownMd) {
      dispatch(openDrawer(true));
    }
  }, [matchDownMd]);

  const condition = layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd;

  const header = useMemo(
    () => (
      <Toolbar sx={{ p: condition ? '10px' : '16px' }}>
        <Header />
      </Toolbar>
    ),
    [layout, matchDownMd, isLoadingSettings]
  );

  if (isLoadingSettings) return <Loader />

  return (
    <Fragment>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{ bgcolor: theme.palette.background.default }}
        >
          {header}
        </AppBar>

        {layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd && <HorizontalBar />}

        {(layout === LAYOUT_CONST.VERTICAL_LAYOUT || matchDownMd) && <Sidebar />}

        <Main
          theme={theme}
          open={drawerOpen}
          layout={layout}>
          <Container maxWidth={container ? 'lg' : false} {...(!container && { sx: { px: { xs: 0 } } })}>
            {children}
          </Container>
        </Main>
      </Box>

      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                <span>{icon}</span>
                {message}

                {t.type !== 'loading' && (
                  <AnimateButton>
                    <Button onClick={() => toast.dismiss(t.id)} sx={{ width: "0.5rem", height: "1.4rem" }} variant="text">X</Button>
                  </AnimateButton>

                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Fragment>
  );
};

export default MainLayout;
