import { FormControl, FormControlLabel, Switch } from '@mui/material';
import SubCard from '../cards/SubCard';
import useConfig from '@hooks/useThemeConfig';

const BoxContainer = () => {
  const { container, onChangeContainer } = useConfig();

  return (
    <SubCard title="Box Container">
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormControlLabel
          control={
            <Switch checked={container} onChange={() => onChangeContainer()} inputProps={{ 'aria-label': 'controlled-direction' }} />
          }
          label="Container"
        />
      </FormControl>
    </SubCard>
  );
};

export default BoxContainer;
