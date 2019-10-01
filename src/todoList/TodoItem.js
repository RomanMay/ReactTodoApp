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
			<li className="collection-item">
				<div className={itemClass}>
					<span
						className="glyphicon glyphicon-ok icon"
						aria-hidden="true"
					>
					</span>
					<button
						className="btn waves-effect indigo darken-2"
						onClick={this.onClickDone}>
						<i className="small material-icons">check</i>
					</button>
					<div className="taskText">
						{this.state.changeButtonValue
							? <input
								className="input-field col s6"
								value={this.state.currentValue}
								onChange={this.onChangeTodoValue}>
							</input>
							: this.props.item.record
						}
					</div>
					<button
						type="button"
						className="btn waves-effect red darken-2"
						onClick={this.onClickClose}>
						<i className="small material-icons">clear</i>
					</button>

					<button
						className="btn waves-effect green darken-2"
						onClick={this.onClickGoToEditMode}>
						{this.state.changeButtonValue ? 'Save' : 'Change'}
					</button>

				</div>
			</li>
		)
	}
}

export default TodoItem