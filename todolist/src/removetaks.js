import Button from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';

function removetask (props)
{
	return (
		<Button startIcon={<DeleteIcon />} onClick={function (event){
				props.removeTask(props.id_task);
			}
		}>BORRAR</Button>
	);

}

export default removetask;