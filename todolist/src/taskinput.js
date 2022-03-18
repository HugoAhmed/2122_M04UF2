
 function taskinput()
 {
 return
 (
 <label for="task-input">Task <input type="text" value id="task-input" onChange={event=>{ console.log("Cambio");}}/>
 );
 }
 export default taskinput;
