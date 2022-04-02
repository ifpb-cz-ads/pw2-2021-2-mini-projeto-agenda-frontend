import React, { useContext } from 'react';
import { BrowserRouter,  Routes,  Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterConfirmation from './pages/RegisterConfirmation';
// import { AuthProvider, AuthContext } from './contexts/Auth';

export default function Routs(){

  return (
    <BrowserRouter>
        <Routes>
          <Route
            path='/admin'
            caseSensitive={false} exact 
            element={
              // <PrivateAdmin>
              <Admin />
              // </PrivateAdmin>
            }
          />
          <Route
            path='/' caseSensitive={false} exact element={<Login />}/>
          <Route path='/register' caseSensitive={false} exact element={<Register />} />
          <Route path='/register-confirmation' caseSensitive={false} exact element={<RegisterConfirmation />}/>
          <Route path='/home' caseSensitive={false} exact 
          element={
          // <Private> 
            <Home /> 
          // </Private> 
        } />
        </Routes>
    </BrowserRouter>
  );
};

