import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'


class App extends Component {

		componentWillMount() {
		   const config = {
		     apiKey: "AIzaSyAn6j1LQ6p1ISJG5NJ3iC_zn1G-l7mP0Oo",
	         authDomain: "employeemanager-26263.firebaseapp.com",
	         databaseURL: "https://employeemanager-26263.firebaseio.com",
	         projectId: "employeemanager-26263",
	         storageBucket: "employeemanager-26263.appspot.com",
	         messagingSenderId: "914003402982"
		   };

		   firebase.initializeApp(config);
		 }


	render() {

		

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (

			<Provider store={store}>
				<Router />
			</Provider>


			);
	}
}

export default App;