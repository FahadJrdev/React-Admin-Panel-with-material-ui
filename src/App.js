import React ,{useState} from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import {initialNewUser,inputNewUser, 
        initialEditUser, inputEditUser, 
        initialNewTask, inputNewTask, 
        initialEditTask, inputEditTask, 
        initialAddProject, inputAddProject, 
        initialEditProject, inputEditProject, 
        initialAddExpense, inputAddExpense, 
        initialEditExpense, inputEditExpense,
        initialAddEquipmentDetails,inputAddEquipmentDetails,
        initialEditEquipmentDetails,inputEditEquipmentDetails,
        initialAddContract,inputAddContract,
        initialEditContract,inputEditContract,
        initialAddDocument,inputAddDocument,
        initialEditDocument,inputEditDocument,
        intialAddPersonal,inputAddPersonal,
        intialEditPersonal,inputEditPersonal,
        initialAddIspre,inputAddIspre,
        initialEditIspre,inputEditIspre,
        initialAddAFP,inputAddAFP,
        initialEditAFP,inputEditAFP,
        initialAddHaber,inputAddHaber,
        initialEditHaber,inputEditHaber,
        initialAddClausulasAnxo,inputAddClausulasAnxo,
        initialEditClausulasAnxo,inputEditClausulasAnxo,
        initialAddTipoContrato,inputAddTipoContrato,
        initialEditTipoContrato,inputEditTipoContrato,
        initialAddClausulas,inputAddClausulas,
        initialEditClausulas,inputEditClausulas
      } from './jsonJS/formElements';
import NewForm from './template/formTemplate';
// ----------------------------------------------------------------------

