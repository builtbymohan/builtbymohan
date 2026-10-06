import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MouseTrail } from './components/MouseTrail';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080A] text-[#F3F4F6] selection:bg-[#E2B857]/30">
      <MouseTrail />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#E2B857]/5 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-[#C58F4F]/5 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </div>
  );
}
