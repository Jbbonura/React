import './App.css';
import React, {useState} from 'react';
import PersonCard from './components/PersonCard';

function App() {
  //set information
  const [users, setUsers] = useState([
    {firstName: "Jane", lastName:"Doe", age:45, hairColor:"Black"},
    {firstName: "John", lastName:"Smith", age:88, hairColor:"Brown"},
    {firstName: "Millard", lastName:"Fillmore", age:50, hairColor:"Brown"},
    {firstName: "Maria", lastName:"Smith", age:62, hairColor:"Brown"}
  ]);

  
 
  return (
    <div>
      {
        users.map((person, index) => <PersonCard key={index} user={person}/>)
      }
    </div>
  );
}

export default App;
