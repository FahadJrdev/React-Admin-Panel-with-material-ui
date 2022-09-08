/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Toolbar, Button, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// component
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------

ListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export function ListToolbar({ numSelected, filterName, onFilterName, setAttemptToAdd }) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <>
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Buscar usuario..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <span onClick={()=>{setAttemptToAdd("open")}} className='add-new-user'><Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Nuevo usuario
          </Button></span>
        </>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
