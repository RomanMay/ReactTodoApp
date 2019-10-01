import React from 'react'
import TodoList from './TodoList'
import Input from './Input'
import axios from 'axios'

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
			inputValue: ''
		}
	}


	componentDidMount() {
		axios(
			{
				method: 'get',
				url: 'http://localhost:3000/records/records',
				headers: {
					"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
				}
			})
			.then(response => {
				let res = response.data
				this.setState(state => ({
					todoItems: res,
					inputValue: state.inputValue
				}))
			})
			.catch(error => {
				console.log('error' + error)
			})


	}

	addTask() {
		axios(
			{
				method: 'post',
				url: 'http://localhost:3000/records/28',
				headers: {
					"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
				},
				data: {
					record: this.state.inputValue,
					done: false
				}
			}
		)
			.then(response => {
				const body = response.data
				this.setState((state) => ({
					todoItems: [...state.todoItems, {
						recordId: body.recordId,
						record: body.record,
						done: body.done,
					}],
					inputValue: ''
				}))
			})
	}

	getInputValue(taskInputValue) {
		this.setState((state) => ({
			todoItems: state.todoItems,
			inputValue: taskInputValue
		}))
	}

	removeTask(id) {
		axios(
			{
				method: 'delete',
				url: `http://localhost:3000/records/${id}`,
				headers: {
					"Access-Control-Allow-Origin": 'http://localhost:3000',
					"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
				},
			}
		)
			.then(response => {
				this.setState((state) => ({
					todoItems: state.todoItems.filter(data => data.recordId != id),
					inputValue: state.inputValue
				}))
			})


	}

	markTaskDone(id, task) {
		axios({
			method: 'put',
			url: `http://localhost:3000/records/${id}`,
			headers: {
				"Access-Control-Allow-Origin": 'http://localhost:3000',
				"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
			},
			data: {
				done: !task.done
			}

		})
			.then(response => {
				console.log(this.state.todoItems.done, 'put')
				console.log(response.data)
				this.setState(state => {
					const updatedTodos = state.todoItems.map(data => {
						if (data.recordId == id) {
							data.done = !data.done
						}
						return data
					})
					return {
						todoItems: updatedTodos,
						inputValue: state.inputValue
					}
				})
			})
	}

	saveChangedValue(id, value) {
		axios({
			method: 'put',
			url: `http://localhost:3000/records/${id}`,
			headers: {
				"Access-Control-Allow-Origin": 'http://localhost:3000',
				"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoiYWRtaW4iLCJleHAiOjE1NjgyMjYzOTEsImlhdCI6MTU2ODIyNTc5MX0.DpWMBZrTJqCeMGTgrKZd6kUBfuapx6g_YNWMGbz_Bro"
			},
			data: {
				record: value
			}
		})
			.then(response => {
				this.setState(state => {
					state.todoItems.map(data => {
						if (data.recordId == id) {
							data.record = value
						}
					})

					return {
						todoItems: state.todoItems,
						inputValue: state.inputValue
					}
				})
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