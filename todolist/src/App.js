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

import './App.css';
import Title from './title';
import TaskForm from './taskform';
import TaskList from './tasklist';

class App() extends React.Component{
	render(){
		return (
<div className="App">
<Title />
<TaskForm addTask={this.addTask} />
<TaskList tasks={this.state.tasks} />
<TaskForm />
<TaskList />
</div>
		);
  }
}
export default App;

export default App;