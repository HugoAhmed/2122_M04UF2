import React from 'react';
class  piesito extends React.Component
{

constructor(props) {
		super(props);
    	this.state = 
		{date: new Date()};
	}
  	componentDidMount() {
    	this.timerID = setInterval(
		() => this.tick(),1000);
  	}
  	tick() {
    	this.setState({
      		date: new Date().toLocaleString()
    	});
  	}  
	
	render() {
		return (
 <footer class="estructura-cuerpo">
  <h2>Pié de página</h2>
  <p><em>Esto es el pié (c) 2021</em></p>
  <p><em>Esto es OTRO pié (c) 2021</em></p>
  <p><em>{this.state.date.toLocaleString()}</em></p>
  </footer>
);
}
}


export default piesito;
