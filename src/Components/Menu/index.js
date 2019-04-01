import React, { Component } from "react";
import Bagels from "./Bagels";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Wraps from "./Wraps";
import Plates from "./Plates";
import Salads from "./Salads";
import Bakery from "./Bakery";
import Beverages from "./Beverages";

export default class Menu extends Component {
  state = {
    menu: "breakfast"
  };

  menuChange = async e => {
    console.log(e.target.id);
    await this.setState({
      menu: e.target.id
    });
  };
  render() {

    let showing = "";
    switch (this.state.menu) {
      case "bagel":
        showing = <Bagels />;
        break;
      case "breakfast":
        showing = <Breakfast />;
        break;
      case "lunch":
        showing = <Lunch/>;
        break;
      case "wraps":
        showing = <Wraps />;
        break;
      case "plates":
        showing = <Plates />;
        break;
      case "salads":
        showing = <Salads />;
        break;
      case "bakery":
        showing = <Bakery />;
        break;
      case "beverages":
        showing = <Beverages />;
        break;
      default:
        showing = <Bagels />;
        break;
    }
    return (

      <div>
        <div id="menu-nav">
          <button id="bagels" onClick={this.menuChange}>
            BAGELS
          </button>
          <button id="breakfast" onClick={this.menuChange}>
            BREAKFAST
          </button>
          <button id="lunch" onClick={this.menuChange}>
            LUNCH
          </button>
          <button id="wraps" onClick={this.menuChange}>
            WRAPS
          </button>
          <button id="plates" onClick={this.menuChange}>
            PLATES
          </button>
          <button id="salads" onClick={this.menuChange}>
            SALADS
          </button>
          <button id="bakery" onClick={this.menuChange}>
            BAKERY
          </button>
          <button id="beverages" onClick={this.menuChange}>
            BEVERAGES
          </button>
        </div>
        {showing}
      </div>
    );
  }
}
