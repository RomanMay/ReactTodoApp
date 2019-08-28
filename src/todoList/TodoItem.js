import React from 'react';


class TodoItem extends React.Component {
	constructor(props) {
		super(props)
		this.removeItem = this.removeItem.bind(this)
		this.doneItem = this.doneItem.bind(this)
	}

	removeItem() {

	}

	doneItem() {

	}

	render() {
		let itemClass = this.props.item.done ? 'done' : 'undone'
		return (
			<li className="todo-item">
				<div className={itemClass}>
					{this.props.item.value}
					<button type="button" className="close-button" onClick={this.removeItem}>
						&times;
					</button>
				</div>
			</li>
		)
	}
}

export default TodoItem