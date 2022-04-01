import react from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog'
import DeleteIcon from '@mui/icons-material/Delete';
import DialogAction from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

class RemoveTask extends react.Component
{
	constructor (props){
		super(props);
		this.state = 
		{ 
			open: false};
		}
	handleOnClick = ()=>
	{
	this.setState({open: true });
	}
	handleClose = () => 
	{
	this.setState({open:false});
	}
	handleDelete = () =>
	{
	this.props.removeTask(this.props.task_id);
	this.setState({open:false});
	}


 render() {
 	return (
	<div>
		<Button variant="contained" 
				startIcon=<DeleteIcon /> 
				onClick={this.handleOnClick}>	

		Eliminar
		 
		</Button>

		<Dialog  
			open={this.state.open}
			onClose={this.handleClose}
			>
			<DialogTitle>
				{'Estas seguro?'}
					</DialogTitle>
			<DialogAction>
				<Button onClick={this.handleClose}>
					Cancelar
						</Button>
				<Button onClick={this.handleDelete}> 

					Confirmar
					</Button>

			</DialogAction>
		</Dialog>
</div>



);

}
}
export default RemoveTask;
