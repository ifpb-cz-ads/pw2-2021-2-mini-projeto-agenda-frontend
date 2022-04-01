import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../components/Form';
import api from '../../services';

export default function Register() {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api
      .post('/users/register', { username, email, password })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='Form-div'>
      <h1 className='title'>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Nome'
          type='text'
          onChange={(event) => setUsername(event.target.value)}
        />
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

        <Button>Prosseguir</Button>
      </Form>

      <p className='text' style={{ marginTop: '2rem', fontWeight: '400' }}>
        <b style={{ color: 'red', marginRight: '1px' }}>*</b>
        Depois de registrar sua conta cheque seu email e clique
        <br /> no link que enviaremos para confirmar seu cadastro.
      </p>
    </div>
  );
}
