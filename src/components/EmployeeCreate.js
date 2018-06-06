import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift:shift || 'Monday' });

	}


	render () {
		console.log(this.props.employee);
		return (
			<Card>
					<CardSection>
			       
			         <Button onPress={this.onButtonPress.bind(this)}>
			           Create
			         </Button>
			       </CardSection>
			     </Card>
		);
	}
}



const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);