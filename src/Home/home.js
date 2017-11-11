import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
//import ContactItem from '../Contacts/contacts';
import contactsList from '../containers/contactsList';
import App from '../Components/app';
import '../index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    }
    render() {
      return(
        <h2> Store and Manage all your contacts </h2>
      );
    }
}

export default Home;