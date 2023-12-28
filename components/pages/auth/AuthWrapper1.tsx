// material-ui
import { styled } from '@mui/material/styles';

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(() => ({
  // backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[100],
  minHeight: '100vh',
  backgroundImage: "url(/assets/images/auth/background.png)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: "cover  "
}));

export default AuthWrapper1;
