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
				/>
			);
		});
		return < ul >{items}</ul >
	}
}
export default TodoList