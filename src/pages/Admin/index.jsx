import React, { useState, useEffect } from 'react';
import api from '../../services';
import { Button, CancelButton } from '../../components/Button';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';

import {
  UserContainer,
  UsersContainer,
  UserText,
  Icon,
  IconDiv,
  IconsDiv,
  TitleBox,
} from './style';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const [admiUpdate, setadmiUpdate] = useState('');
  const [telefoneUpdate, setTelefoneUpdate] = useState('');
  const [idUpdate, setIdUpdate] = useState('')


  const token = localStorage.getItem("token");

  useEffect(() => {
    updateUsersDataList();
  }, [token]);

  async function updateUsersDataList() {
    const responseData = await api.get('/users', {
      headers: {
        Authorization: token,
      }}).then((res) => res.data);
    setUsers(responseData);
    console.log(responseData);
  }

  async function handleUpdate(id) {
    await api
      .put(`users/${id}`, {
        name,
        email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  async function handleDelete(id) {
    await api
      .delete(`users/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div className='App'>
      <h1 className='title'>Adicione, edite e exclua os usuários</h1>

      {isEditFormVisible && (
        <Form style={{ width: '25vw' }}>
          <Input
            placeholder={name}
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder={telefoneUpdate}
            type='text'
            maxLength='12'
            onChange={(event) => setTelefoneUpdate(event.target.value)}
          />
          <div style={{ display: 'flex' }}>
            <CancelButton
              onClick={() => {
                setIsEditFormVisible(false);
              }}
            >
              Cancelar
            </CancelButton>
            <Button onClick={handleUpdate}>salvar</Button>
          </div>
        </Form>
      )}

      <UsersContainer>
        {users.map((user) => (
          <UserContainer key={user.id}>
            <TitleBox>{user.username}</TitleBox>
            <UserText>Email: {user.email}</UserText>
            <UserText>Admin: {user.isAdmin?"sim":"Não"}</UserText>
            <UserText>Verify: {user.isVerified?"Sim":"Não"}</UserText>

            <IconsDiv>
              <IconDiv
                borderRadius='0 0 0 0.6rem'
                color='#2c6663'
                onClick={() => {
                  setIsEditFormVisible(true)
                  setName(user.username)

                }} >
                <Icon className='bi bi-pencil-fill'></Icon>
              </IconDiv>
              <IconDiv
                borderRadius='0 0 0.6rem 0'
                color='#d83c3c'
                onClick={() => handleDelete(user.id)}>
                <Icon className='bi bi-trash'></Icon>
              </IconDiv>
            </IconsDiv>
          </UserContainer>
        ))}
      </UsersContainer>
    </div>
  );
}
