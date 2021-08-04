import React, { useState } from "react";

const Home = (props) => {
  const [state, setState] = useState("");
  const searchQuery = (e) => {
    props.history.push({ pathname: "/search", state });
  };

  const searchingValue = (e) => setState(e.target.value);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-logo">
          <img src="/images/brandLogo.png" alt="brand=logo" />
          <p>Search web app</p>
        </div>
        <form className="home-form" onSubmit={searchQuery}>
          <input
            type="text"
            className="home-input"
            onChange={searchingValue}
            value={state}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div className="home-group"></div>
      </div>
    </div>
  );
};

export default Home;
