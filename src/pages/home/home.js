import React, { Fragment } from "react";

import "./home.scss";

const Home = props => {
  const handleHomeClick = () => {
    props.setIsActive(true);
    props.history.push("/pageTwo");
  };

  return (
    <Fragment>
      <p>Home</p>
      <p>{props.pepe}</p>
      <button onClick={handleHomeClick}>Go to page two</button>
    </Fragment>
  );
};

export default Home;
