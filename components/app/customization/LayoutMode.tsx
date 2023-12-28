// material-ui
import { useTheme } from '@mui/material/styles';
import { FormControl, Grid, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, PaletteMode, useMediaQuery } from '@mui/material';
import SubCard from '../cards/SubCard';
import { LAYOUT_CONST } from '@constants/layout';
import useConfig from '@hooks/useThemeConfig';
import { gridSpacing } from '@constants/theme';

const LayoutMode = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  const { layout, drawerType, navType, rtlLayout, onChangeLayout, onChangeDrawer, onChangeMenuType, onChangeRTL } = useConfig();

  return (
    <SubCard title="Layout">
      <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Mode</FormLabel>
            <RadioGroup
              row
              aria-label="layout"
              value={navType}
              onChange={(e) => onChangeMenuType(e.target.value as PaletteMode)}
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                }}
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Menu Orientation</FormLabel>
            <RadioGroup aria-label="orientaion" value={layout} onChange={(e) => onChangeLayout(e.target.value)} name="row-radio-buttons-group">
              <FormControlLabel
                value="vertical"
                control={<Radio />}
                label="Vertical"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                }}
              />
              <FormControlLabel
                value="horizontal"
                control={<Radio />}
                label="Horizontal"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 28 },
                  '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                }}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          {layout === LAYOUT_CONST.VERTICAL_LAYOUT && !matchDownMD && (
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Drawer</FormLabel>
              <RadioGroup
                aria-label="drawer"
                value={drawerType}
                onChange={(e) => onChangeDrawer(e.target.value)}
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="default"
                  control={<Radio />}
                  label="Default"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                  }}
                />
                <FormControlLabel
                  value="mini-drawer"
                  control={<Radio />}
                  label="Mini-Drawer"
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                    '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                  }}
                />
              </RadioGroup>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Direction</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  checked={rtlLayout}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeRTL(event.target.checked)}
                  inputProps={{ 'aria-label': 'controlled-direction' }}
                />
              }
              label="RTL"
            />
          </FormControl>
        </Grid>
      </Grid>
    </SubCard>
  );
};

export default LayoutMode;
