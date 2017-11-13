import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
	render() {
		if(!this.props.contact) {
			return (<h4>Select User..</h4>)
		}
		return (
			<div>
				<img alt="" src= {this.props.contact.img} /><br />
				Name: {this.props.contact.firstName} {this.props.contact.lastName} <br />
				Email: {this.props.contact.emailAddress} <br />
				Phone: {this.props.contact.phoneNumber}
				<button className="btn btn-primary update-button">Update</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		contact: state.activeUser
	}
}

export default connect(mapStateToProps)(UserDetail);