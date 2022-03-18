import React from 'react';

import TaskInput from './TaskInput';
import TaskSubmit from './TaskSubmit';

class taskform extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			task: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.task);
	}

	handleChange = (event) => {
		this.setState({
			task: event.target.value
		});
	}

	render()
	{
		return (
			<form onSubmit={this.handleSubmit}>
			<TaskInput handleChange={this.handleChange} />
			<TaskSubmit />
			</form>
		);

	}
}