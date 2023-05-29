import { Component } from 'react';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
      
    return (
      <div>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="filter"
          onChange={onFilterChange}
          value={filter}
        />
      </div>
    );
  }
}

export default Filter;
