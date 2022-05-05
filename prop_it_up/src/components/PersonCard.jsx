import React, {Component} from 'react';

class PersonCard extends React.Component {
    render() {
        const {firstName, lastName, age, hairColor:color} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {color}</p>
            </div>
        )
    }
}

export default PersonCard;