import RemoveTask from './RemoveTask';

function taskitem (props)
{
	return(
		<li>{props.task} <RemoveTask /></li>
	);

}

export default taskitem;