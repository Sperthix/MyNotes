import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <ul>
      <li>
        <Link className='link centered' to="/home">Home</Link>
      </li>
      <li>
        <Link className='link centered' to="/todos">Todo list</Link>
      </li>
    </ul>
  );
};

export default HomePage;
