import React, { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)
  const[value, setValue] = useState('Hello World!')

  function increment() {
    setLikes(likes + 1)
  }

  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className = 'App'>
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input value = {value} onChange={event => setValue(event.target.value)}></input>
      <button onClick={increment}>Increment</button><br></br>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


export default App
