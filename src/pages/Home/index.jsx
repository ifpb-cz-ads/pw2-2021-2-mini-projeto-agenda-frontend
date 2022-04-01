import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { Button, CancelButton } from '../../components/Button';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import ContactBox from '../../components/ContactBox';
import api from '../../services';
import '../../App.css';

export default function Home() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const { user } = useContext(AuthContext);

  async function saveContact(e) {
    e.preventDefault();

    await api
      .post(
        '/contato/register',
        { nome, telefone },
        {
          headers: {
            Authorization: user.token,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    setIsContactFormVisible(false);
    setIsButtonVisible(true);
  }

  return (
    <>
      <p className='title'>Crie, edite e gerencie seus contatos</p>

      {isButtonVisible && (
        <div className='Add-button'>
          <Button
            onClick={() => {
              setIsContactFormVisible(true);
              setIsButtonVisible(false);
            }}
          >
            Novo Contato
          </Button>
        </div>
      )}

      {isContactFormVisible && (
        <Form onSubmit={saveContact} style={{ width: '25vw' }}>
          <Input
            placeholder='Nome'
            type='text'
            onChange={(event) => setNome(event.target.value)}
          />
          <Input
            placeholder='Telefone'
            type='text'
            maxLength='12'
            onChange={(event) => setTelefone(event.target.value)}
          />
          <div>
            <CancelButton>Cancelar</CancelButton>
            <Button onClick={saveContact}>Adicionar</Button>
          </div>
        </Form>
      )}
      <ContactBox />
    </>
  );
}
