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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Route exact path="/" component={Main} />
      <Route path="/works/newspring" component={NewSpring} />
      <Route path="/works/capstone" component={Capstone} />
      <Route path="/works/suyeonghackathon" component={SuyeongHackathon} />
      <Route path="/works/artround" component={ArtRound} />
      <Route path="/works/portfolio" component={Portfolio} />
      <Route path="/works/simpletodo" component={SimpleTodo} />
      <Route path="/works" component={Works} />
    </BrowserRouter>
  );
}

export default App;
