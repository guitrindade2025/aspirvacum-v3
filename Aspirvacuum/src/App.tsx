import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import Promocoes from './pages/Promocoes';
import Store from './pages/Store';
import Products from './pages/Products';
import SistemasResidenciais from './pages/SistemasResidenciais';
import SistemasComerciais from './pages/SistemasComerciais';
import SistemasIndustriais from './pages/SistemasIndustriais';
import Instalacao from './pages/Instalacao';
import Manutencao from './pages/Manutencao';
import PoliticaCookies from './pages/PoliticaCookies';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatePresence>
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
                <Route path="/a-empresa" element={<AboutUs />} />
                <Route path="/produtos-aspirvaccum" element={<Products />} />
                <Route path="/contactos" element={<Contactos />} />
                <Route path="/assistencia-tecnica-de-aspiracao-central" element={<TechnicalSupport />} />
                <Route path="/aspiracao-central" element={<MoreInfo />} />
                <Route path="/mais-classificados" element={<MaisClassificados />} />
                <Route path="/destaques" element={<Destaques />} />
                <Route path="/promocoes" element={<Promocoes />} />
                <Route path="/loja" element={<Store />} />
                <Route path="/sistemas-residenciais" element={<SistemasResidenciais />} />
                <Route path="/sistemas-comerciais" element={<SistemasComerciais />} />
                <Route path="/sistemas-industriais" element={<SistemasIndustriais />} />
                <Route path="/instalacao" element={<Instalacao />} />
                <Route path="/manutencao" element={<Manutencao />} />
                <Route path="/politica-cookies" element={<PoliticaCookies />} />
              </Routes>
            </AnimatePresence>
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
