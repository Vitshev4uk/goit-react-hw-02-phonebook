import { Component } from 'react';
import css from 'components/Filter/Filter.module.css'

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
      
    return (
      <div className={css.FilterContainer}>
        <p className={css.FindContactsText}>Find contacts by name</p>
        <input
          className={css.InputFilter}
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
