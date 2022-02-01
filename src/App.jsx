import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addNewPost() {
    setPosts([
      ...posts,
      {
        title: "Random",
        postText: "Szöveg4",
        date: "2022.02.02",
      },
    ]);
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <div>
        <input type="text" placeholder="title" />
        <input type="textarea" placeholder="post" />
        <button onClick={addNewPost}>add post</button>
        <button onClick={() => setPosts([])}>delete all</button>
      </div>

      {posts.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.postText}</p>
            <p>{post.date}</p>
            <input type="text" placeholder="new post text" />
            <button>edit</button>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
