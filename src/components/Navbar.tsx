import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Calculator, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8" />
            <span className="font-bold text-xl">ProposAI</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/')}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/proposal"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/proposal')}`}
            >
              <FileText className="h-4 w-4" />
              <span>Proposal Builder</span>
            </Link>
            
            <Link
              to="/estimator"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors ${isActive('/estimator')}`}
            >
              <Calculator className="h-4 w-4" />
              <span>Material Estimator</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;