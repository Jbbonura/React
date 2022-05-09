import React, {useState} from 'react';

const Form = (props) => {
    
    const [userState, setUserState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (event) => {
        const {value, name} = event.target
        setUserState({
            ...userState, //make a copy of previous state values
            [name] : value // change the key value with the new info
        })
    }

    return (
        <div>
            <form action="">
                <p>
                    First Name: 
                    <input type="text" name="firstName" onChange = {changeHandler}  />
                </p>
                <p>
                    Last Name: 
                    <input type="text" name="lastName" onChange = {changeHandler} />
                </p>
                <p>
                    Email: 
                    <input type="text" name="email" onChange = {changeHandler} />
                </p>
                <p>
                    Password: 
                    <input type="text" name="password" onChange = {changeHandler} />
                </p>
                <p>
                    Confirm Password: 
                    <input type="text" name="confirmPassword" onChange = {changeHandler} />
                </p>
            </form>
            <p>First Name: {userState.firstName}</p>
            <p>Last Name: {userState.lastName}</p>
            <p>Email: {userState.email}</p>
            <p>Password: {userState.password}</p>
            <p>Confirm Password: {userState.confirmPassword}</p>
        </div>
    )
}

export default Form;