import React from 'react'
import Input from './todoList/Input'
import TodoItem from './todoList/TodoItem'
import TodoList from './todoList/TodoList'
import TodoMain from './todoList/TodoMain'
import Clock from './demos/Clock'


class Demos extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (

			<div className="main-container">
				<Clock />
				<div className="title">Enter your tasks</div>

				<div className="todo_form">
					<div className="toDo"></div>
					<div className="done"></div>
				</div>

				<div>
					<TodoMain />
				</div>

			</div>

		)
	}
}

export default Demos