import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

interface UserData {
  name: string;
  email: string;
  registrationDate: string; // ISO string
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (password: string, name: string, email: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user was previously logged in
    const storedAuth = localStorage.getItem('ebook_auth');
    const storedUser = localStorage.getItem('ebook_user');

    if (storedAuth === 'true' && storedUser) {
      const parsedUser: UserData = JSON.parse(storedUser);
      
      // Check validity (12 months)
      const regDate = new Date(parsedUser.registrationDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - regDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 365) {
        toast.error('Seu acesso de 12 meses expirou.');
        logout();
      } else {
        setIsAuthenticated(true);
        setUser(parsedUser);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (password: string, name: string, email: string) => {
    // Hardcoded password as requested
    if (password === 'DOZERO2026') {
      const newUser: UserData = {
        name,
        email,
        registrationDate: new Date().toISOString()
      };
      
      localStorage.setItem('ebook_auth', 'true');
      localStorage.setItem('ebook_user', JSON.stringify(newUser));
      
      setIsAuthenticated(true);
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('ebook_auth');
    localStorage.removeItem('ebook_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
