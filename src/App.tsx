import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import { Login } from "@/pages/admin/Login"
import { Dashboard } from "@/pages/admin/Dashboard"
import { ProtectedRoute } from "@/components/admin/ProtectedRoute"
import { AuthProvider } from "@/lib/auth"
import Contactos from './pages/Contactos';
import TechnicalSupport from './pages/TechnicalSupport';
import AboutUs from './pages/AboutUs';
import MoreInfo from './pages/MoreInfo';
import ChatBot from './components/ChatBot';
import { AnimatePresence } from 'framer-motion';
import MaisClassificados from './pages/MaisClassificados';
import Destaques from './pages/Destaques';
import Store from './pages/Store';
import SistemasResidenciais from './pages/SistemasResidenciais';
import SistemasComerciais from './pages/SistemasComerciais';
import SistemasIndustriais from './pages/SistemasIndustriais';
import Instalacao from './pages/Instalacao';
import Manutencao from './pages/Manutencao';
import PoliticaCookies from './pages/PoliticaCookies';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Admin routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Add more admin routes here */}

          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aspirvacuum" element={<AboutUs />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/assistencia-tecnica" element={<TechnicalSupport />} />
          <Route path="/aspiracao-central" element={<MoreInfo />} />
          <Route path="/mais-classificados" element={<MaisClassificados />} />
          <Route path="/destaques" element={<Destaques />} />

          {/* Loja routes */}
          <Route path="/loja" element={<Store />} />
          <Route path="/loja/:categoria" element={<Store />} />

          {/* Sistemas routes */}
          <Route path="/sistemas-residenciais" element={<SistemasResidenciais />} />
          <Route path="/sistemas-comerciais" element={<SistemasComerciais />} />
          <Route path="/sistemas-industriais" element={<SistemasIndustriais />} />
          <Route path="/instalacao" element={<Instalacao />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <ChatBot />
          <CookieBanner />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
