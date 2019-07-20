import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Components/Header";
// import TV from "Routes/TV";
// import Home from "Routes/Home";
// import Search from "Routes/Search";
// import Detail from "Routes/Detail";

export default ({
  ComponyName= "sds"
}) => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <div>Home</div>} />
        <Route path="/tv" render={() => <div>TV</div>} />
        <Route path="/search" render={() => <div>Search</div>} />
        <Route path="/movie/:id" render={() => <div>Detail</div>} />
        <Route path="/show/:id" render={() => <div>Detail</div>} />
        <Route path='/:ComponyName/' exact render={() => <div>ComponyName</div>} />
        <Route path='/:ComponyName/detail' render={() => <div>Detail</div>} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);