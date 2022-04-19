import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://blog-app-b32a9-default-rtdb.firebaseio.com/blogs/'+id+'.json');
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch('https://blog-app-b32a9-default-rtdb.firebaseio.com/blogs/'+id+'.json', 
    {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })
  }

  return (
    <div className="blog-details">
      {error && <p>{error}</p>}
      {isPending && <h2 style={{ color: "gray", margin: "0 auto" }}>Loading...</h2>}
      {blog && (
        <article>
          <h2 className="article-title">{ blog.title }</h2>
          <p className="article-author">written by: { blog.author }</p>
          <pre className="article-body">{ blog.body }</pre>
          {!blog.isRequired && <button className="article-delete" onClick={handleDelete}>Delete</button>}
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;