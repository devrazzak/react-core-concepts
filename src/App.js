import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react/cjs/react.production.min';

function App() {
  var person = {name: "md abdur razzak", job : 'singer'};
  var style ={
    color:'red',
    fontSize: '20px'
  }
  const name = ['Md Abdur Razzak', 'Md Arif Hasan', 'Md Masum Islam']
  const friends = [
    {name: 'md abdur razzak', age: 20},
    {name: 'md sirajul islam', age: 25},
    {name: 'md arif hasan', age: 21},
    {name: 'md jahid hasan', age: 22},
  ]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react Person</p>
       {
        friends.map(fd => <Person friend = {fd}> </Person>)
       }
        <Users></Users>
       <Counter></Counter>
      </header>
    </div>
  );
}

function Person(props) {
  var style ={border: '2px solid red', margin: '10px', padding: '15px'}
  const {name, age} = props.friend
  return (
    <div style={style}>
      <p>Hello!</p>
        <h2>My Name: {name}</h2>
        <p>My age is: {age}</p>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  return (
    <div>
      <h3>Dynamic Users:</h3>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={ () => setCount( count - 1 ) }>Decrease</button>
      <button onClick = { () => setCount( count + 1 ) }>Increase</button>
    </div>
  )
}


export default App;
