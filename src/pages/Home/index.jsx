import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { Button, CancelButton } from '../../components/Button';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import api from '../../services';
import '../../App.css';
import {
  ContactContainer,
  ContactsContainer,
  ContactText,
  Icon,
  IconDiv,
  IconsDiv,
  TitleBox,
} from './style';

export default function Home() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [contacts, setContacts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    updateContactsDataList();
  }, []);

  async function updateContactsDataList() {
    const responseData = await api
      .get('/contato')
      .then((res) => res.data.contatos);
    setContacts(responseData);
    console.log(contacts);
  }

  async function handleUpdate(id, name, email) {
    await api
      .put(
        `contato/${id}`,
        { nome, telefone },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        updateContactsDataList();
      })
      .catch((err) => console.error(err));
  }

  async function handleDelete(id) {
    await api
      .delete(`contato/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setContacts(contacts.filter((contact) => contacts.id !== id));
        updateContactsDataList();
      })
      .catch((err) => console.error(err));
  }

  async function saveContact(e) {
    e.preventDefault();

    await api
      .post(
        '/contato/register',
        { nome, telefone },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    setIsContactFormVisible(false);
    setIsButtonVisible(true);
    updateContactsDataList();
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
        <Form style={{ width: '25vw' }}>
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
          <div style={{ display: 'flex' }}>
            <CancelButton
              onClick={() => {
                setIsContactFormVisible(false);
                setIsButtonVisible(true);
              }}
            >
              Cancelar
            </CancelButton>
            <Button onClick={saveContact}>Adicionar</Button>
          </div>
        </Form>
      )}

      <ContactsContainer>
        {contacts.map((contact) => (
          <ContactContainer key={contact.id}>
            <TitleBox>{contact.nome}</TitleBox>
            <ContactText>Telefone: {contact.telefone}</ContactText>
            <IconsDiv>
              <IconDiv
                borderRadius='0 0 0 0.6rem'
                color='#2c6663'
                onClick={() => handleUpdate(contact.id)}
              >
                <Icon className='bi bi-pencil-fill'></Icon>
              </IconDiv>
              <IconDiv
                borderRadius='0 0 0.6rem 0'
                color='#d83c3c'
                onClick={() => handleDelete(contact.id)}
              >
                <Icon className='bi bi-trash'></Icon>
              </IconDiv>
            </IconsDiv>
          </ContactContainer>
        ))}
      </ContactsContainer>
    </>
  );
}
