import React from "react";
import { Route, Switch } from "react-router-dom";
import Airline from "./Airline";
import Airlines from "./Airlines";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
}

export default App;
