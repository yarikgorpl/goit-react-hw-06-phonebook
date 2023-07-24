import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(133 70 234 / 45%)',
        width: '560px',
        height: 'auto',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        borderRadius: '8px',
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
