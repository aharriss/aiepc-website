import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  isMember: boolean;
  setIsMember: (value: boolean) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  isMember: false,
  setIsMember: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMember, setIsMember] = useState(() => {
    return localStorage.getItem('aiUnionMember') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('aiUnionMember', isMember.toString());
  }, [isMember]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        isMember,
        setIsMember,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};