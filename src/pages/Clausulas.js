/* eslint-disable react/prop-types */
import React from 'react';
import ClausulasCrud from '../components/CRUD/ClausulasCrud';

const Clausulas = ({setAttemptToAddClausulas, setAttemptToEditClausulas}) => (
    <>
      <ClausulasCrud setAttemptToAdd={setAttemptToAddClausulas} setAttemptToEdit={setAttemptToEditClausulas} />
    </>
  )

export default Clausulas;