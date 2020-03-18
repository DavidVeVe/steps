import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/";
import PageTwo from "./pages/page-two";
import PageThree from "./pages/page-three";
import Layout from "./components/layout";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home {...props} setIsActive={setIsActive} isActive={isActive} />
          )}
        />
        <Layout isActive={isActive}>
          <Route
            path="/pageTwo"
            render={props => (
              <PageTwo
                {...props}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            )}
          />
          <Route path="/pageThree" component={PageThree} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
