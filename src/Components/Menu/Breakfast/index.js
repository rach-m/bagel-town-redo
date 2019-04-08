import React from "react";
import "./style.css";
const Breakfast = () => {
  return (
    <div>
      <h1>Breakfast/Commuter Specials</h1>
      <h4>Served Weekdays 6:30am - 10am</h4>
      <h6>
        Optional Add Ons - Hot Sauce, Ketchup, Salt & Pepper
        </h6>
        <h6>
       Add $1.00 per order for Small Hot Beverage or 6oz. Orange Juice
      </h6>
      <p>
        The following are served on your choice of a Bagel, Roll, Bialy or
        Wrap
      </p>
      <div id="breakfast">
        <ul id="menu-items">
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Omelette</span>
              <span>$3.79</span>
            </div>
            <i>2 Eggs and Cheese</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Three Cheese Omelette</span>
              <span>$4.25</span>
            </div>
            <i> 2 Eggs with American, Mozzarella & Muenster Cheese</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Egg White Omelette</span>
              <span>$4.25</span>
            </div>
            <i> 3 Egg Whites and Cheese</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item"> Omelette & French Toast </span>
              <span>$4.99</span>
            </div>
            <i>
              2 Eggs, Cheese, and 1 Slice of French Toast (no Bagel option)
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Cream Cheese</span>
              <span>$2.75</span>
            </div>
            <i> Add $0.25 for Jelly</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Flavored Cream Cheese</span>
              <span>$2.99</span>
            </div>
            <i> Your choice of Vegetable, Scallion, or Olive Cream Cheese</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Cream Cheese & Lox</span>
              <span>$4.25</span>
            </div>
            <i> Cream Cheese and Lox</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Butter</span>
              <span>$1.75</span>
            </div>
            <i> Add $0.25 for Jelly</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">French Toast</span>
              <span>$3.79 </span>
            </div>
            <i> 3 Pieces of French Toast (no Bagel option)</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Burrito</span>
              <span>$4.25</span>
            </div>
            <i>3 Egg Omelette with Cheese </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Vegetable Burrito</span>
              <span>$4.51</span>
            </div>
            <i>3 Egg Omelette with 3 Vegetable of your choice</i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breakfast;

// Add on Hot Sauce - Ketchup - salt - pepper

// ALL Commuter Specials Add $1 .00 per order
// Small Hot Beverage or 6 oz.Orange Juice
