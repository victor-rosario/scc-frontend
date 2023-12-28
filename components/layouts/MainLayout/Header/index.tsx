// material-ui
import { Avatar, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LAYOUT_CONST } from '@constants/layout';
import useConfig from '@hooks/useThemeConfig';
import { openDrawer } from '@redux/slices/ui/menu';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { IconMenu2 } from '@tabler/icons';
import LogoSection from '../LogoSection';
// import LocalizationSection from './LocalizationSection';
import MobileSection from './MobileSection';
// import NotificationSection from './NotificationSection';
import ProfileSection from './ProfileSection';


const Header = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const { drawerOpen } = useAppSelector((state) => state.menu);
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const { layout } = useConfig();

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        {(layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd)) && (
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              overflow: 'hidden',
              transition: 'all .2s ease-in-out',
              background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
              color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
              }
            }}
            onClick={() => dispatch(openDrawer(!drawerOpen))}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="20px" />
          </Avatar>
        )}
      </Box>

      {/* header search */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <LocalizationSection />
      </Box> */}

      {/* notification & profile */}
      {/* <NotificationSection /> */}
      <Box sx={{ flexGrow: 0.05 }} />
      <ProfileSection />

      {/* mobile header */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MobileSection />
      </Box>
    </>
  );
};

export default Header;
