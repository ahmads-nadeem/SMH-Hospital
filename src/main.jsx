import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import NewPatient from './NewPatient.jsx';
import Reports from './Reports.jsx';
import EmergencyPatient from './EmergencyPatient.jsx';
import AssetPurchase from './AssetPurchase.jsx';
import Profile from './Profile.jsx';
import Settings from './Settings.jsx';
import Help from './Help.jsx';
import Login from './Login.jsx';
import Database from './Database.jsx';
import TodayPatientDetails from './TodayPatientDetails.jsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ProtectedRoute from './ProtectedRoute.jsx';

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
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
)