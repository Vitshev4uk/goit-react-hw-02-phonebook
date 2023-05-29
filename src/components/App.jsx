import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
    filteredContacts: [],
  };

  OnFormSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const { name, number, contacts } = this.state;
    const contact = { name, number, id };
    const updContacts = [...contacts, contact];
    this.setState({ contacts: updContacts, name: '', number: '' });
    // console.log(updContacts);
    this.FindSameName(updContacts);
  };

  FindSameName = contacts => {
    const sameContacts = contacts.filter(
      (contact, index, self) =>
        index !== self.findIndex(newcontact => newcontact.name === contact.name)
    );
    if (sameContacts.length > 0) {
      const sameName = sameContacts.map(contact => contact.name);
      alert(`${sameName} is already in contacts`);
    }
  };

  removeContact = id => {
    const { contacts } = this.state;

    const deletedContact = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: deletedContact });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleInputFilter = event => {
    const { contacts } = this.state;
    const { value } = event.target;

    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ filter: value, filteredContacts });
  };

  render() {

        const { contacts, filter, filteredContacts } = this.state;

    const elementsToRender = filter !== '' ? filteredContacts : contacts;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.OnFormSubmit}
          handleInputChange={this.handleInputChange}
          cont={ contacts } />
        {/* <ContactForm /> */}
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleInputFilter} />
        <ContactList
          contacts={elementsToRender}
          onContactDelete={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
