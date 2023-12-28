import { CSSProperties, memo, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';
import { LAYOUT_CONST } from '@constants/layout';
import useConfig from '@hooks/useThemeConfig';
import { drawerWidth } from '@constants/theme';
import { openDrawer } from '@redux/slices/ui/menu';
import { useAppDispatch, useAppSelector } from '@redux/store';

const Sidebar = () => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useAppDispatch();
  const { drawerOpen } = useAppSelector((state) => state.menu);
  const { drawerType } = useConfig();

  const drawerSX: CSSProperties = {
    paddingLeft: drawerOpen ? '16px' : 0,
    paddingRight: drawerOpen ? '16px' : 0,
    marginTop: 0,
    borderRadius: "0 15px 0 0",
    backgroundColor: "#fff",
  };

  const logo = useMemo(
    () => (
      <Box sx={{ display: 'flex', p: 2 }}>
        <LogoSection />
      </Box>
    ),
    []
  );

  const drawerContent = (
    <Box>
      <MenuList />
    </Box>
  );

  const drawer = useMemo(
    () => (
      <>
        {matchDownMd ? (
          <Box sx={drawerSX}>{drawerContent}</Box>
        ) : (
          <PerfectScrollbar
            component="div"
            style={{
              height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
              ...drawerSX
            }}
          >
            {drawerContent}
          </PerfectScrollbar>
        )}
      </>
    ),
    [matchUpMd, drawerOpen, drawerType]
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? drawerWidth : 'auto',
        backgroundColor: "#eef2f6",
      }}
      aria-label="mailbox folders"
    >
      {matchDownMd || (drawerType === LAYOUT_CONST.MINI_DRAWER && drawerOpen) ? (
        <Drawer
          variant={matchUpMd ? 'persistent' : 'temporary'}
          anchor="left"
          open={drawerOpen}
          onClose={() => dispatch(openDrawer(!drawerOpen))}
          sx={{
            '& .MuiDrawer-paper': {
              mt: matchDownMd ? 0 : 11,
              zIndex: 1099,
              width: drawerWidth,
              color: theme.palette.text.primary,
              borderRight: 'none',
            }
          }}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          {matchDownMd && logo}
          <Divider
            sx={{
              backgroundColor: "#EEF2F6",
              height: 10,
              borderColor: "transparent"
            }}
          />
          {drawer}
        </Drawer>
      ) : (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logo}
          <Divider
            sx={{
              backgroundColor: "#EEF2F6",
              height: 10,
              borderColor: "transparent"
            }}
          />
          {drawer}
        </MiniDrawerStyled>
      )}
    </Box>
  );
};

export default memo(Sidebar);
