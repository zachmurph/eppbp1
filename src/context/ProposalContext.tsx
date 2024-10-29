import React, { createContext, useContext, useState } from 'react';

interface ProposalContextType {
  proposal: any;
  updateProposal: (data: any) => void;
}

const ProposalContext = createContext<ProposalContextType | undefined>(undefined);

export const ProposalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [proposal, setProposal] = useState({});

  const updateProposal = (data: any) => {
    setProposal(data);
  };

  return (
    <ProposalContext.Provider value={{ proposal, updateProposal }}>
      {children}
    </ProposalContext.Provider>
  );
};

export const useProposal = () => {
  const context = useContext(ProposalContext);
  if (context === undefined) {
    throw new Error('useProposal must be used within a ProposalProvider');
  }
  return context;
};