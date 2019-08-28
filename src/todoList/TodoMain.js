import React from 'react'
import TodoList from './TodoList'
import Input from './Input'

class TodoMain extends React.Component {
	constructor(props) {
		super(props)
		this.addItem = this.addItem.bind(this)
		this.removeItem = this.removeItem.bind(this)
		this.markTodoDone = this.markTodoDone.bind(this)
		this.getValue = this.getValue.bind(this)
		this.state = {
			todoItems: [{ index: 1, value: 'git nahui', done: false }],
			inputValue: ''
		}

	}

	addItem() {
		this.setState((state) => ({
			todoItems: [...state.todoItems, {
				index: state.todoItems.length + 1,
				value: state.inputValue,
				done: false
			}],
			inputValue: state.inputValue
		}))
	}

	getValue(taskInputValue) {
		this.setState((state) => ({
			todoItems: state.todoItems,
			inputValue: taskInputValue
		}))
	}

	removeItem() {

	}
	markTodoDone() {

	}
	render() {
		return (
			<div>
				<Input addItem={this.addItem} getValue={this.getValue} value={this.state.inputValue} />
				<TodoList items={this.state.todoItems} />
			</div>
		)
	}
}

export default TodoMain