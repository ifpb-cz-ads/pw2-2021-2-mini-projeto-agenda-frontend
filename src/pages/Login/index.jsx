import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import api from '../../services';

import { useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { login } = useContext(AuthContext);

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      await api
        .post('/users/login', { email, password })
        .then((res) => {
          const { token, isAdmin } = res.data;
          // login(email, password, token, isAdmin);

          localStorage.setItem('isAdmin', isAdmin);
          localStorage.setItem("token", token);
          
          console.log(res.data);
          history("/home");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className='Form-div'>
      <h1 className='title'>Logue com sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Email'
          type='email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder='Senha'
          type='password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleSubmit}>Logar</Button>
        <p className='text'>
          Não possui conta ainda?
          <br />
          Clique{' '}
          <a href='/register' className='link'>
            aqui
          </a>{' '}
          para se cadastrar
        </p>
      </Form>
    </div>
  );
}
