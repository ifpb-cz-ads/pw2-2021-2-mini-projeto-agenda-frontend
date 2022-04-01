import { useEffect, useState } from 'react';
import {
  ContactContainer,
  ContactsContainer,
  ContactText,
  Icon,
  IconDiv,
  IconsDiv,
  TitleBox,
} from './style';
import api from '../../services';

export default function ContactBox() {
  const [contacts, setContacts] = useState([]);

  async function updateContactsDataList() {
    const responseData = await api.get('/contato').then((res) => res.data);
    setContacts(responseData);
    console.log(contacts);
  }

  async function handleUpdate(id, name, email) {
    await api
      .put(`contato/${id}`, {
        name,
        email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    updateContactsDataList();
  }

  async function handleDelete(id) {
    await api
      .put(`contato/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    updateContactsDataList();
  }

  useEffect(() => {
    updateContactsDataList();
  }, []);

  return (
    <ContactsContainer>
      {/* {contacts.map((contact) => {
        return (
          <ContactContainer>
            <TitleBox>{`Nome: ${contact.nome}`}</TitleBox>
            <ContactText>{`Telefone: ${contact.telefone}`}</ContactText>
            <IconsDiv>
              <IconDiv
                borderRadius='0 0 0 0.6rem'
                color='#2c6663'
                onClick={handleUpdate(contact.id)}
              >
                <Icon className='bi bi-pencil-fill'></Icon>
              </IconDiv>
              <IconDiv
                borderRadius='0 0 0.6rem 0'
                color='#d83c3c'
                onClick={handleDelete(contact.id)}
              >
                <Icon className='bi bi-trash'></Icon>
              </IconDiv>
            </IconsDiv>
          </ContactContainer>
        );
      })} */}

      <ContactContainer>
        <TitleBox>Weligton Ferreira</TitleBox>
        <ContactText>Telefone: (11) 99999-9999</ContactText>
        <IconsDiv>
          <IconDiv borderRadius='0 0 0 0.6rem' color='#2c6663'>
            <Icon className='bi bi-pencil-fill'></Icon>
          </IconDiv>
          <IconDiv borderRadius='0 0 0.6rem 0' color='#d83c3c'>
            <Icon className='bi bi-trash'></Icon>
          </IconDiv>
        </IconsDiv>
      </ContactContainer>

      <ContactContainer>
        <TitleBox>Rafael Félix</TitleBox>
        <ContactText>Telefone: (11) 99999-9999</ContactText>
        <IconsDiv>
          <IconDiv borderRadius='0 0 0 0.6rem' color='#2c6663'>
            <Icon className='bi bi-pencil-fill'></Icon>
          </IconDiv>
          <IconDiv borderRadius='0 0 0.6rem 0' color='#d83c3c'>
            <Icon className='bi bi-trash'></Icon>
          </IconDiv>
        </IconsDiv>
      </ContactContainer>
    </ContactsContainer>
  );
}
