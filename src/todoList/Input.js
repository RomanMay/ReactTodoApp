import React from 'react';

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { inputText: this.props.inputValue, showButton: false }
		this.manageButtonVisibility = this.manageButtonVisibility.bind(this)
		this.handlerInputChange = this.handlerInputChange.bind(this)
	}

	manageButtonVisibility(isLineEmpty) {
		if (isLineEmpty) {
			this.setState(state => ({
				inputText: state.inputText,
				showButton: false
			}))
		} else {
			this.setState(state => ({
				inputText: state.inputText,
				showButton: true
			}))
		}

	}

	handlerInputChange(e) {
		const isLineEmpty = e.target.value.length > 0 ? false : true
		const taskInputValue = e.target.value
		this.manageButtonVisibility(isLineEmpty)
		this.props.getValue(taskInputValue)

	}



	render() {
		return (
			<div className="input-form">
				{this.state.showButton == true ? <button type="submit" className="input-form__button" id="add" onClick={this.props.addItem} >&#10011;</button> : ''
				}
				<input type="text"
					id="task_input"
					value={this.props.inputValue}
					onChange={this.handlerInputChange}
				>
				</input>

				{/* <form ref="form" onSubmit={this.onSubmit} className="form-inline">
					<input
						type="text"
						ref="itemName"
						className="form-control"
						placeholder="add a new todo..."
					/></form>
				<button type="submit" className="btn btn-default">
					Add
        </button> */}
			</div>
		)
	}

}

export default Input