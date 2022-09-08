/* eslint-disable react/prop-types */
import React from 'react';
import ClausulasAnxoCrud from '../components/CRUD/ClausulasAnxoCrud';

const ClasulasAnxo = ({setAttemptToAddClausulasAnxo, setAttemptToEditClausulasAnxo}) => (
    <>
      <ClausulasAnxoCrud setAttemptToAdd={setAttemptToAddClausulasAnxo} setAttemptToEdit={setAttemptToEditClausulasAnxo} />
    </>
  )

export default ClasulasAnxo;