import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css'

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
      <form className={css.Form} onSubmit={this.onFormSubmit}>
        <p className={css.InputName}>Name</p>
        <input
        className={css.InputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
          value={name}
        />
        <p className={css.InputName}>Number</p>
        <input
        className={css.InputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="tel"
          required
          onChange={this.handleInputChange}
          value={number}
        />
        <button className={css.BtnForm} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
