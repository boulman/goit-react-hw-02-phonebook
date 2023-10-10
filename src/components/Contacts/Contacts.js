import React, { Component } from 'react';
import { Label } from './Contacts.styled';

export class Contacts extends Component {
  state = {
    search: '',
  };
  handleInput = e => {
    this.setState({ search: e.target.value.toLowerCase().trim() });
  };
  render() {
    return (
      <>
        {this.props.contacts.length ? (
          <>
            <Label>
              Find contacts by name
              <input
                type="text"
                name="search"
                placeholder="Enter search"
                onChange={this.handleInput}
              />
            </Label>

            <ul>
              {this.props.contacts
                .filter(({ name }) => name.includes(this.state.search))
                .map(({ id, name, phone }) => (
                  <li key={id}>
                    {name}: {phone}{' '}
                    <button
                      type="button"
                      onClick={() => {
                        this.props.onDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <p>No contacts</p>
        )}
      </>
    );
  }
}
