import React, { Component } from 'react';
import axios from 'axios';

const Contex = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

//global state
export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
    //axios.get('https://jsonplaceholder.typicode.com/users').then(res => this.setState({contacts: res.data}))
  }

  render() {
    return (
      <Contex.Provider value={this.state}>
        {this.props.children}
      </Contex.Provider>
    );
  }
}

export const Consumer = Contex.Consumer;
