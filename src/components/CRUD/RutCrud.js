/* eslint-disable react/prop-types */
import * as React from 'react';
// import { Formik } from 'formik';
// material
import {
  Stack,
  Container,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// components
import Page from '../Page';
import MantenedordePersonal from './Rut/MantenedordePersonal';
import InformacionGeneral from './Rut/InformacionGeneral';
import CurriculumVitae from './Rut/CurriculumVitae';
import Mantenedor from './Rut/Mantenedor';
import Licencias from './Rut/Licencias';
import Historico from './Rut/Historico';

export default function RutCrud({setAttemptToAddCentro,
                                setAttemptToEditCentro,
                                setAttemptToAddMantenedor,
                                setAttemptToEditMantenedor,
                                setAttemptToAddLicencias,
                                setAttemptToEditLicencias,
                                setAttemptToAddHistorico,
                                setAttemptToEditHistorico
                              }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        event.preventDefault();
        setValue(newValue);
    };

  return (
    <>
      <Page title="Rut">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Rut
            </Typography>
          </Stack>
        </Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Mantenedor de Personal" value="1" />
                    <Tab label=" INFORMACION GENERAL" value="2" />
                    <Tab label="CURRICULUM VITAE" value="3" />
                    <Tab label="MANTENEDOR DE DIRECCIONES" value="4" />
                    <Tab label="LICENCIAS MÉDICAS" value="5" />
                    <Tab label=" HISTORICO" value="6" />
                </TabList>
                </Box>
                <TabPanel value="1">               
                    <MantenedordePersonal/>
                </TabPanel>
                <TabPanel value="2">
                    <InformacionGeneral setAttemptToAddCentro={setAttemptToAddCentro} setAttemptToEditCentro={setAttemptToEditCentro}/>
                </TabPanel>
                <TabPanel value="3">
                  <CurriculumVitae/>
                </TabPanel>
                <TabPanel value="4">
                  <Mantenedor setAttemptToAdd={setAttemptToAddMantenedor} setAttemptToEdit={setAttemptToEditMantenedor} />
                </TabPanel>
                <TabPanel value="5">
                  <Licencias setAttemptToAdd={setAttemptToAddLicencias} setAttemptToEdit={setAttemptToEditLicencias} />
                </TabPanel>
                <TabPanel value="6">
                  <Historico setAttemptToAdd={setAttemptToAddHistorico} setAttemptToEdit={setAttemptToEditHistorico} />
                </TabPanel>
            </TabContext>
        </Box>
      </Page>
    </>
  );
}
