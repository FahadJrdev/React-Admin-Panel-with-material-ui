import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const logo = (
    <Box sx={{ width: 140, height: 20, ...sx }}>
      <img src='/static/logo.png' alt='logo' width="100%" height="100%"/>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
