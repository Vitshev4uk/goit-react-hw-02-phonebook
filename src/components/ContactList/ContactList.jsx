import { Component } from 'react';
import css from 'components/ContactList/ContactList.module.css'

class ContactList extends Component {
  render() {
    const { elementsToRender, onContactDelete } = this.props;

    return (
      <ul className={css.ContactList}>
        {elementsToRender.map((contact, id) => {
          return (
            <li className={css.ContactListItem} key={id}>
              <p className={css.Name}>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.BtnSubmit}
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
