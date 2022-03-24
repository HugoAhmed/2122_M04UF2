import React from 'react';
import Title from './title';
import TaskForm from './taskform';
import TaskList from './tasklist';
import './App.css';

function App() {
  constructor(props){
		super(props);
		this.state = {
			tasks: []
		};
	}

	addTask = task => {
		console.log(task);

		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});
	}

	render(){
		return (
<div className="App">
<Title />
<TaskForm addTask={this.addTask} />
<TaskList tasks={this.state.tasks} />
</div>
		);
  }
}
export default App;
