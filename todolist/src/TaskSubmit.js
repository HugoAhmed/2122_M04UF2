import react from 'react';
import AddCircle from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';



class  TaskSubmit extends react.Component{
	constructor (props){
	
		super(props);

	}
handleSubmit = (event) => {
	event.preventDefault();
	this.props.onSubmit(event);

}

render(){
	return(
	
	<Tooltip title="Añadir" >
		<Button variant="contained" onClick={this.handleSubmit}>
			<AddCircle/>
				</Button>
	</Tooltip>
	);


}
}

export default TaskSubmit;