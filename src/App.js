import Navbar from './component/Navbar';
import Home from './component/Home';
import CreateBlog from './component/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './component/BlogDetails';
import NotFound from './component/NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;