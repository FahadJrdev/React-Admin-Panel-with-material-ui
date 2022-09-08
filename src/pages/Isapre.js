/* eslint-disable react/prop-types */
import React from 'react';
import IspreCrud from '../components/CRUD/IspreCrud';

const Isapre = ({setAttemptToAddIspre, setAttemptToEditIspre}) => (
    <>
      <IspreCrud setAttemptToAdd={setAttemptToAddIspre} setAttemptToEdit={setAttemptToEditIspre} />
    </>
  )

export default Isapre;