import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <h1>CS 361 Music App</h1>

      <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <span id="avatar"></span>
      </section>

      

      {posts.map((post) => {
        return (
          <div>{post}</div>
        )
      })}
    </>
  )
}

export default App
