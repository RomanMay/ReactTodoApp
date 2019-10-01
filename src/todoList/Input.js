import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { showButton: false }
		this.manageButtonVisibility = this.manageButtonVisibility.bind(this)
		this.handlerInputChange = this.handlerInputChange.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	manageButtonVisibility(isLineEmpty) {
		if (isLineEmpty) {
			this.setState(state => ({
				showButton: false
			}))
		} else {
			this.setState(state => ({
				showButton: true
			}))
		}

	}

	handleKeyDown = e => {
		if (e.key === 'Enter') {
			this.props.addTask()
			this.manageButtonVisibility(true)
			this.setState(state => ({
				showButton: state.showButton
			})
			)
		}
	}

	handlerInputChange(e) {
		const isLineEmpty = e.target.value.length === 0
		const taskInputValue = e.target.value
		this.manageButtonVisibility(isLineEmpty)
		this.props.getInputValue(taskInputValue)
	}

	render() {
		return (
			<div className="input-form">
				{this.state.showButton === true
					? <button
						type="submit"
						className="btn waves-effect waves-light"
						id="add"
						onClick={this.props.addTask} >
						<i className="small material-icons">add</i>
					</button>
					: ''
				}
				<input type="text"
					className="input-field col s6"
					id="task_input"
					value={this.props.value}
					onChange={this.handlerInputChange}
					onKeyDown={this.handleKeyDown}
					ref="clearInput"
				>
				</input>
			</div>
		)
	}

}

export default Input