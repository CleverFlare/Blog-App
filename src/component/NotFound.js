import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This page was not found <Link className="blue-link" to="/">Click to go to the HomePage...</Link></p>
    </div>
  );
}
 
export default NotFound;