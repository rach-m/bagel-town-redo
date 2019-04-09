import React, { Component } from "react";
import "./style.css";
import image1 from "../../assets/bagels.jpg";
import { Link } from "react-router-dom";

class Home extends Component {

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  render() {
    return (
      <div
        style={{
          // display: "flex",
          width: window.innerWidth,
          overflowY: "hidden"
        }}
      >
        <img
          className="responsive"
          src={image1}
          alt="bagel and lox on marble table"
        />
        <div id = 'overlay'>
          <h1 style={{ textAlign: "center" }}>BAGEL TOWN CAFE</h1>
          <br />
          <p style = {{paddingBottom: 15}}>
            A classic <b>kosher, dairy</b> restaurant right in the heart of West
            Hempstead. Come check out our delicious bagels and full assortment
            of <b>dairy-free</b> desserts.
          </p>
          <Link className = "button" to="/menu">Menu</Link>
        </div>
      </div>
    );
  }
}

export default Home;
