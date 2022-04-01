import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterConfirmation from './pages/RegisterConfirmation';
import { AuthProvider, AuthContext } from './contexts/Auth';

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      console.log(authenticated);
      return <Navigate to='/login' />;
    }

    return children;
  };

  const PrivateAdmin = ({ children }) => {
    const { isAdmin } = useContext(AuthContext);

    if (!isAdmin) {
      return <Navigate to='/' />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path='/admin'
            element={
              // <PrivateAdmin>
                <Admin />
              // </PrivateAdmin>
            }
          />
          <Route
            path='/'
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route
            path='/register-confirmation'
            element={<RegisterConfirmation />}
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
export { AuthContext, AuthProvider };
