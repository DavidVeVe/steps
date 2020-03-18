import React, { Fragment } from "react";

import "./pageTwo.scss";

const PageTwo = props => {
  const handlePageTwoClick = () => {
    props.setIsActive(false);
    props.history.push("/pageThree");
  };

  return (
    <Fragment>
      <p>This is page Two</p>
      <button onClick={handlePageTwoClick}>Go to page three</button>
    </Fragment>
  );
};

export default PageTwo;
