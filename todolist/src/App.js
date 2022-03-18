import React from 'react';
import './App.css';
import Title from './title';
import TaskForm from './taskform';
import TaskList from './tasklist';

class App() extends React.Component{
	render(){
		return (
<div className="App">
<Title />
<TaskForm />
<TaskList />
</div>
		);
  }
}

export default App;