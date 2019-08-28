import React from 'react';
import TodoListMain from './TodoListMain'
import Demos from './Demos'
import './App.css';

class MainApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showTimer: ''
		}
	}
	onChangeTimer(value) {
		this.setState({ showTimer: value })
	}
	render() {
		return (
			<div className="main-container">
				<TodoListMain />
				<Demos />
			</div>
		)
	}
}

export default MainApp
