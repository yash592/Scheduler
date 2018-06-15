import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import employeeList from './components/EmployeeList';
import employeeCreate from './components/EmployeeCreate';
import employeeEdit from './components/EmployeeEdit';





const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 15 }}>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title='Please Login' initial />
				</Scene>
				<Scene key="main">
					<Scene 
					rightTitle='Add Employee'
					onRight={() => Actions.employeeCreate()}
					key='employeeList' 
					component={employeeList} 
					title='Employees'
					initial
				 />
				<Scene key='employeeCreate' component={employeeCreate} title='Create Employee' />
				<Scene key='employeeEdit' component={employeeEdit} title='Edit Employee' />
				</Scene>
			</Scene>
		</Router>

	);
};

export default RouterComponent;