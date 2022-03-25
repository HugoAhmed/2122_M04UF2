import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function removetask (props)
{
	return (
		<button onClick={function (event){
			props.removeTask(props.id_task);
		}
	}>BORRAR</button>
);

}

export default removetask;
