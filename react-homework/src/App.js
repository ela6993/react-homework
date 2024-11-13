import React, { useState } from 'react'
import Counter from "./componets/Counter"
import Post from "./componets/Post"
import './styles/App.css'
import Postlist from './componets/Postlist'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'i am learning react !!!'},
    {id: 2, title: 'React', body: 'i am learning react !!!'},
    {id: 3, title: 'React', body: 'i am learning react !!!'}
  ])

  return (
    <div className = 'App'>
      <Postlist posts = {{posts}}/>
    </div>
  );
}


export default App
