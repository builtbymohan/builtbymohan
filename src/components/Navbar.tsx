import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';


const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'glass-nav' : 'bg-transparent'
    )}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/#home" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">Mohan Biswas</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#E2B857] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/#contact"
              className="hidden md:flex items-center justify-center h-10 px-5 rounded-full bg-[#E2B857] hover:bg-[#C58F4F] text-[#08080A] text-sm font-bold transition-all shadow-[0_0_15px_rgba(226,184,87,0.3)] hover:shadow-[0_0_25px_rgba(226,184,87,0.5)]">
              Connect Me
            </Link>
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div >

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white transition-colors py-2 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 h-10 px-5 rounded-full bg-[#E2B857] text-[#08080A] text-sm font-bold w-full flex items-center justify-center shadow-lg shadow-[#E2B857]/20">
                Connect Me!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
}
