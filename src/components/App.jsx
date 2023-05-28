import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    // filter: ''
  };
  
  render() {
    return (
      <div>
        <ContactForm/>
      </div>
    );
  }
}

export default App;
