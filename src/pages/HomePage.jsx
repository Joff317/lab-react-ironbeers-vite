import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div>
      <div className="all-beers">
        <img src={allBeers} alt="all-beers" />
        <Link to={"/beers"}>
          {" "}
          <h2>All Beers </h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          cupiditate.
        </p>
      </div>
      <div className="random-beer">
        <img src={RandomBeer} alt="all-beers" />
        <Link to={"/random-beer"}>
          {" "}
          <h2>Random Beer </h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          cupiditate.
        </p>
      </div>
      <div className="new-beer">
        <img src={newBeer} alt="all-beers" />
        <Link to={"/new-beer"}>
          {" "}
          <h2>New Beer </h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque,
          cupiditate.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
