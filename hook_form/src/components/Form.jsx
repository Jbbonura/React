          import React, {useState} from 'react';

const Form = (props) => {
    
    const [userState, setUserState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [matchingError, setMatchingError] = useState("")

    const changeHandler = (event) => {
        const {value, name} = event.target
        setUserState({
            ...userState, //make a copy of previous state values
            [name] : value // change the key value with the new info
        })
        if(name === 'firstName'){
            if(event.target.value.length < 2){
                setFirstNameError("First Name must be at least 2 characters long");
            }
            else {
                setFirstNameError("");
            }
        }
        else if(name === 'lastName'){
            if(event.target.value.length < 2){
                setLastNameError("Last Name must be at least 2 characters long");
            }
            else {
                setLastNameError("");
            }
        }
        else if(name === 'email'){
            if(event.target.value.length < 5){
                setEmailError("Email must be at least 2 characters long");
            }
            else {
                setEmailError("");
            }
        }
        else if(name === 'password'){
            if(event.target.value.length < 8){
                setPasswordError("Password must be at least 2 characters long");
            }
            else {
                setPasswordError("");
            }
            if(event.target.value !== userState.confirmPassword) {
                setMatchingError("Passwords must match!");
            }
            else {
                setMatchingError("");
            }
        }
        else if(name === 'confirmPassword'){
            if(event.target.value.length < 8){
                setConfirmPasswordError("ConfirmPassword must be at least 2 characters long");
            }
            else {
                setConfirmPasswordError("");
            }
            if(event.target.value !== userState.password) {
                setMatchingError("Passwords must match!");
            }
            else {
                setMatchingError("");
            }
        }
        
    }
    

    return (
        <div>
            <form action="">
                <p>
                    First Name: 
                    <input type="text" name="firstName" onChange = {changeHandler}  />
                </p>
                {
                    firstNameError ?
                    <p style={{color: 'red'}}>{firstNameError}</p> :
                    ''
                }
                <p>
                    Last Name: 
                    <input type="text" name="lastName" onChange = {changeHandler} />
                </p>
                {
                    lastNameError ?
                    <p style={{color: 'red'}}>{lastNameError}</p> :
                    ''
                }
                <p>
                    Email: 
                    <input type="text" name="email" onChange = {changeHandler} />
                </p>
                {
                    emailError ?
                    <p style={{color: 'red'}}>{emailError}</p> :
                    ''
                }
                <p>
                    Password: 
                    <input type="text" name="password" onChange = {changeHandler} />
                </p>
                {
                    passwordError ?
                    <p style={{color: 'red'}}>{passwordError}</p> :
                    ''
                }
                {
                    matchingError ?
                    <p style={{color: 'red'}}>{matchingError}</p> :
                    ''
                }
                <p>
                    Confirm Password: 
                    <input type="text" name="confirmPassword" onChange = {changeHandler} />
                </p>
                {
                    confirmPasswordError ?
                    <p style={{color: 'red'}}>{confirmPasswordError}</p> :
                    ''
                }
                {
                    matchingError ?
                    <p style={{color: 'red'}}>{matchingError}</p> :
                    ''
                }

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