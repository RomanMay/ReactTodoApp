import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}


	render() {
		const items = this.props.items.map((item) => {
			return (
				<TodoItem
					className="todosContainer"
					key={item.id}
					item={item}
					removeTask={this.props.removeTask}
					markTaskDone={this.props.markTaskDone}
					saveChangedValue={this.props.saveChangedValue}
					changeTaskValue={this.props.changeTaskValue}
				/>
			);
		});
		return <ul className="list-group" >{items}</ul>
	}
}
export default TodoList