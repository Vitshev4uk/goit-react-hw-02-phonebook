import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
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
    console.log(updContacts);
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

  RemoveContact = id => {
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
    const { name, number, contacts, filter, filteredContacts } = this.state;

    const elementsToRender = filter !== '' ? filteredContacts : contacts;

    return (
      <div>
        <form onSubmit={this.OnFormSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={name}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="tel"
            required
            onChange={this.handleInputChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <input
            type="text"
            placeholder="filter"
            onChange={this.handleInputFilter}
            value={filter}
          />
          <ul>
            {elementsToRender.map((contact, id) => {
              return (
                <li key={id}>
                  <p>
                    {contact.name}: {contact.number}
                  </p>
                  <button
                    onClick={() => {
                      this.RemoveContact(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactForm;
