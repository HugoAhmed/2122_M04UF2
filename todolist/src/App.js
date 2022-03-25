import React from 'react';
import Title from './title';
import TaskForm from './taskform';
import TaskList from './tasklist';
import './App.css';

class App() extends React.Component{
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

	function removeTask (id_task, patata)
	{
		removeTask = id_task =>
		{
			this.state.tasks.splice(id_task, 1);
			this.setState({ tasks: this.state.tasks});
		}
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
