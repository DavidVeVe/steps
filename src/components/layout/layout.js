import React, { Fragment } from "react";

import "./layout.scss";

const Layout = props => {
  return (
    <Fragment>
      {props.children}
      <div className="timeline">
        {props.isActive ? (
          <Fragment>
            <div className="timeline__spot active"></div>
            <div className="timeline__spot"></div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="timeline__spot"></div>
            <div className="timeline__spot active"></div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Layout;
