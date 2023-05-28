import { Component } from 'react';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    // filter: ''
  };

  OnFormSubmit = event => {
    event.preventDefault();
      const { name, number, contacts } = this.state;
      const contact = { name, number };
    const updContacts = [...contacts, contact];
    this.setState({ contacts: updContacts, name: '', number: '' });
    console.log(updContacts);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number, contacts } = this.state;
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
            placeholder='tel'
            required
            onChange={this.handleInputChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
        <input type="text" placeholder='filter' />
                <ul>
                    {contacts.map((contact, id) => {  
                        return <li key={ id }>
                            <p>{contact.name}: { contact.number}</p>
                        </li>
                    })}
        </ul>
        </div>
      </div>
    );
  }
}

export default ContactForm;
