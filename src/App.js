import React ,{useState} from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import {initialNewUser,
        inputNewUser, 
        initialEditUser, 
        inputEditUser, 
        initialNewTask, 
        inputNewTask, 
        initialEditTask, 
        inputEditTask, 
        initialAddProject, 
        inputAddProject, 
        initialEditProject, 
        inputEditProject, 
        initialAddExpense, 
        inputAddExpense, 
        initialEditExpense, 
        inputEditExpense,
        initialAddEquipmentDetails,
        inputAddEquipmentDetails,
        initialEditEquipmentDetails,
        inputEditEquipmentDetails,
        initialAddContract,
        inputAddContract,
        initialEditContract,
        inputEditContract,
        initialAddDocument,
        inputAddDocument,
        initialEditDocument,
        inputEditDocument,
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
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      {
        attemptToAddUser === "open"
        ?<NewForm title={`Add USer`} initialValue={initialNewUser} inputFormElements={inputNewUser} setAttemptToAddUser={setAttemptToAddUser}/>
        :<></>
      }
      {
        attemptToEditUser === "open"
        ?<NewForm title={`Edit User`} initialValue={initialEditUser} inputFormElements={inputEditUser} setAttemptToEditUser={setAttemptToEditUser}/>
        :<></>
      }
      {
        attemptToAddTask === "open"
        ?<NewForm title={`Add Task`} initialValue={initialNewTask} inputFormElements={inputNewTask} setAttemptToAddTask={setAttemptToAddTask}/>
        :<></>
      }
      {
        attemptToEditTask === "open"
        ?<NewForm title={`Edit Task`} initialValue={initialEditTask} inputFormElements={inputEditTask} setAttemptToEditTask={setAttemptToEditTask}/>
        :<></>
      }
      {
         attemptToAddProject === "open"
         ?<NewForm title={`Add Project`} initialValue={initialAddProject} inputFormElements={inputAddProject} setAttemptToAddProject={setAttemptToAddProject}/>
         :<></>
      }
      {
         attemptToEditProject === "open"
         ?<NewForm title={`Edit Project`} initialValue={initialEditProject} inputFormElements={inputEditProject} setAttemptToEditProject={setAttemptToEditProject}/>
         :<></>
      }
      {
         attemptToAddExpense === "open"
         ?<NewForm title={`Add Expense`} initialValue={initialAddExpense} inputFormElements={inputAddExpense} setAttemptToAddExpense={setAttemptToAddExpense}/>
         :<></>
      }
      {
         attemptToEditExpense === "open"
         ?<NewForm title={`Edit Expense`} initialValue={initialEditExpense} inputFormElements={inputEditExpense} setAttemptToEditProject={setAttemptToEditExpense}/>
         :<></>
      }
      {
         attemptToAddEquipmentDetails === "open"
         ?<NewForm title={`Add Equipment Detail`} initialValue={initialAddEquipmentDetails} inputFormElements={inputAddEquipmentDetails} setAttemptToEditProject={setAttemptToAddEquipmentDetails}/>
         :<></>
      }
      {
         attemptToEditEquipmetDetails === "open"
         ?<NewForm title={`Edit Equipment Detail`} initialValue={initialEditEquipmentDetails} inputFormElements={inputEditEquipmentDetails} setAttemptToEditProject={setAttemptToEditEquipmentDetails}/>
         :<></>
      }
      {
         attemptToAddContract === "open"
         ?<NewForm title={`Add Contract`} initialValue={initialAddContract} inputFormElements={inputAddContract} setAttemptToEditProject={setAttemptToAddContract}/>
         :<></>
      }
      {
         attemptToEditContract === "open"
         ?<NewForm title={`Edit Contract`} initialValue={initialEditContract} inputFormElements={inputEditContract} setAttemptToEditProject={setAttemptToEditContract}/>
         :<></>
      }
      {
         attemptToAddDocument === "open"
         ?<NewForm title={`Add Document`} initialValue={initialAddDocument} inputFormElements={inputAddDocument} setAttemptToEditProject={setAttemptToAddDocument}/>
         :<></>
      }
      {
         attemptToEditDocument === "open"
         ?<NewForm title={`Edit Document`} initialValue={initialEditDocument} inputFormElements={inputEditDocument} setAttemptToEditProject={setAttemptToEditDocument}/>
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
      />
    </ThemeProvider>
  );
}
