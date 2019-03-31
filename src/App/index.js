import React, { Component } from "react";
import "./style.css";
import NavBar from "../NavBar"
import {Route} from "react-router-dom"
import Catering from "../Catering"
import Menu from "../Menu"
import Home from "../Home"

class App extends Component {
  render() {
   return (

  <div className="App">
  <NavBar></NavBar>
    <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/catering" component={Catering} />
  </div>
    )
  }
}

export default App;
