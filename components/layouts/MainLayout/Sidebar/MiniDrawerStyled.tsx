// material-ui
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { drawerWidth } from '@constants/theme';

// project import

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  borderRight: 'none',
  zIndex: 1099,
  background: "#eef2f6",
  overflowX: 'hidden',
  boxShadow: theme.palette.mode === 'dark' ? theme.customShadows.z1 : 'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen + 200
  })
});

const closedMixin = (theme: Theme): CSSObject => ({
  borderRight: 'none',
  zIndex: 1099,
  background: "#eef2f6",
  overflowX: 'hidden',
  width: 72,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen + 200
  })
});

// ==============================|| DRAWER - MINI STYLED ||============================== //

const MiniDrawerStyled = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  borderRight: '0px',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default MiniDrawerStyled;
