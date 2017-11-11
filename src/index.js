import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers/reducerContacts';
import App from './Components/app';
import Home from './Home/home'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
	<Router>
          <div className="container">
              <nav className="navbar navbar-inverse bg-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/contacts">My Contacts</NavLink>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li><NavLink exact activeClassName="activeNav" to="/home">Home</NavLink></li>
                      <li><NavLink activeClassName="activeNav" to="/contacts">Contacts</NavLink></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div>
              </div>
                <Route exact path="/home" component={Home} />
                <Route path="/contacts" component={App} />    
            </div>
            </Router>
	</Provider>, 
	document.getElementById('root')
	);

export default store;