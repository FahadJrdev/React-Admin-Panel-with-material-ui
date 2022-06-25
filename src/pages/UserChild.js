// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Box } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppWebsiteVisits,
  AppTrafficBySite,
} from '../sections/@dashboard/app';

import {
    UserAboutWidget,
    UserProfileWidget,
    UserButtonWidget,
} from '../sections/@dashboard/user';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Box sx={{ width: `calc(100% + ${theme.spacing(2)})`, height: '40vh', background: '#307FE2', position: 'absolute', left: `calc(-1*${theme.spacing(2)})`}}/>
      <Container maxWidth="xl">

        <Grid container spacing={4}>


          <Grid item xs={12} sm={6}>
            <UserProfileWidget name="Emilio Duarte" total={' '} />
          </Grid>

          <Grid item xs={12} sm={3} md={2}>
            <UserButtonWidget total={'Editar'} />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <UserAboutWidget title="Sobre mi" total={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppTrafficBySite
              title="Portafolio"
              list={[
                {
                  name: 'GitHub',
                  value: 1,
                  icon: <Iconify icon={'akar-icons:github-fill'} color="#555" width={32} height={32} />,
                },
                {
                  name: 'LinkedIN',
                  value: 1,
                  icon: <Iconify icon={'akar-icons:linkedin-box-fill'} color="#555" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Proyectos"
              subheader=" "
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Finalizados',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Activos',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
}
