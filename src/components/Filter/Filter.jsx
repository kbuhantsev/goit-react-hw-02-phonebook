import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    onInput: PropTypes.func,
  };

  handleInput = event => {
    const { onInput } = this.props;
    const value = event.target.value;
    onInput({ value });
  };

  render() {
    return (
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        Find contacts by name
        <input
          name="search"
          style={{ width: '200px' }}
          onChange={this.handleInput}
        ></input>
      </label>
    );
  }
}

export default Filter;
