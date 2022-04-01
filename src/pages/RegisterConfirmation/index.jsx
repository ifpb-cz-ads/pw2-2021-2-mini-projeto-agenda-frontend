import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services';

export default function RegisterConfirmation() {
  const findParams = useLocation();
  const params = new URLSearchParams(findParams.search);
  const token = params.get('token');

  async function accountConfirmation() {
    await api
      .get(`users/confirmation?token=${token}`)
      .then((res) => console.log(res.data))
      .then((err) => console.error(err));
  }

  accountConfirmation();

  return (
    <>
      <h1 className='title' style={{ fontSize: '1.2rem', fontWeight: '400' }}>
        Parabéns! Você acaba de confirmar seu cadastro
        <br />
        Agora clique <Link to='/login'>aqui</Link> para fazer o login
      </h1>
    </>
  );
}
