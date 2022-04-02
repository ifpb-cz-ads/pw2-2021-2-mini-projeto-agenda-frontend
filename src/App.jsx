import React from 'react';
import AppRoutes from './AppRoutes';
import { Link } from "react-router-dom"

export default function App() {
  
  return (
    <>
      <header>
        <p>Contatos</p>
      
      </header>
      <div className='App'>
        <AppRoutes />
      </div>
    </>
  );
}
