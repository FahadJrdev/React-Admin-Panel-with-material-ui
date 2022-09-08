/* eslint-disable react/prop-types */
import React from 'react';
import TipoContratoCrud from '../components/CRUD/TipoContratoCrud';

const TipoContrato = ({setAttemptToAddTipoContrato, setAttemptToEditTipoContrato}) => (
    <>
      <TipoContratoCrud setAttemptToAdd={setAttemptToAddTipoContrato} setAttemptToEdit={setAttemptToEditTipoContrato} />
    </>
  )

export default TipoContrato;