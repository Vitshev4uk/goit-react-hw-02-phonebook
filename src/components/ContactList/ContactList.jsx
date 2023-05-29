import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onContactDelete } = this.props;

    return (
      <ul>
        {contacts.map((contact, id) => {
          return (
            <li key={id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                onClick={() => {
                  onContactDelete(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
