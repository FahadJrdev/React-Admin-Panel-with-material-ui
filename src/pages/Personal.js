/* eslint-disable react/prop-types */
import React from 'react';
import PersonalCrud from '../components/CRUD/PersonalCrud';

const Personal = ({setAttemptToAddPersonal, setAttemptToEditPersonal}) => (
    <>
      <PersonalCrud setAttemptToAdd={setAttemptToAddPersonal} setAttemptToEdit={setAttemptToEditPersonal} />
    </>
  )

export default Personal;