import './App.css';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import ContactsForm from './ContactsForm/ContactsForm';


function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm/>
      <SearchBox/>
      <ContactList/>
    </div>
    );
};

export default App
