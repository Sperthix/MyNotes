import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1 className="centered">All apps</h1>
      <ul>
        <li>
          <Link className="link centered" to="/todos">
            Todo list
          </Link>
          <Link className="link centered later" to="/home">
            Expense Tracker
          </Link>
          <Link className="link centered later" to="/home">
            Music player
          </Link>
          <Link className="link centered later" to="/home">
            Storage
          </Link>
          <Link className="link centered later" to="/home">
            PogoMap
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
