import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProposalBuilder from './components/ProposalBuilder';
import MaterialEstimator from './components/MaterialEstimator';
import { Toaster } from 'react-hot-toast';
import { ProposalProvider } from './context/ProposalContext';

function App() {
  return (
    <ProposalProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/proposal" element={<ProposalBuilder />} />
            <Route path="/estimator" element={<MaterialEstimator />} />
          </Routes>
        </div>
        <Toaster position="bottom-right" />
      </div>
    </ProposalProvider>
  );
}

export default App;