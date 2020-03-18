import React, { Fragment } from "react";

import "./pageThree.scss";

const PageThree = props => {
  const handlePageThreeClick = () => {
    props.history.push("/");
  };

  return (
    <Fragment>
      <p>This is page Three</p>
      <button onClick={handlePageThreeClick}>Go to home page</button>
    </Fragment>
  );
};

export default PageThree;
