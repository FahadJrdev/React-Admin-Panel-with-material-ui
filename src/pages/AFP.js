/* eslint-disable react/prop-types */
import React from 'react';
import AFPCrud from '../components/CRUD/AFPCrud';

const AFP = ({setAttemptToAddAFP, setAttemptToEditAFP}) => (
    <>
      <AFPCrud setAttemptToAdd={setAttemptToAddAFP} setAttemptToEdit={setAttemptToEditAFP} />
    </>
  )

export default AFP;