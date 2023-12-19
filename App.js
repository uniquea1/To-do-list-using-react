import React,{useState} from 'react'
import './App.css';


function App() {

  const [newItem, setNewItem]= useState("");
  const [items, setItems]= useState([])

  function addItem(){
    if(!newItem){
      alert("Enter a task.");
      return;
    }

   const item ={
    id: Math.floor(Math.random()* 1000),
    value: newItem
   }
   setItems(oldList => [...oldList, item]);
   setNewItem("");
  }

  function deleteItem(id){
     const newArray= items.filter(item=> item.id !== id);
     setItems(newArray);
  }

  return (
    <div className='App'> 
      <h1>To Do-List</h1>
      <input type='text'
      placeholder='Add your task ...' value={newItem} onChange={e=>setNewItem(e.target.value)}></input>
      <button className='button' onClick={() => addItem()}>Add</button>
        <ul>
      {items.map(item =>{
        return(
          <li key={item.id}>{item.value}<button className='delbut' onClick={()=> deleteItem(item.id)}>Remove</button> </li>
        )
      })}
        </ul>
    </div>
  )
}

export default App
