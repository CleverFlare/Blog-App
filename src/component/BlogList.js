import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  return (

    <div className="blog-list">
      <h1>{title}</h1>
      {blogs && blogs.length !== 0?
        Object.keys(blogs).map(
          (id, key) => 
            {
              return (
                <Link to={`/blogs/${id}`} key={key}>
                  <div className="blog-preview">
                      <h2 className="blog-title">{blogs[id].title}</h2>
                    <p className="blog-body">{blogs[id].body}</p>
                    <p className="blog-author">Author: {blogs[id].author}</p>
                  </div>
                </Link>
              )
            }
          )
          :
          <h1 style={{ color: "gray", paddingLeft: "20px" }}>Empty</h1>}
    </div>

  );

};

export default BlogList;