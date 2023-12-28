import { ReactElement, cloneElement } from 'react';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Container, useScrollTrigger } from '@mui/material';
import MenuList from './MenuList';
import useConfig from '@hooks/useThemeConfig';

interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!
  });

  theme.shadows[4] = theme.customShadows.z1;

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const CustomAppBar = () => {
  const theme = useTheme();

  const { container, isLoadingSettings } = useConfig();

  return (
    <ElevationScroll>
      <AppBar
        sx={{
          top: 71,
          bgcolor: theme.palette.background.paper,
          width: '100%',
          height: 62,
          justifyContent: 'center',
          borderTop: `1px solid ${theme.palette.divider}`,
          zIndex: 1098
        }}
      >
        {isLoadingSettings ? null : <Container maxWidth={container ? 'lg' : false}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuList />
          </Box>
        </Container>}
      </AppBar>
    </ElevationScroll>
  );
};

export default CustomAppBar;
