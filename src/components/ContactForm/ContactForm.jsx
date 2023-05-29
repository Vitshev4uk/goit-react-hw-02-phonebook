import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {

render() {

    const { name, number, onSubmit, handleInputChange } = this.props;

 
    return (
        <form onSubmit={onSubmit}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
    )
  }
}

export default ContactForm;
