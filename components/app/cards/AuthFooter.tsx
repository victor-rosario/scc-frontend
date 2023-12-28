import { Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

const AuthFooter = () => {
  const year = useMemo(() => {
    const now = new Date()
    return now.getFullYear()
  }, [])

  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle2">
        Copyright © {year}
      </Typography>
    </Stack>
  )
};

export default AuthFooter;
