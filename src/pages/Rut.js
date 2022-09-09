/* eslint-disable react/prop-types */
// import React from 'react';
import RutCrud from '../components/CRUD/RutCrud';

const Rut = ({setAttemptToAddCentro,
              setAttemptToEditCentro,
              setAttemptToAddMantenedor,
              setAttemptToEditMantenedor,
              setAttemptToAddLicencias,
              setAttemptToEditLicencias,
              setAttemptToAddHistorico,
              setAttemptToEditHistorico
            }) => (
    <>
        <RutCrud 
          setAttemptToAddCentro={setAttemptToAddCentro} 
          setAttemptToEditCentro={setAttemptToEditCentro}
          setAttemptToAddMantenedor={setAttemptToAddMantenedor}
          setAttemptToEditMantenedor={setAttemptToEditMantenedor}
          setAttemptToAddLicencias={setAttemptToAddLicencias}
          setAttemptToEditLicencias={setAttemptToEditLicencias}
          setAttemptToAddHistorico={setAttemptToAddHistorico}
          setAttemptToEditHistorico={setAttemptToEditHistorico}
        />
    </>
  )

export default Rut;