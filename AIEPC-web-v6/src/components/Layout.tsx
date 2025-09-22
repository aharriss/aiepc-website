import React from 'react';
import Navigation from './Navigation';
import { AppProvider } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
        <Navigation />
        <div className="pt-20 flex-1">
          {children}
        </div>
        <footer className="bg-white py-12 px-6 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-[#00308f] text-lg mb-4">AI Union</h3>
                <p className="text-[#00308f] text-sm">
                  Protecting workers' rights in the age of artificial intelligence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#00308f] mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Home</a></li>
                  <li><a href="/members" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Members</a></li>
                  <li><a href="/companies" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Companies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#00308f] mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="/legal-center" className="text-[#00308f] hover:text-[#5D8AA8] text-sm">Legal Center: Terms of Use, Privacy Policy, Refund Policy and Organizing Disclaimer</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#00308f] mb-3">Contact</h4>
                <p className="text-[#00308f] text-sm">Email: info@aiepc.org</p>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
              <p className="text-[#00308f] text-sm">&copy; 2025 AI Union. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
};
export default Layout;