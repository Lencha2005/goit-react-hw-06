import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import usersData from './usersData.json'
import { nanoid } from 'nanoid';

function App() {
  const [users, setUsers] = useState(() => {
    const usersStringified = localStorage.getItem('users');
    const usersParsed = JSON.parse(usersStringified) ?? usersData;
    return usersParsed
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onAddUser = (newUser) => {
    const finalUser = {
      ...newUser,
      id: nanoid(),
    }
    setUsers([...users, finalUser]);
  };

const onFilter = (e) => {
  setFilter(e.target.value)
}

const onDeleteUser = (id) => {
const updateUsers = users.filter((user) => user.id !== id);
setUsers(updateUsers)
}

const visibleUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addUser={onAddUser}/>
  <SearchBox value={filter} onFilter={onFilter}/>
  <ContactList users={visibleUsers} onDeleteUser={onDeleteUser}/>
</div>

  )
}

export default App
