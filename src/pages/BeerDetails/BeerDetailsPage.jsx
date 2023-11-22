import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './beerDetails.css'

const BeerDetailsPage = () => {
  let { beerId } = useParams();

  const [beerDetails, setBeerDetails] = useState(null);

  function fetchOneBeer() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        console.log(res.data);
        setBeerDetails(res.data);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return (
    <div className="beer-details">
      {beerDetails && (
        <>
          <img className="beer-img-details" src={beerDetails.image_url} alt="beer-image" />
          <div className="beer-content">
            <div className="beer-line-content">
              <h1 className="left">{beerDetails.name}</h1>
              <p>{beerDetails.attenuation_level}</p>
            </div>
            <div className="beer-line-content">
              <p className="left">{beerDetails.tagline}</p>
              <p>{beerDetails.first_brewed}</p>
            </div>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BeerDetailsPage;
