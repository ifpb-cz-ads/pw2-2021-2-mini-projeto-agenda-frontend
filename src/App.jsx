import React from 'react';
import AppRoutes from './AppRoutes';

export default function App() {
  const admin = localStorage.getItem('isAdmin');

  return (
    <>
      <header>
        <p>Contatos</p>
        <div>
          {admin ? (
            <i className='bi bi-box-arrow-in-right' />
          ) : (
            <i className='bi bi-box-arrow-in-left' />
          )}
          <i className='bi bi-incognito'></i>
        </div>
      </header>
      <div className='App'>
        <AppRoutes />
      </div>
    </>
  );
}
