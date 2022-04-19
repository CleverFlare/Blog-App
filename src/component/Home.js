import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {

  const { data: blogs, isPending, error } = useFetch('https://blog-app-b32a9-default-rtdb.firebaseio.com/blogs.json');

  return (
    
    <div className="home">
      {error && <p>{error}</p>}
      {isPending && <h2 style={{ color: "gray", margin: "0 auto" }}>Loading...</h2>}
      {!isPending && <BlogList blogs={blogs} title="All Blogs" />}
    </div>

  );

};

export default Home;
