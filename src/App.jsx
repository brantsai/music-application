import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/fileopener')
      .then(response => response.json())
      .then(data => {
        let message = data.data['1'][0].message
        let postObject = {
          'message': message,
          'likes': 0
        }
        setPosts([...posts, postObject]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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

      <div><a href="/">Home</a></div>

      <section id="profile">
        <h2>Logged in as <span id="displayName"></span></h2>
        <span id="avatar"></span>
      </section>

      <form onSubmit={handleSubmit}>
        <label>
          Write a post or share a song/playlist to your followers!
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
