import React from 'react';


class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.onClickClose = this.onClickClose.bind(this)
		this.onClickDone = this.onClickDone.bind(this)

	}
	onClickClose(e) {
		const index = this.props.index
		console.log("TCL: TodoItem -> onClickClose -> this.props.index)", this.props.index)

		this.props.removeItem(index)
	}
	onClickDone() {
		const index = this.props.index
		this.props.markTodoDone(index)
	}


	render() {
		let itemClass = this.props.item.done ? 'done' : 'undone'
		return (
			<li className="todo-item">
				<div className={itemClass}>
					<span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
					<button onClick={this.onClickDone}>
						fg
				</button>
					{this.props.item.value}
					<button type="button" className="close-button" onClick={this.onClickClose}>
						&times;
					</button>
				</div>
			</li>
		)
	}
}

export default TodoItem