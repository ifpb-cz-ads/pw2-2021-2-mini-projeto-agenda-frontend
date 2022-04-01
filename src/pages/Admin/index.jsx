import React, { useState } from 'react';
import api from '../../services';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState();

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
      .put(`users/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div className='App'>
      <h1 className='title'>Adicione, edite e exclua os usuários</h1>

      {/* <UserList>
        {users.map((user) => {
          <UserBox key={user.id}>
            <UserDetailsBox>
              <p>{`Nome: ${user.username}`}</p>
              <p>{`Email: ${user.email}`}</p>
            </UserDetailsBox>
            <Edit onClick={handleUpdate(user.id)} />
            <Exlude onClick={handleDelete(user.id)} />
          </UserBox>;
        })}
      </UserList> */}
    </div>
  );
}
