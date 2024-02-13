import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    let message = event.target.inputPost.value;
    let postObject = {
      'message': message,
      'likes': 0
    }
    setPosts([...posts, postObject]);
    event.target.inputPost.value = '';
  }

  function handleClick(event) {
    event.preventDefault();

  }

  return (
    <>
      <h1>CS 361 Music App</h1>

      <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <span id="avatar"></span>
      </section>

      <form onSubmit={handleSubmit}>
        <label>
          Write a post!
          <textarea
            name="inputPost"
            rows={4}
            cols={20}
          ></textarea>
        </label>
        <input id="submit" type="submit" value="Post" ></input>
      </form>

      {posts.map((post) => {
        console.log(post)
        return (<div id="post">
          <div id="message">{post.message}</div>
          {post.likes}
          <button onClick={() => {
            post.likes += 1;
            setLikes(likes + 1);
            }}>Like</button>
        </div>)
      })}
    </>
  )
}

export default App
