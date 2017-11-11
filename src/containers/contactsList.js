import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../index.css';
import {selectContact} from '../actions/actions';

class Contactslist extends Component {
	constructor(props) {
		super(props);
		this.createContacts = this.createContacts.bind(this);
	}

	createContacts() {
		return this.props.contacts.map((contact, id) => {
			return (
					<div className="separate-list" key={id}
					onClick={() => this.props.selectContact(contact)}>
		          <img src= {contact.img} className="icon-badge"/><br />
		           {contact.nickName}
	        	</div>
			)
		})
	}
	
	render() {
		return (
		<div>
		<h2>Manage your contacts</h2>
		{this.createContacts()}
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contacts: state.contacts
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectContact: selectContact},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Contactslist);