import React from 'react'
import TodoListMain from './TodoListMain'
import Demos from './Demos'
import './App.css'
import Login from './todoList/Login'
import Register from './todoList/Register'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
				<Router>
					<Link
						to='/login'
						className="formButton"
					>
						Login
					</Link>
					<Link
						to='/register'
						className="formButton"
					>
						Register
					</Link>
					<Link
						to='/'
						className="formButton"
					>
						main
					</Link>
					<Link
						to='/demos'
						className="formButton"
					>
						demos
					</Link>
					<Route exact path="/" component={TodoListMain} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/demos' component={Demos} />

				</Router>

			</div>
		)
	}
}

export default MainApp
