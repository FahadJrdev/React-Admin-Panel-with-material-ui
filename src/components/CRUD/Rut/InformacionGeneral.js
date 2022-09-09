/* eslint-disable react/prop-types */
import {Typography} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DatosLaborales from './INFORMACIONGENERAL/DatosLaborales';
import Salud from './INFORMACIONGENERAL/Salud';
import Cuenta from './INFORMACIONGENERAL/Cuenta';
import Centro from './INFORMACIONGENERAL/Centro';

const InformacionGeneral = ({setAttemptToAddCentro,setAttemptToEditCentro}) => {
    function ExpandMoreIcon() {
        return(
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" width="20" height="20" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        )
    }
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>Datos Laborales</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <DatosLaborales/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
                <Typography>Previsión / Salud</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Salud/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            >
                <Typography>Cuenta Bancaria</Typography>
            </AccordionSummary>
            <AccordionDetails>     
                <Cuenta/>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
                <Typography>Centro Costo</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Centro setAttemptToAdd={setAttemptToAddCentro} setAttemptToEdit={setAttemptToEditCentro} />
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default InformacionGeneral