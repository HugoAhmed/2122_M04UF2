import React from 'react';
//import './App.css';
import Title from './Title';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tasks: []
		};

		const fetchData = async () => {
			try{
				const res = await fetch("http://10.40.1.218:3030/");
				const json = await res.json();
				console.log(json);
				this.setTasks(json);
			}
			catch(error){
				console.log("error");
			}

		};
	}

	componentWillMount(){
		fetch("http://10.40.1.218:3030/")
			.then(response => response.json())
			.then(data => {
				for (let i = 0; i < data.length; i++)
					this.state.tasks.push(data[i].task);
				this.setState({
					tasks: this.state.tasks
				});
			});
	}

	setTasks = data => {
		let tasks = [];
		for (let i = 0; i < data.length; i++)
			tasks.push(data[i].task);

		this.state.tasks = tasks;
		this.setState({
			tasks: this.state.tasks
		});
	};

	addTask = task => {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});

		fetch('http://10.40.1.218:3030/', {
			method: 'POST',
			body: task
		});
	}


	removeTask = id_task => {
		this.state.tasks.splice(id_task, 1);
		this.setState({
			tasks: this.state.tasks
		});
	}


	render(){
		return (
<div className="App">
<Title />
<TaskForm addTask={this.addTask} />
<TaskList tasks={this.state.tasks} removeTask={this.removeTask}/>
</div>
		);
  }
}

export default App;
