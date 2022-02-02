import { useState } from "react";
import "./App.css";

const Post = ({ post, editPost, deletePost }) => {
  const [newTitle, setNewTitle] = useState(post.title);
  const [newText, setNewText] = useState(post.postText);
  const [isEditing, setEditing] = useState(false);
  return isEditing ? (
    <div key={post.id}>
      <input
        className="title-edit"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="new post title"
      />
      <textarea
        className="text-edit"
        onChange={(e) => setNewText(e.target.value)}
        value={newText}
        placeholder="new post t"
      />

      <p>{post.date.toLocaleString()}</p>

      <button
        onClick={() =>
          editPost(post.id, newTitle, newText, isEditing, setEditing)
        }
      >
        submit change
      </button>
    </div>
  ) : (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.postText}</p>
      <p>{post.date.toLocaleString()}</p>
      <button onClick={() => setEditing(true)}>edit</button>
      <button onClick={() => deletePost(post.id)}>delete</button>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const addNewPost = () => {
    setPosts([
      ...posts,
      {
        title: title,
        postText: postText,
        date: new Date(),
        id: Math.random(),
      },
    ]);
    setTitle("");
    setPostText("");
  };

  const deletePost = (deleteThis) =>
    setPosts(posts.filter((post) => post.id !== deleteThis));

  const editPost = (id, newTitle, newText, isEditing, setEditing) => {
    const newList = [];
    for (let post of posts) {
      if (post.id === id) {
        post.title = newTitle;
        post.postText = newText;
      }
      newList.push(post);
    }
    setPosts(newList);
    setEditing(false);
  };

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      <div>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          value={title}
        />
        <input
          onChange={(e) => setPostText(e.target.value)}
          type="textarea"
          placeholder="post"
          value={postText}
        />
        <button onClick={addNewPost}>add post</button>
        <button onClick={() => setPosts([])}>delete all</button>
      </div>

      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          editPost={editPost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default App;
