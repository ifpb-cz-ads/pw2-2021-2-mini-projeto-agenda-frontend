import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const login = (email, password, token, isAdmin) => {
    setIsAdmin(isAdmin);
    setUser({ email, password, token });
    console.log(user); // Está retornando null
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, isAdmin, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
