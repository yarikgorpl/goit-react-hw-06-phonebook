import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default App;
