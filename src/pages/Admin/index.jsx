import React, { useState, useEffect } from 'react';
import api from '../../services';

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
  const [users, setUsers] = useState();

  useEffect(() => {
    updateUsersDataList();
  }, []);

  async function updateUsersDataList() {
    const responseData = await api.get('/users').then((res) => res.data);
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

      <UsersContainer>
        {users.map(user => (
          <UserContainer key={user.id}>
            <TitleBox>{user.nome}</TitleBox>
            <UserText>Email: {user.email}</UserText>
            <IconsDiv>
              <IconDiv
                borderRadius='0 0 0 0.6rem'
                color='#2c6663'
                onClick={() => handleUpdate(user.id)} >
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
