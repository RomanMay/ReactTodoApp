import React from 'react'
import TodoList from './TodoList'
import Input from './Input'

class TodoMain extends React.Component {
	constructor(props) {
		super(props)
		this.addTask = this.addTask.bind(this)
		this.removeTask = this.removeTask.bind(this)
		this.markTaskDone = this.markTaskDone.bind(this)
		this.getInputValue = this.getInputValue.bind(this)
		this.saveChangedValue = this.saveChangedValue.bind(this)
		this.changeTaskValue = this.changeTaskValue.bind(this)
		this.state = {
			todoItems: [],
			inputValue: '',
		}
	}

	addTask() {
		this.setState((state) => ({
			todoItems: [...state.todoItems, {
				id: state.todoItems.length,
				value: state.inputValue,
				done: false,
			}],
			inputValue: ''
		}))
	}

	getInputValue(taskInputValue) {
		this.setState((state) => ({
			todoItems: state.todoItems,
			inputValue: taskInputValue
		}))
	}

	removeTask(id) {
		this.setState(state => ({
			todoItems: state.todoItems.filter(e => e.id != id),
			inputValue: state.inputValue
		}))
	}

	markTaskDone(id) {
		this.setState(state => {
			const updatedTodos = state.todoItems.map(todo => {
				if (todo.id == id) {
					todo.done = !todo.done
				}
				return todo
			})
			return {
				todoItems: updatedTodos,
				inputValue: state.inputValue
			}
		})
	}

	saveChangedValue(id, value) {

		this.setState(state => {
			state.todoItems.map(todo => {
				if (todo.id == id) {
					todo.value = value
				}
			})

			return {
				todoItems: state.todoItems,
				inputValue: state.inputValue
			}
		})
	}

	changeTaskValue(e, id) {
		const value = e.target.value
		const newTodos = this.state.todoItems.map(todo => {
			if (todo.id == id) {
				todo.changedValue = value
			}
			return todo
		})

		this.setState(state => ({
			todoItems: state.todoItems,
			inputValue: state.inputValue,
			buttonValue: newTodos,
			changedValue: value
		}))
	}

	render() {
		return (
			<div>
				<Input
					addTask={this.addTask}
					getInputValue={this.getInputValue}
					value={this.state.inputValue} />
				<TodoList
					removeTask={this.removeTask}
					items={this.state.todoItems}
					markTaskDone={this.markTaskDone}
					saveChangedValue={this.saveChangedValue}
					changeTaskValue={this.changeTaskValue} />
			</div>
		)
	}
}

export default TodoMain