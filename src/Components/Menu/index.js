import React, { Component } from "react";
import Bagels from "./Bagels";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import LunchMenu from "./LunchMenu";
import Salads from "./Salads";
import Bakery from "./Bakery";
import Beverages from "./Beverages";
import Soups from "./Soups"
import "./style.css"
export default class Menu extends Component {
  state = {
    menu: "bakery"
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
      case "lunch-menu":
        showing = <LunchMenu />;
        break;
      case "lunch-special":
        showing = <Lunch />;
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
        case "soups":
        showing = <Soups /> ;
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
            BREAKFAST SPECIALS
          </button>
          <button id="lunch-special" onClick={this.menuChange}>
            LUNCH SPECIALS
          </button>
          <button id="lunch-menu" onClick={this.menuChange}>
            LUNCH MENU
          </button>
          <button id="salads" onClick={this.menuChange}>
            SALADS
          </button>
          <button id="soups" onClick={this.menuChange}>
            SOUPS
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
