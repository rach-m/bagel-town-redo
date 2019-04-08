import React from "react"
const Lunch = () => {
  return(
    <div>
      <h1>$4.50 Lunch Specials</h1>
      <h4>Available from 10:00am - 1:00pm</h4>
      <ul id = "menu-items">
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Omelette with Fries</span>
            </div>
            <i>Our fresh Egg Omelette served with a side of Home Fries</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Bagel & French Toast</span>
            </div>
            <i>Eggs served on a Bagel with one slice of French Toast</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Bagel and Coffee</span>
            </div>
            <i>Eggs served on a Bagel with a small hot Coffee </i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">French Toast & A Drink</span>
            </div>
            <i>2 Slices of French Toast and a 14oz. Orange Juice or a can of Soda </i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Tuna Melt</span>
            </div>
            <i>Tuna Melt served on half a Bagel</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Pizza Bagel</span>
            </div>
            <i>Pizza Bagel served on half a Bagel with a can of Soda</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Cheese Melt</span>
            </div>
            <i>Muenster Cheese Melt with Tomato on a Bagel</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Mozzarella Melt</span>
            </div>
            <i>Mozzarella Cheese Melt with Tomato on a Bagel</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Cheese Bagel</span>
            </div>
            <i>American Cheese, Lettuce, & Tomato on a Bagel</i>
          </li>
           <li>
            <div className="menu-item-block">
              <span className="menu-item">Soup and a Bagel</span>
            </div>
            <i>Soup with a Buttered Bagel (served seasonally)</i>
          </li>
      </ul>
    </div>
  )
}

export default Lunch
