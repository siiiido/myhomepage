import React from "react";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";
import Main from "./screens/Main";
import Works from "./screens/Works";
import SuyeongHackathon from "./screens/works/SuyeongHackathon";
import Capstone from "./screens/works/Capstone";
import NewSpring from "./screens/works/NewSpring";
import ArtRound from "./screens/works/ArtRound";
import Portfolio from "./screens/works/Portfolio";
import { Navbar } from "./screens/Navbar";
import SimpleTodo from "./screens/works/SimpleTodo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
        <Route path={process.env.PUBLIC_URL + "/works/newspring"} component={NewSpring} />
        <Route path={process.env.PUBLIC_URL + "/works/capstone"} component={Capstone} />
        <Route path={process.env.PUBLIC_URL + "/works/suyeonghackathon"} component={SuyeongHackathon} />
        <Route path={process.env.PUBLIC_URL + "/works/artround"} component={ArtRound} />
        <Route path={process.env.PUBLIC_URL + "/works/portfolio"} component={Portfolio} />
        <Route path={process.env.PUBLIC_URL + "/works/simpletodo"} component={SimpleTodo} />
        <Route path={process.env.PUBLIC_URL + "/works"} component={Works} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
