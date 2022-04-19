import { Link } from 'react-router-dom';

const Navbar = () => {

  const createStyle = {
    backgroundColor: 'rgb(0, 119, 255)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '10px',
    padding: '10px'
  }
  
  return (

    <nav className="navbar">
      <h1>Blog Website</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={ createStyle }>New Blog</Link>
      </div>
    </nav>

  );
}
 
export default Navbar;