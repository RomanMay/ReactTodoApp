import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// <div className="todo-item">

		// 	<button
		// 		class="btn add"
		// 		id="add"
		// 		onclick="isCompleteButtonHandler()">
		// 		&#10004;
		// </button>

		// 	<input
		// 		type="checkbox"
		// 		checked="{props.item.completed}" />

		// 	<p
		// 		class="task_text ${task.completed ? 'isCompleted' : ''}">
		// 		{props.item.text}
		// 	</p>

		// 	<button
		// 		class="btn remove"
		// 		id="remove"
		// 		onclick="removeButtonHandler()">
		// 		&#10008;
		// </button>

		// 	<button
		// 		class="btn change"
		// 		onclick="editButtonHandler()">
		// 		Change
		// </button>

		// </div>// <div className="todo-item">

		// 	<button
		// 		class="btn add"
		// 		id="add"
		// 		onclick="isCompleteButtonHandler()">
		// 		&#10004;
		// </button>

		// 	<input
		// 		type="checkbox"
		// 		checked="{props.item.completed}" />

		// 	<p
		// 		class="task_text ${task.completed ? 'isCompleted' : ''}">
		// 		{props.item.text}
		// 	</p>

		// 	<button
		// 		class="btn remove"
		// 		id="remove"
		// 		onclick="removeButtonHandler()">
		// 		&#10008;
		// </button>

		// 	<button
		// 		class="btn change"
		// 		onclick="editButtonHandler()">
		// 		Change
		// </button>

		// </div>