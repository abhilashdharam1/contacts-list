import React  from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import allReducers from './reducers/reducerContacts';
import App from './Components/app';
import Home from './Home/home'
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
	<Router>
          <div className="container">
              <nav className="navbar navbar-inverse bg-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <NavLink className="navbar-brand" to="/app/contacts">My Contacts</NavLink>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li><NavLink exact activeClassName="activeNav" to="/app/home">Home</NavLink></li>
                      <li><NavLink activeClassName="activeNav" to="/app/contacts">Contacts</NavLink></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div>
              </div>
                <Route exact path="/app/home" component={Home} />
                <Route path="/app/contacts" component={App} />    
            </div>
            </Router>
	</Provider>, 
	document.getElementById('root')
	);

export default store;