import React, { useState } from 'react';
import api from '../../services';
import { Button } from '../Button';
import { Form } from '../Form';
import { Input } from '../Input';

export default function NewContactForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const saveContact = async () => {
    api
      .post('/contato/register', { nome, telefone })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={saveContact}>
      <Input
        placeholder='Nome'
        type='text'
        onChange={(event) => setNome(event.target.value)}
      />
      <Input
        placeholder='Telefone'
        type='number'
        min='0'
        onChange={(event) => setTelefone(event.target.value)}
      />
      <Button>Prosseguir</Button>
    </Form>
  );
}
