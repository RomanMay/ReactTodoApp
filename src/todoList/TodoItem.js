import React from 'react'

class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.onClickClose = this.onClickClose.bind(this)
		this.onClickDone = this.onClickDone.bind(this)
		this.onClickGoToEditMode = this.onClickGoToEditMode.bind(this)
		this.onChangeTodoValue = this.onChangeTodoValue.bind(this)
		this.state = {
			currentValue: props.item.record,
			changeButtonValue: false
		}
	}

	onClickClose() {
		const id = this.props.item.recordId
		this.props.removeTask(id)
	}

	onClickDone() {
		const id = this.props.item.recordId
		const task = this.props.item
		this.props.markTaskDone(id, task)
	}

	onClickGoToEditMode() {
		const id = this.props.item.recordId
		const value = this.state.currentValue
		this.setState(state => ({
			currentValue: state.currentValue,
			changeButtonValue: !this.state.changeButtonValue
		}))
		if (this.state.changeButtonValue) {
			this.props.saveChangedValue(id, value)
		}

	}

	onChangeTodoValue(e) {
		this.setState({ currentValue: e.target.value })
	}

	render() {
		let itemClass = this.props.item.done ? 'done' : 'undone'
		return (
			<li className="todo-item">
				<div className={itemClass}>
					<span
						className="glyphicon glyphicon-ok icon"
						aria-hidden="true"
					>
					</span>
					<button
						className="doneButton"
						onClick={this.onClickDone}>
						&#10003;
					</button>
					<div className="taskText">
						{this.state.changeButtonValue
							? <input
								className="changeTaskValue"
								value={this.state.currentValue}
								onChange={this.onChangeTodoValue}>
							</input>
							: this.props.item.record
						}
					</div>
					<button
						type="button"
						className="closeButton"
						onClick={this.onClickClose}>
						&times;
					</button>

					<button
						className="changeButton"
						onClick={this.onClickGoToEditMode}>
						{this.state.changeButtonValue ? 'Save' : 'Change'}
					</button>

				</div>
			</li>
		)
	}
}

export default TodoItem