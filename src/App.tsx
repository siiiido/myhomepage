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
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Switch>
        <Route path="/works/newspring" component={NewSpring} />
      </Switch>
      <Switch>
        <Route path="/works/capstone" component={Capstone} />
      </Switch>
      <Switch>
        <Route path="/works/suyeonghackathon" component={SuyeongHackathon} />
      </Switch>
      <Switch>
        <Route path="/works/artround" component={ArtRound} />
      </Switch>
      <Switch>
        <Route path="/works/portfolio" component={Portfolio} />
      </Switch>
      <Switch>
        <Route path="/works/simpletodo" component={SimpleTodo} />
      </Switch>
      <Switch>
        <Route path="/works" component={Works} />
      </Switch>
    </HashRouter>
  );
}

export default App;
