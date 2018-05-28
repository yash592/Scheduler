 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { employeesFetch } from '../actions'; 
import { View, Text } from 'react-native';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();
	}

	render() {
		return (
			<View>
				<Text>Yash</Text>
			</View>
		);
	}
}

export default connect(null, { employeesFetch })(EmployeeList);