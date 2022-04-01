import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(false);

  const navigate = useNavigate();

  const login = (email, password, token, isAdmin) => {
    setIsAdmin(isAdmin);
    setUser( {email, password, token });
    setToken(`${token}`)
    console.log(isAdmin); // Está retornando null
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, isAdmin, token,login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
