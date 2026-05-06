import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import HomePage from '@/pages/Home';
import MelumatPage from '@/pages/About/Melumat';
import LisenziyalarPage from '@/pages/About/Lisenziyalar';
import SertifikatlarPage from '@/pages/About/Sertifikatlar';
import { ProjectsList } from '@/pages/Projects/ProjectsList';
import PartnersPage from '@/pages/Partners';
import ContactPage from '@/pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'haqqimizda',
        children: [
          { index: true, element: <Navigate to="/haqqimizda/melumat" replace /> },
          { path: 'melumat', element: <MelumatPage /> },
          { path: 'lisenziyalar', element: <LisenziyalarPage /> },
          { path: 'sertifikatlar', element: <SertifikatlarPage /> },
        ],
      },
      {
        path: 'layihelerimiz',
        children: [
          { index: true, element: <Navigate to="/layihelerimiz/tamamlanmis" replace /> },
          { path: 'davam-eden', element: <ProjectsList status="ongoing" /> },
          { path: 'tamamlanmis', element: <ProjectsList status="completed" /> },
        ],
      },
      { path: 'partnyorlar', element: <PartnersPage /> },
      { path: 'elaqe', element: <ContactPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
