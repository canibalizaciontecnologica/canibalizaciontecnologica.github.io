import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RedirectTo404 from './components/common/RedirectTo404.tsx'
import TagsLayout from './layouts/TagsLayout.tsx'

import routesJson from './routes.json';
import { RouteFromJson, RouteInterface } from './interfaces/RouteInterface.ts'
import { BaseLayoutProps } from './interfaces/LayoutInterface.ts'
import React from 'react'
import BackButton from './components/common/BackButton.tsx'
import NotFound from './components/common/NotFound.tsx'
import Portada from './components/pages/Portada.tsx'

const TablaContenidos = lazy(() => import('./components/pages/TablaContenidos.tsx'));
const Playlist = lazy(() => import('./components/pages/Playlist.tsx'));
const BannerLayout = lazy(() => import('./layouts/BannerLayout.tsx'));
const CenterImageLayout = lazy(() => import('./layouts/CenterImageLayout.tsx'));
const TwoColumnLayout = lazy(() => import('./layouts/TwoColumnLayout.tsx'));
const LeftLateralBannerLayout = lazy(() => import('./layouts/LeftLateralBannerLayout.tsx'));
const CenterContentLayout = lazy(() => import('./layouts/CenterContentLayout.tsx'));
const LeftLateralImageLayout = lazy(() => import('./layouts/LeftLateralImageLayout.tsx'));
const SinopsisLayout = lazy(() => import('./layouts/SinopsisLayout.tsx'));
const LeftPrimaryBannerLayout = lazy(() => import('./layouts/LeftPrimaryBannerLayout.tsx'));
const RightPrimaryBannerLayout = lazy(() => import('./layouts/RightPrimaryBannerLayout.tsx'));
const GuiaTurismoLayout = lazy(() => import('./layouts/GuiaTurismoLayout.tsx'));
const PijaoLayout = lazy(() => import('./layouts/PijaoLayout.tsx'));
const EmpresasLayout = lazy(() => import('./layouts/EmpresasLayout.tsx'));
const ExperienciasLayout = lazy(() => import('./layouts/ExperienciasLayout.tsx'));
const ServiciosLayout = lazy(() => import('./layouts/ServiciosLayout.tsx'));
const SalaminaLayout = lazy(() => import('./layouts/SalaminaLayout.tsx'));
const VeneciaLayout = lazy(() => import('./layouts/VeneciaLayout.tsx'));
const RisaraldaLayout = lazy(() => import('./layouts/RisaraldaLayout.tsx'));
const FullCenterImageLayout = lazy(() => import('./layouts/FullCenterImageLayout.tsx'));
const DestacadasLayout = lazy(() => import('./layouts/DestacadasLayout.tsx'));
const HalfLayout = lazy(() => import('./layouts/HalfLayout.tsx'));

const componentMap: { [key: string]: React.ReactElement<BaseLayoutProps> } = {
  TablaContenidos: <TablaContenidos />,
  Playlist: <Playlist />,
  BannerLayout: <BannerLayout />,
  CenterImageLayout: <CenterImageLayout />,
  TwoColumnLayout: <TwoColumnLayout />,
  LeftLateralBannerLayout: <LeftLateralBannerLayout />,
  CenterContentLayout: <CenterContentLayout />,
  LeftLateralImageLayout: <LeftLateralImageLayout />,
  SinopsisLayout: <SinopsisLayout />,
  LeftPrimaryBannerLayout: <LeftPrimaryBannerLayout />,
  RightPrimaryBannerLayout: <RightPrimaryBannerLayout />,
  PijaoLayout: <PijaoLayout />,
  GuiaTurismoLayout: <GuiaTurismoLayout />,
  EmpresasLayout: <EmpresasLayout />,
  ExperienciasLayout: <ExperienciasLayout />,
  ServiciosLayout: <ServiciosLayout />,
  SalaminaLayout: <SalaminaLayout />,
  VeneciaLayout: <VeneciaLayout />,
  RisaraldaLayout: <RisaraldaLayout />,
  FullCenterImageLayout: <FullCenterImageLayout />,
  DestacadasLayout: <DestacadasLayout />,
  HalfLayout: <HalfLayout />,
};

// Mapear el JSON a un array de RouteInterface. Si el componente no existe se utiliza RedirectTo404.
const routes: RouteInterface[] = (routesJson as RouteFromJson[]).map((route: RouteFromJson) => {
  let element = <NotFound name={route.name} />;
  try {
    element = React.cloneElement(
      componentMap[route.component] as React.ReactElement<BaseLayoutProps> || <NotFound name={route.name} />,
      { route: route, }
    );
  } catch (error) {
    console.error(`Error al cargar el componente ${route.component}: ${error}`);
  }
  return {
    data: route,
    element: element,
  };
});

// path="/" + rodandoporeleje/"
const basePath = import.meta.env.VITE_BASE_PATH || '/';
console.log('basePath:', basePath);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={basePath} element={
          <Suspense fallback={<Portada />}>
            <App routes={routes} />
          </Suspense>
        } />
        {routes.map((route, index) => (
          <Route key={index} path={`${basePath}${route.data.name}`} element={
            <Suspense fallback={<Portada />}>
              <TagsLayout route={route.data}><BackButton section={route.data.name} />{route.element}</TagsLayout>
            </Suspense>} />
        ))}
        <Route path="*" element={<RedirectTo404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)