import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import About from './components/About';
import NotFound from './components/NotFound';
import EditContact from './components/EditContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='PhoneBook' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
