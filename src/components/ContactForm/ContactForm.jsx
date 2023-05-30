import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = (event) => {
    const { contacts, updateContacts } = this.props;
    event.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const contact = { name, number, id };
    const updContacts = [...contacts, contact];
    updateContacts(updContacts);
    this.findSameName(updContacts);
    this.setState({ name: '', number: '' });
  };

  findSameName = (contacts) => {
    const sameContacts = contacts.filter(
      (contact, index, allcontacts) =>
        index !== allcontacts.findIndex(newcontact => newcontact.name === contact.name)
    );
    if (sameContacts.length > 0) {
      const sameName = sameContacts.map(contact => contact.name);
      alert(`${sameName} is already in contacts`);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <p>Name</p>
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
        <p>Number</p>
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
    );
  }
}

export default ContactForm;
