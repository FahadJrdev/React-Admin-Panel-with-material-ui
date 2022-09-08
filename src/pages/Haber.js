/* eslint-disable react/prop-types */
import React from 'react';
import HaberCrud from '../components/CRUD/HaberCrud';

const Haber = ({setAttemptToAddHaber, setAttemptToEditHaber}) => (
    <>
      <HaberCrud setAttemptToAdd={setAttemptToAddHaber} setAttemptToEdit={setAttemptToEditHaber} />
    </>
  )

export default Haber;