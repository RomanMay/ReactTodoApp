import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const items = this.props.items.map((item, index) => {
			return (
				<TodoItem
					key={index}
					item={item}
					index={index}
					removeItem={this.props.removeItem}
					markTodoDone={this.props.markTodoDone}
				/>
			);
		});
		return <ul className="list-group" >{items}</ul>
	}
}
export default TodoList