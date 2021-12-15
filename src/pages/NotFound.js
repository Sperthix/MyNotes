import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <p className="centered">Page not found!</p>
      <Link className="link centered" to="/home">
        Go home, ur drunk
      </Link>
    </section>
  );
};

export default NotFound;
