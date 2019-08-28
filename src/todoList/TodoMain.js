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
			todoItems: [],
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

	removeItem(index) {
		this.setState(state => ({
			todoItems: [...state.todoItems.slice(0, index), ...state.todoItems.slice(index + 1)],
			inputValue: state.inputValue
		}))
	}
	markTodoDone(index) {
		let todo = this.state.todoItems[index]
		this.state.todoItems.splice(index, 1)
		todo.done = !todo.done;
		todo.done ? this.state.todoItems.push(todo) : this.state.todoItems.unshift(todo);
		this.setState(state => ({
			todoItems: state.todoItems,
			inputValue: state.inputValue
		}));
	}
	render() {
		return (
			<div>
				<Input addItem={this.addItem} getValue={this.getValue} value={this.state.inputValue} />
				<TodoList removeItem={this.removeItem} items={this.state.todoItems} markTodoDone={this.markTodoDone} />
			</div>
		)
	}
}

export default TodoMain