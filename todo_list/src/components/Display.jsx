import React, {useState} from 'react';

const Display = (props) => {
    // destructure items from props
    const {items, removeItem, completeTask} = props;
    //STATE FOR COMPLETED
    const [completed, setCompleted] = useState();
    //delete handler
    const deleteHandler = (e, index) => {
        removeItem(index); 
    }
    
    
    return (
        <div>
            <ul>
                {
                    items.map((item, index) => {
                        const {task, completed} = item;
                        return completed ? 
                        (
                            <li style={{textDecoration : 'line-through'}}>
                                {task} <input type="checkbox" checked={completed}  onClick={(e) =>completeTask(index, e.target.checked)}/><button onClick = {(e) => deleteHandler(e, index)}>DELETE</button>
                            </li> 
                        ):(
                            <li>
                                {task} <input type="checkbox" checked={completed}  onClick={(e) =>completeTask(index, e.target.checked)}/><button onClick = {(e) => deleteHandler(e, index)}>DELETE</button>
                            </li> 
                        ) 
                    })
                }
            </ul>
        </div>
    )
}

export default Display;