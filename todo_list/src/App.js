import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {

  //create state to keep track of items
  const [items, setItems] = useState ([])

  //create function to add item to items list
  const addItem = (itemObj) => {
    setItems([...items, itemObj])
  }

  //create function to remove item from items list
  const removeItem = (indexToDelete) => {
    const newItems = items.filter((item, i) => indexToDelete !== i);
    setItems(newItems);
  }

  //create function to change completed status
  const completeTask = (searchIndex, completedBool) => {
    const newItems = items.map((item, index) => {
      if(searchIndex === index) {
        item.completed = completedBool;
      }
      return item
    })

    setItems(newItems);
  }

  

  return (
    <div>
      <Form addItem={addItem}/>
      <Display items={items} removeItem ={removeItem} completeTask={completeTask}/>
    </div>
  );
}

export default App;