export default function App() {
  const [attemptToAddUser, setAttemptToAddUser] = useState("close");
  const [attemptToEditUser, setAttemptToEditUser] = useState("close");
  const [attemptToAddTask, setAttemptToAddTask] = useState("close");
  const [attemptToEditTask, setAttemptToEditTask] = useState("close");
  const [attemptToAddProject, setAttemptToAddProject] = useState("close");
  const [attemptToEditProject, setAttemptToEditProject] = useState("close");
  const [attemptToAddExpense, setAttemptToAddExpense] = useState("close");
  const [attemptToEditExpense, setAttemptToEditExpense] = useState("close");
  const [attemptToAddEquipmentDetails, setAttemptToAddEquipmentDetails] = useState("close");
  const [attemptToEditEquipmetDetails, setAttemptToEditEquipmentDetails] = useState("close");
  const [attemptToAddContract, setAttemptToAddContract] = useState("close");
  const [attemptToEditContract, setAttemptToEditContract] = useState("close");
  const [attemptToAddDocument, setAttemptToAddDocument] = useState("close");
  const [attemptToEditDocument, setAttemptToEditDocument] = useState("close");
  const [attemptToAddPersonal, setAttemptToAddPersonal] = useState("close");
  const [attemptToEditPersonal, setAttemptToEditPersonal] = useState("close");
  const [attemptToAddIspre, setAttemptToAddIspre] = useState("close");
  const [attemptToEditIspre, setAttemptToEditIspre] = useState("close");
  const [attemptToAddAFP, setAttemptToAddAFP] = useState("close");
  const [attemptToEditAFP, setAttemptToEditAFP] = useState("close");
  const [attemptToAddHaber, setAttemptToAddHaber] = useState("close");
  const [attemptToEditHaber, setAttemptToEditHaber] = useState("close");
  const [attemptToAddClausulasAnxo, setAttemptToAddClausulasAnxo] = useState("close");
  const [attemptToEditClausulasAnxo, setAttemptToEditClausulasAnxo] = useState("close");
  const [attemptToAddTipoContrato, setAttemptToAddTipoContrato] = useState("close");
  const [attemptToEditTipoContrato, setAttemptToEditTipoContrato] = useState("close");
  const [attemptToAddClausulas, setAttemptToAddClausulas] = useState("close");
  const [attemptToEditClausulas, setAttemptToEditClausulas] = useState("close");
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      {
        attemptToAddUser === "open"
        ?<NewForm title={`Add USer`} initialValue={initialNewUser} inputFormElements={inputNewUser} setAttemptToAdd={setAttemptToAddUser}/>
        :<></>
      }
      {
        attemptToEditUser === "open"
        ?<NewForm title={`Edit User`} initialValue={initialEditUser} inputFormElements={inputEditUser} setAttemptToEdit={setAttemptToEditUser}/>
        :<></>
      }
      {
        attemptToAddTask === "open"
        ?<NewForm title={`Add Task`} initialValue={initialNewTask} inputFormElements={inputNewTask} setAttemptToAdd={setAttemptToAddTask}/>
        :<></>
      }
      {
        attemptToEditTask === "open"
        ?<NewForm title={`Edit Task`} initialValue={initialEditTask} inputFormElements={inputEditTask} setAttemptToEdit={setAttemptToEditTask}/>
        :<></>
      }
      {
         attemptToAddProject === "open"
         ?<NewForm title={`Add Project`} initialValue={initialAddProject} inputFormElements={inputAddProject} setAttemptToAdd={setAttemptToAddProject}/>
         :<></>
      }
      {
         attemptToEditProject === "open"
         ?<NewForm title={`Edit Project`} initialValue={initialEditProject} inputFormElements={inputEditProject} setAttemptToEdit={setAttemptToEditProject}/>
         :<></>
      }
      {
         attemptToAddExpense === "open"
         ?<NewForm title={`Add Expense`} initialValue={initialAddExpense} inputFormElements={inputAddExpense} setAttemptToAdd={setAttemptToAddExpense}/>
         :<></>
      }
      {
         attemptToEditExpense === "open"
         ?<NewForm title={`Edit Expense`} initialValue={initialEditExpense} inputFormElements={inputEditExpense} setAttemptToEdit={setAttemptToEditExpense}/>
         :<></>
      }
      {
         attemptToAddEquipmentDetails === "open"
         ?<NewForm title={`Add Equipment Detail`} initialValue={initialAddEquipmentDetails} inputFormElements={inputAddEquipmentDetails} setAttemptToAdd={setAttemptToAddEquipmentDetails}/>
         :<></>
      }
      {
         attemptToEditEquipmetDetails === "open"
         ?<NewForm title={`Edit Equipment Detail`} initialValue={initialEditEquipmentDetails} inputFormElements={inputEditEquipmentDetails} setAttemptToEdit={setAttemptToEditEquipmentDetails}/>
         :<></>
      }
      {
         attemptToAddContract === "open"
         ?<NewForm title={`Add Contract`} initialValue={initialAddContract} inputFormElements={inputAddContract} setAttemptToAdd={setAttemptToAddContract}/>
         :<></>
      }
      {
         attemptToEditContract === "open"
         ?<NewForm title={`Edit Contract`} initialValue={initialEditContract} inputFormElements={inputEditContract} setAttemptToEdit={setAttemptToEditContract}/>
         :<></>
      }
      {
         attemptToAddDocument === "open"
         ?<NewForm title={`Add Document`} initialValue={initialAddDocument} inputFormElements={inputAddDocument} setAttemptToAdd={setAttemptToAddDocument}/>
         :<></>
      }
      {
         attemptToEditDocument === "open"
         ?<NewForm title={`Edit Document`} initialValue={initialEditDocument} inputFormElements={inputEditDocument} setAttemptToEdit={setAttemptToEditDocument}/>
         :<></>
      }
      {
         attemptToAddPersonal === "open"
         ?<NewForm title={`Add Personal`} initialValue={intialAddPersonal} inputFormElements={inputAddPersonal} setAttemptToAdd={setAttemptToAddPersonal}/>
         :<></>
      }
      {
         attemptToEditPersonal === "open"
         ?<NewForm title={`Edit Personal`} initialValue={intialEditPersonal} inputFormElements={inputEditPersonal} setAttemptToEdit={setAttemptToEditPersonal}/>
         :<></>
      }
      {
         attemptToAddIspre === "open"
         ?<NewForm title={`Add Ispre`} initialValue={initialAddIspre} inputFormElements={inputAddIspre} setAttemptToAdd={setAttemptToAddIspre}/>
         :<></>
      }
      {
         attemptToEditIspre === "open"
         ?<NewForm title={`Edit Ispre`} initialValue={initialEditIspre} inputFormElements={inputEditIspre} setAttemptToEdit={setAttemptToEditIspre}/>
         :<></>
      }
      {
         attemptToAddAFP === "open"
         ?<NewForm title={`Add AFP`} initialValue={initialAddAFP} inputFormElements={inputAddAFP} setAttemptToAdd={setAttemptToAddAFP}/>
         :<></>
      }
      {
         attemptToEditAFP === "open"
         ?<NewForm title={`Edit AFP`} initialValue={initialEditAFP} inputFormElements={inputEditAFP} setAttemptToEdit={setAttemptToEditAFP}/>
         :<></>
      }
      {
         attemptToAddHaber === "open"
         ?<NewForm title={`Add Haber`} initialValue={initialAddHaber} inputFormElements={inputAddHaber} setAttemptToAdd={setAttemptToAddHaber}/>
         :<></>
      }
      {
         attemptToEditHaber === "open"
         ?<NewForm title={`Edit Haber`} initialValue={initialEditHaber} inputFormElements={inputEditHaber} setAttemptToEdit={setAttemptToEditHaber}/>
         :<></>
      }
      {
         attemptToAddClausulasAnxo === "open"
         ?<NewForm title={`Add Clasulas Anxo`} initialValue={initialAddClausulasAnxo} inputFormElements={inputAddClausulasAnxo} setAttemptToAdd={setAttemptToAddClausulasAnxo}/>
         :<></>
      }
      {
         attemptToEditClausulasAnxo === "open"
         ?<NewForm title={`Edit Clasulas Anxo`} initialValue={initialEditClausulasAnxo} inputFormElements={inputEditClausulasAnxo} setAttemptToEdit={setAttemptToEditClausulasAnxo}/>
         :<></>
      }
      {
         attemptToAddTipoContrato === "open"
         ?<NewForm title={`Add Tipo de Contrato`} initialValue={initialAddTipoContrato} inputFormElements={inputAddTipoContrato} setAttemptToAdd={setAttemptToAddTipoContrato}/>
         :<></>
      }
      {
         attemptToEditTipoContrato === "open"
         ?<NewForm title={`Edit Tipo de Contrato`} initialValue={initialEditTipoContrato} inputFormElements={inputEditTipoContrato} setAttemptToEdit={setAttemptToEditTipoContrato}/>
         :<></>
      }
      {
         attemptToAddClausulas === "open"
         ?<NewForm title={`Add Clasulas`} initialValue={initialAddClausulas} inputFormElements={inputAddClausulas} setAttemptToAdd={setAttemptToAddClausulas}/>
         :<></>
      }
      {
         attemptToEditClausulas === "open"
         ?<NewForm title={`Edit Clasulas`} initialValue={initialEditClausulas} inputFormElements={inputEditClausulas} setAttemptToEdit={setAttemptToEditClausulas}/>
         :<></>
      }
      <Router 
      setAttemptToAddUser={setAttemptToAddUser} 
      setAttemptToEditUser={setAttemptToEditUser} 
      setAttemptToAddTask={setAttemptToAddTask} 
      setAttemptToEditTask={setAttemptToEditTask} 
      setAttemptToAddProject={setAttemptToAddProject} 
      setAttemptToEditProject={setAttemptToEditProject} 
      setAttemptToAddExpense={setAttemptToAddExpense} 
      setAttemptToEditExpense={setAttemptToEditExpense} 
      setAttemptToAddEquipmentDetails={setAttemptToAddEquipmentDetails} 
      setAttemptToEditEquipmentDetails={setAttemptToEditEquipmentDetails} 
      setAttemptToAddContract={setAttemptToAddContract} 
      setAttemptToEditContract={setAttemptToEditContract} 
      setAttemptToAddDocument={setAttemptToAddDocument}
      setAttemptToEditDocument={setAttemptToEditDocument}
      setAttemptToAddPersonal={setAttemptToAddPersonal}
      setAttemptToEditPersonal={setAttemptToEditPersonal}
      setAttemptToAddIspre={setAttemptToAddIspre}
      setAttemptToEditIspre={setAttemptToEditIspre}
      setAttemptToAddAFP={setAttemptToAddAFP}
      setAttemptToEditAFP={setAttemptToEditAFP}
      setAttemptToAddHaber={setAttemptToAddHaber}
      setAttemptToEditHaber={setAttemptToEditHaber}
      setAttemptToAddClausulasAnxo={setAttemptToAddClausulasAnxo}
      setAttemptToEditClausulasAnxo={setAttemptToEditClausulasAnxo}
      setAttemptToAddTipoContrato={setAttemptToAddTipoContrato}
      setAttemptToEditTipoContrato={setAttemptToEditTipoContrato}
      setAttemptToAddClausulas={setAttemptToAddClausulas}
      setAttemptToEditClausulas={setAttemptToEditClausulas}
      />
    </ThemeProvider>
  );
}
