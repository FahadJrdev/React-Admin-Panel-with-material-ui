// @mui
import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

UserAboutWidget.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function UserAboutWidget({ title, total, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        p: 6,
        boxShadow: 0,
        textAlign: 'left',
        paddingTop: '10px',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette.background.paper,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h4" sx={{ opacity: 1, display: 'inline-flex' }} paragraph>
        {title}
      </Typography>

      <Typography variant="body1" sx={{ color: 'text.secondary' }}>{total}</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>{total}</Typography>

    </Card>
  );
}
