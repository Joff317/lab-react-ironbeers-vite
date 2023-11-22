import axios from "axios";
import { useEffect, useState } from "react";

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState([]);

  function fetchOneRandomBeer() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((res) => {
        console.log(res.data);
        setRandomBeer(res.data);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchOneRandomBeer();
  }, []);

  return (
    <div className="beer-details">
      {randomBeer ? (
        <>
          <img
            style={{ width: "200px", height: "400px" }}
            src={randomBeer.image_url}
            alt="beer-image"
          />
          <div className="beer-content">
            <div className="beer-line-content">
              <h1 className="left">{randomBeer.name}</h1>
              <p>{randomBeer.attenuation_level}</p>
            </div>
            <div className="beer-line-content">
              <p className="left">{randomBeer.tagline}</p>
              <p>{randomBeer.first_brewed}</p>
            </div>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </>
      ) 
      : (
        <p>Data is loading...</p>
      )
      }
    </div>
  );
};

export default RandomBeerPage;
