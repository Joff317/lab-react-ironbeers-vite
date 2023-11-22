import axios from "axios";
import { useEffect, useState } from "react";
import "./allBeers.css";
import { Link } from "react-router-dom";

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");

  // function fetchAllBeer() {
  const fetchbeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((res) => {
        console.log(res);
        setBeers(res.data);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchbeer();
  }, [query]);

  const handleQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="beer-list">
      <input
        className="search-beer"
        type="text"
        placeholder="search for special beers"
        value={query}
        onChange={handleQuery}
      />
      <ul>
        {beers.map((beer, index) => (
          <Link key={index} to={`/beers/${beer._id}`}>
            <li className="list-beer">
              <img className="li-img" src={beer.image_url} alt="" />
              <div className="beer-content">
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AllBeersPage;
