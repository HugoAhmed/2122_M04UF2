import React from 'react';

class taskinput extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.handleChange(event);
		
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
		<label htmlFor="task-input">Tarea 
		<input type="text" id="task-input" onChange={this.handleChange} value={this.props.value}/>
		</label>
		);
	}
} 
export default taskinput;
