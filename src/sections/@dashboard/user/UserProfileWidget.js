// @mui
import PropTypes from 'prop-types';
import { Card, Typography, Grid, Container, Box } from '@mui/material';
// utils
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

UserAboutWidget.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function UserAboutWidget({ name, total, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'left',
        paddingTop: '10px',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette.background.paper,
        ...sx,
      }}
      {...other}
    >
        <Container>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <Box component={'img'} src='/static/mock-images/avatars/avatar_15.jpg' sx = {{
                        borderRadius: '50%',
                        border: '7px solid #C4CDD5',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'contain',
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <Box my={2}>
                        <Typography variant="h4">{name}</Typography>
                        <Typography variant="body1">Ing. Civil</Typography>
                    </Box>

                    <Typography variant="subtitle2">Correo</Typography>
                    <Typography variant="body2">{faker.internet.email()}</Typography>
                    <Typography variant="subtitle2">Telefono</Typography>
                    <Typography variant="body2">{faker.phone.phoneNumber()}</Typography>
                    <Typography variant="subtitle2">Edad</Typography>
                    <Typography variant="body2">{faker.datatype.number(50)}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <Box>
                        <Typography variant='h3' sx={{
                            color: (theme) => theme.palette.primary.main,
                        }}>
                            05
                        </Typography>
                        <Typography variant='subtitle1'>
                            Proyectos
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='h3' sx={{
                            color: (theme) => theme.palette.primary.main,
                        }}>
                            12
                        </Typography>
                        <Typography variant='subtitle1'>
                            Tareas
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Card>
  );
}
