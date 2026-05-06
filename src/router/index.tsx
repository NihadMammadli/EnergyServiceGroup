import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';
import ProjectsPage from '@/pages/Projects';
import PartnersPage from '@/pages/Partners';
import ContactPage from '@/pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
