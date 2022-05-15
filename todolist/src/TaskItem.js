import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import RemoveTask from "./RemoveTask";

function Task(props){
	return (
		<ListItemButton>
			<ListItemText primary={props.task} />
			<RemoveTask task_id={props.task_id}
				task={props.task}
				order={props.order} 
				removeTask={props.removeTask} 
			/>
		</ListItemButton>
	);
}
export default Task;