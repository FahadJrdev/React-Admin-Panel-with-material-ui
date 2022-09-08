import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Kit from './pages/Kit';
import UserChild from './pages/UserChild';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Expenses from './pages/Expenses';
import Equipments from './pages/Equipments';
import Provider from './pages/Providers';
import Professionals from './pages/Professionals';
import Quotes from './pages/Quotes';
import EquipmentsDetails from './pages/EquipementsDetail';
import Contract from './pages/Contract';
import Documents from './pages/Documents';

// new
import Personal from './pages/Personal';
import Ispre from './pages/Isapre';
import AFP from './pages/AFP';
import Haber from './pages/Haber';
import ClasulasAnxo from './pages/ClausulasAnxo';
import TipoContrato from './pages/TipoContrato';
import Clausulas from './pages/Clausulas';


// ----------------------------------------------------------------------

export default function Router({setAttemptToAddUser, 
                                setAttemptToEditUser, 
                                setAttemptToAddTask, 
                                setAttemptToEditTask, 
                                setAttemptToAddProject, 
                                setAttemptToEditProject, 
                                setAttemptToAddExpense, 
                                setAttemptToEditExpense,
                                setAttemptToAddEquipmentDetails,
                                setAttemptToEditEquipmentDetails,
                                setAttemptToAddContract,
                                setAttemptToEditContract,
                                setAttemptToAddDocument,
                                setAttemptToEditDocument,
                                // new
                                setAttemptToAddPersonal,
                                setAttemptToEditPersonal,
                                setAttemptToAddIspre,
                                setAttemptToEditIspre,
                                setAttemptToAddAFP,
                                setAttemptToEditAFP,
                                setAttemptToAddHaber,
                                setAttemptToEditHaber,
                                setAttemptToAddClausulasAnxo,
                                setAttemptToEditClausulasAnxo,
                                setAttemptToAddTipoContrato,
                                setAttemptToEditTipoContrato,
                                setAttemptToAddClausulas,
                                setAttemptToEditClausulas
                              }) {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'usuarios', element: <User setAttemptToAddUser={setAttemptToAddUser} setAttemptToEditUser={setAttemptToEditUser} /> },
        { path: 'usuarios/:id', element: <UserChild />},
        { path: 'buy', element: <Products /> },
        { path: 'equipment', element: <Equipments /> },
        { path: 'expenses', element: <Expenses setAttemptToAddExpense={setAttemptToAddExpense} setAttemptToEditExpense={setAttemptToEditExpense} /> },
        { path: 'proyectos', element: <Projects setAttemptToAddProject={setAttemptToAddProject} setAttemptToEditProject={setAttemptToEditProject} /> },
        { path: 'tareas', element: <Tasks setAttemptToAddTask={setAttemptToAddTask} setAttemptToEditTask={setAttemptToEditTask} /> },
        { path: 'blog', element: <Blog /> },
        { path: 'provider', element: <Provider /> },
        { path: 'professional', element: <Professionals /> },
        { path: 'quotes', element: <Quotes /> },
        { path: 'document', element: <Documents setAttemptToAddDocument={setAttemptToAddDocument} setAttemptToEditDocument={setAttemptToEditDocument} /> },
        { path: 'contract', element: <Contract setAttemptToAddContract={setAttemptToAddContract} setAttemptToEditContract={setAttemptToEditContract} /> },
        { path: 'equipment/equimentDetails', element: <EquipmentsDetails setAttemptToAddEquipmentDetails={setAttemptToAddEquipmentDetails} setAttemptToEditEquipmentDetails={setAttemptToEditEquipmentDetails} /> },
        // New
        { path: 'personal', element: <Personal setAttemptToAddPersonal={setAttemptToAddPersonal} setAttemptToEditPersonal={setAttemptToEditPersonal} /> },
        { path: 'ispre', element: <Ispre setAttemptToAddIspre={setAttemptToAddIspre} setAttemptToEditIspre={setAttemptToEditIspre} /> },
        { path: 'afp', element: <AFP setAttemptToAddAFP={setAttemptToAddAFP} setAttemptToEditAFP={setAttemptToEditAFP} /> },
        { path: 'haber', element: <Haber setAttemptToAddHaber={setAttemptToAddHaber} setAttemptToEditHaber={setAttemptToEditHaber} /> },
        { path: 'clasulasanxe', element: <ClasulasAnxo setAttemptToAddClausulasAnxo={setAttemptToAddClausulasAnxo} setAttemptToEditClausulasAnxo={setAttemptToEditClausulasAnxo} /> },
        { path: 'tipodecontrato', element: <TipoContrato setAttemptToAddTipoContrato={setAttemptToAddTipoContrato} setAttemptToEditTipoContrato={setAttemptToEditTipoContrato} /> },
        { path: 'clasulas', element: <Clausulas setAttemptToAddClausulas={setAttemptToAddClausulas} setAttemptToEditClausulas={setAttemptToEditClausulas} /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'iniciar', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'kit', element: <Kit /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
