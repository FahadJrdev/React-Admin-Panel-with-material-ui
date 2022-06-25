// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Page title="404 Page Not Found">
      <Container>
        <ContentStyle sx={{ textAlign: 'left', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Fuente Principal:
          </Typography>
          <Typography>
            Poppins
          </Typography>
          <Typography  sx={{ textAlign: 'center' }}>
            Codigo de colores:
          </Typography>

            <Box>
                <Box sx={{ height: 48, width: 48, backgroundColor: '#000', borderRadius: 1, mx: 'auto' }}/>
                <Typography  sx={{ textAlign: 'center' }}>
                    #000000
                </Typography>
            </Box>

            <Box>
            <Typography variant='body1'>
            Fuente Principal:
          </Typography>
            <Typography variant='body1'>
            Fuente Principal:
          </Typography>
            <Typography variant='body1'>
            Fuente Principal:
          </Typography>
            <Typography variant='body1'>
            Fuente Principal:
          </Typography>
            </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
