import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#121216]/80 backdrop-blur-md border-t border-[#1F2026] mt-12 relative z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-[#E2B857]/10 p-2 rounded-lg">
              <Code2 className="text-[#E2B857]" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">DevDRM</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/#home" className="text-sm font-medium text-slate-400 hover:text-[#E2B857] transition-colors">Home</Link>
            <Link to="/#about" className="text-sm font-medium text-slate-400 hover:text-[#E2B857] transition-colors">About</Link>
            <Link to="/#experience" className="text-sm font-medium text-slate-400 hover:text-[#E2B857] transition-colors">Experience</Link>
            <Link to="/#contact" className="text-sm font-medium text-slate-400 hover:text-[#E2B857] transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DevDRM. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
