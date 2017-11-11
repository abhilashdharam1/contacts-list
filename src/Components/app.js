import React from 'react';
import Contactslist from '../containers/contactsList';
import UserDetail from '../containers/userDetail';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div>
      <div className="contacts-list">
      <Contactslist />
      </div>
      <div className="user-details">
      <h2>User Details:</h2>
      <UserDetail />
      </div>
      </div>
    );
  }
}

export default App;