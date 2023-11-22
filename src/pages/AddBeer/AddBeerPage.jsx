import { useCallback, useRef } from "react";
import "./addBeer.css";
import axios from "axios";
const AddBeerPage = () => {
  const nameInput = useRef();
  const taglineInput = useRef();
  const descriptionInput = useRef();
  const firstBrewedInput = useRef();
  const brewerTipsInput = useRef();
  const attenuationLevelInput = useRef();
  const contributedByInput = useRef();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const beer = {
      name: nameInput.current?.value,
      tagline: taglineInput.current?.value,
      description: descriptionInput.current?.value,
      firest_brewed: firstBrewedInput.current?.value,
      brewer_tips: brewerTipsInput.current?.value,
      attenuation_level: attenuationLevelInput.current?.value,
      contributed_by: taglineInput.current?.value,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.error(e));
  });

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input">
        <label htmlFor="">Name</label>
        <input ref={nameInput} type="text" name="text" />
      </div>

      <div className="input">
        <label htmlFor="">tagline</label>
        <input ref={taglineInput} type="text" name="tagline" />
      </div>

      <div className="input">
        <label htmlFor="">Description</label>
        <textarea
          ref={descriptionInput}
          type="text"
          name="description"
        ></textarea>
      </div>

      <div className="input">
        <label htmlFor="">First Brewed</label>
        <input ref={firstBrewedInput} type="text" name="first_brewed" />
      </div>

      <div className="input">
        <label htmlFor="">Brewer's Tips</label>
        <input ref={brewerTipsInput} type="text" name="brewer_tips" />
      </div>

      <div className="input">
        <label htmlFor="">Attenuation Level</label>
        <input
          ref={attenuationLevelInput}
          type="number"
          name="attenuation_level"
        />
      </div>

      <div className="input">
        <label htmlFor="">Contributed By</label>
        <input ref={contributedByInput} type="text" name="contributed_by" />
      </div>

      <button type="submit">Add beer</button>
    </form>
  );
};

export default AddBeerPage;
