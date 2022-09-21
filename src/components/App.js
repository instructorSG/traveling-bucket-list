import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About"; 
import NavBar from "./NavBar";

function App() {
    const [page, setPage] = useState("/")
  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;