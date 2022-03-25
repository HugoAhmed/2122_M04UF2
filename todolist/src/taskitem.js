import RemoveTask from './removetask';

function taskitem (props)
{
	return(
		<li>{props.task} <RemoveTask removeTask={props.removeTask}/></li>
	);

}

export default taskitem;
