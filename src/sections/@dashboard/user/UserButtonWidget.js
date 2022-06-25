// @mui
import PropTypes from 'prop-types';
import { Card, Typography, Button } from '@mui/material';
// utils

// ----------------------------------------------------------------------

UserAboutWidget.propTypes = {
  color: PropTypes.string,
  total: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function UserAboutWidget({ total, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        p: 0,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette.background.paper,
        ...sx,
      }}
      {...other}
    >
        <Button sx={{ width: '100%', py: 2}}>

      <Typography variant="subtitle1" sx={{ opacity: 0.72, display: 'inline-flex' }}>
        {total}
      </Typography>
        </Button>

    </Card>
  );
}
