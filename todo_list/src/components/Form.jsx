import React, {useState} from 'react';

const Form = (props) => {
    //destructure addItem from props
    const {addItem} = props

    //STATE FOR TASK
    const [task, setTask] = useState("");

    

    const submitHandler = (e) => {
        e.preventDefault();

        //create a item object
        let obj = {
            task,
            completed:false
        }
        addItem(obj);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="task" onChange = {(e) => setTask(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default Form;