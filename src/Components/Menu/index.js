import React, {
  Component
} from "react";
import Bagels from "./Bagels"
import Breakfast from "./Breakfast"

export default class Menu extends Component{
  state = {
    menu: "breakfast"
  }

  menuChange = async (e) => {
    console.log(e.target.id)
    await this.setState({
      menu: e.target.id
    })
  }
  render(){
    let showing = ""
    switch (this.state.menu) {
      case "bagel":
          showing = <Bagels />
        break;
      case "breakfast":
          showing = <Breakfast />
        break;
      default:
     showing = <Bagels />
        break;
    }
    return <div>
      <div id = "menu-nav">
        <button id = "bagels" onClick = {this.menuChange}>BAGELS</button>
        <button id = "breakfast" onClick = {this.menuChange}>BREAKFAST</button>
        <button id = "lunch" onClick = {this.menuChange}>LUNCH</button>
        <button id = "wraps" onClick = {this.menuChange}>WRAPS</button>
        <button id = "plates" onClick = {this.menuChange}>PLATES</button>
        <button id = "salads" onClick = {this.menuChange}>SALADS</button>
        <button id = "bakery" onClick ={this.menuChange}>BAKERY</button>
        <button id = "beverages" onClick = {this.menuChange}>BEVERAGES</button>
        </div>
        {showing}

    </div>
  }
}
