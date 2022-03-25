import React from 'react';
import TaskItem from './taskitem';

class tasklist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks : props.tasks
		};
	}

	render ()
	{
		let t = this.state.tasks;

		let tasks = [];
		for (let i = 0; i < t.length; i++){
			tasks.push(<TaskItem task={t[i]} key={i} id_item={i}
			removeTask={this.props.removeTask}/>);
		}

		return (
		<ul>
			{tasks}
		</ul>
		);
	}
}

export default tasklist;
