import React, { Component } from "react";
import "./style.css";
import NavBar from "../Components/NavBar"
import {Route} from "react-router-dom"
import Catering from "../Components/Catering"
import Menu from "../Components/Menu"
import Home from "../Components/Home"
import Contact from "../Components/Contact"
import About from "../Components/About"

class App extends Component {
  render() {
   return (

  <div className="App">
  <NavBar></NavBar>
    <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/catering" component={Catering} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
  </div>
    )
  }
}

export default App;
