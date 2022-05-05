import React, {Component} from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    incrementAge = () => {
        let {age} = this.state;
        this.setState({age: age+1});
    } 
    render() {
        const {firstName, lastName, hairColor:color} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {color}</p>
                <button onClick = {this.incrementAge}>Birthday Button for {firstName} {lastName}</button>  
            </div>
        )
    }
}

export default PersonCard;