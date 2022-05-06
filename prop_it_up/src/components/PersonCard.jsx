import React, {useState} from 'react';

const PersonCard = (props) => {
    //create new state
    const [age, setAge] = useState(props.user.age);
    //create function
    const incrementAge = () => {
        setAge(age+1);
      }
    //Destructure the props information
    const{firstName, lastName, hairColor} = props.user;
    return(
        
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick = { () => incrementAge()}>Birthday Button for {firstName} {lastName}</button>  
            </div>
    );
}

export default PersonCard;