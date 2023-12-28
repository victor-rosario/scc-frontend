import { Link as MuiLink } from '@mui/material';
import Logo from '@components/app/Logo';
import Link from '@components/app/Link';
import config from '@config';

const LogoSection = () => (
  <MuiLink component={Link} href={config.app.url} aria-label="theme-logo">
    <Logo src={"/assets/images/logo.png"} alt='CONADIS' />
  </MuiLink>
)

export default LogoSection;
