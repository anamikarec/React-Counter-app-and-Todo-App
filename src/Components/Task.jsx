import React, {useState} from 'react';
import { TaskItem } from './TaskItem';

const style1 = {
    height : "40px",
    fontSize : "22px",
    width :"150px",
    backgroundColor :"black",
    color:"white"
}

const style2 = {
    border : "5px solid red"
}
const Task = () => {
    const [task,setTask] = useState([]);
    const [query,setQuery] = useState("");
    const handleChange = (e) =>{
        const {value} = e.target;
        setQuery(value);
    }
    const handleClick = () => {
        const payload = {
            title : query,
            status : "true"
        }
        // we are pusing the payload in our task array by using spread operator
        let newTasks = [...task, payload]
        setTask(newTasks);
        }
        console.log(task);
    return (
        <>
        <h1>Tasks</h1>
        <input style={style1} value={query} onChange={handleChange}/>
        <button style={{...style1,...style2}} onClick = {handleClick}>Add</button>

        {
            task.map((item,index)=> <TaskItem color={(index%2)  === 0 ? "blue" : "red"} {...item}/>)
        }
        </>
    )
}

export {Task};