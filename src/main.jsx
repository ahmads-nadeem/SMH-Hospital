import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import NewPatient from './pages/NewPatient.jsx';
import Reports from './pages/Reports.jsx';
import EmergencyPatient from './pages/EmergencyPatient.jsx';
import AssetPurchase from './pages/AssetPurchase.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Help from './pages/Help.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Database from './pages/Database.jsx';
import TodayPatientDetails from './pages/TodayPatientDetails.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faPills, faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers, faPills, faCartPlus, faEye);

const Routes = createBrowserRouter(
  [
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/new-patient',
          element: <NewPatient />
        },
        {
          path: '/reports',
          element: <Reports />
        },
        {
          path: '/emergency-patient',
          element: <EmergencyPatient />
        },
        {
          path: '/new-purchase',
          element: <AssetPurchase />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/settings',
          element: <Settings />
        },
        {
          path: '/help',
          element: <Help />
        },
        {
          path: '/database',
          element: <Database />
        },
        {
          path: '/today-patients-details',
          element: <TodayPatientDetails />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={Routes} />
    // {/* <Analytics /> */ }
    // {/* <SpeedInsights /> */ }
  // </StrictMode>
  ,
)