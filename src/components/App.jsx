import React, { Component } from 'react';
import { Container } from './App.styled';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, phone }) => {
    this.setState(prev => {
      return {
        contacts: [
          ...prev.contacts,
          {
            name,
            phone,
            id: nanoid(),
          },
        ],
      };
    });
  };

  deleteContact = id => {
    this.setState(prev => {
      const idx = prev.contacts.findIndex(cont => cont.id === id);
      if (idx === 0 || idx === -1) {
        return { contacts: [] };
      }
      return {
        contacts: [...prev.contacts].splice(idx, 1),
      };
    });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <AddContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Contacts
          contacts={this.state.contacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
