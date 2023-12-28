import {
  Box,
  Button,
  FormControl,
  Grid,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  FormLabel
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from '@components/app/extended/AnimateButton';
import Link from '@components/app/Link';
import { MouseEvent, useState } from 'react';
import formValidation from '@utils/validation/formValidation';
import { ErrorFormatterIntoObject } from '@utils/validation/errorFormatter';
import { SignInPayloadI } from '@providers/auth/auth-provider.interface';
import { useRouter } from 'next/router';
import { signInRules } from './login.settings';
import { openSnackbar } from '@redux/slices/ui/snackbar';
import { useAppDispatch } from '@redux/store';

const Login = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  const [formData, setFormData] = useState<SignInPayloadI>({ password: "", email: "" })
  const [errors, setErrors] = useState({} as SignInPayloadI)

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const handleFormValidation = () => {
    const { isValid, errors } = formValidation(formData, signInRules)
    setErrors(ErrorFormatterIntoObject(errors) as SignInPayloadI)
    return isValid
  }

  const requestLogin = async (_payload: SignInPayloadI) => {

    dispatch(
      openSnackbar({
        open: true,
        message: "Login Successfully",
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );

    // router.reload()
    router.push("/")

    // dispatch(
    //   openSnackbar({
    //     open: true,
    //     message: `Error: ${err.message}`,
    //     variant: 'alert',
    //     alert: {
    //       color: 'error'
    //     },

    //     close: true,
    //   })
    // )
  }
  const handleMouseDownPassword = (event: MouseEvent) => {
    event.preventDefault()!;
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!handleFormValidation()) return;
    requestLogin(formData)
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <FormControl
        fullWidth
        error={Boolean(errors.email)}
      >
        <FormLabel htmlFor="outlined-adornment-email-login">Correo electrónico</FormLabel>
        <OutlinedInput
          id="outlined-adornment-email-login"
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          inputProps={{}}
        />
        {errors.email && (
          <FormHelperText error id="standard-weight-helper-text-email-login">
            {errors.email}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl
        fullWidth
        error={Boolean(errors.password)}
        sx={{ paddingTop: 2 }}
      >
        <FormLabel htmlFor="outlined-adornment-password-login">Contraseña</FormLabel>
        <OutlinedInput
          id="outlined-adornment-password-login"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          name="password"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="large"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          inputProps={{}}
          label={"Contraseña"}
        />
        {errors.password && (
          <FormHelperText error id="standard-weight-helper-text-password-login">
            {errors.password}
          </FormHelperText>
        )}
      </FormControl>

      <Grid container alignItems="center" justifyContent="space-between" paddingTop={1}>
        <Grid item>
          <Typography
            variant="subtitle1"
            component={Link}
            href={'/auth/forgot-password'}
            color="secondary"
            sx={{ textDecoration: 'none' }}
          >
            Contraseña olvidada
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <AnimateButton>
          <Button color="primary" fullWidth size="large" type="submit" variant="contained" style={{ borderRadius: 50 }}>
            Iniciar sesión
          </Button>
        </AnimateButton>
      </Box>
    </form>
  );
};

export default Login;
