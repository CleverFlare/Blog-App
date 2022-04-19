import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const createData = { title, body, author };
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    fetch('https://blog-app-b32a9-default-rtdb.firebaseio.com/blogs.json', 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createData)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    })
  }

  return ( 
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <h2 className="blog-page-title">Create a Blog with our Blog creator</h2>
        <label>Blog Title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
         />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <input
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        { !isPending && <button>Add Blog</button> }
        { isPending && <button>Adding a Blog...</button> }
      </form>
    </div>
  );
}
 
export default CreateBlog;