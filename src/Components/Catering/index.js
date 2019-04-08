import React, {
  Component
} from "react";

export default class Catering extends Component{
  render(){
    return (
      <div>
        <h1>Catering Menu</h1>
        <h5>
          All platters require a 10 person minimum unless otherwise
          specified
        </h5>
        <ul id="menu-items">
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Bagel & Cream Cheese Platter
              </span>
              <span>$5.55/Person </span>
            </div>
            <i>
              Bagels, Plain and Flavored Cream Cheese, Tomato, and Onion
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Bagels & Lox Platter</span>
              <span>$11.55/Person </span>
            </div>
            <i>
              Bagels, Plain and Flavored Cream Cheese, Lox, Tomato, and
              Onion
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Bagels & Lox & Whitefish Salad Platter
              </span>
              <span>$13.55/Person </span>
            </div>
            <i>
              Assorted Bagels, Plain and Flavored Cream Cheese, Lox, White
              Fish Salad, Tomato, and Onion
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Dessert Platter</span>
              <span>$1.95/Person </span>
            </div>
            <i>
              12" Platter of assorted chocolate danishes, cinnamon danishes,
              apple turnovers and brownies baked, cut, and plated in store
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Breakfast Platter</span>
              <span>$2.00/Person</span>
            </div>
            <i>
              A variety of Mini Pastries including Danish and Croissants all
              mixed and baked in house
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Mini Muffin Platter</span>
              <span>$2.00/Person</span>
            </div>
            <i>
              An assortment of house blend Muffins: May include Apple,
              Banana, Blueberry, Corn, Chocolate Chip, Cranberry, or Raisin
              Bran
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Cookie Platter</span>
              <span>$2.00/Person</span>
            </div>
            <i>
              A variety of Cookies baked in house. May include Linzer Tart,
              Sprinkle, Sugar, Dot Cookie, Black & White, Chocolate Chip, or
              Oatmeal Raisin
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Egg Salad (12 Hour Notice Required)
              </span>
              <span>$2.55/Person</span>
            </div>
            <i>
              House made Egg Salad is a great add on to any of the above
              platters
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Tuna Salad (12 Hour Notice Required)
              </span>
              <span>$3.55/Person</span>
            </div>
            <i>
              House made Tuna Salad is a great add on to any of the above
              platters
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Lox Platter (24 Hour Notice Required)
              </span>
              <span>$6.75/Person (6 Person Minimum)</span>
            </div>
            <i>A selection of sliced lox beautifully plated</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Fish Platter (48 Hour Notice Required)
              </span>
              <span>$20.99/Person</span>
            </div>
            <i>
              Whole Deboned Smoked White Fish, Sliced Lox, and Sliced
              Deboned Sable on a beautiful platter.
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Egg White & Spinach Salad</span>
              <span>$2.55/Person</span>
            </div>
            <i>
              House made Egg White and Spinach Salad is a great add on to
              any of the above platters
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Mini Wrap Platter</span>
              <span>$7.00/Person</span>
            </div>
            <i>
              An assortment of house made wraps, it can include: Tuna Salad,
              Egg Salad, Egg White, Spinach Salad, and Grilled Veggie.
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Fruit Salad (48 Hour Notice Required)
              </span>
              <span>$4.00/Person</span>
            </div>
            <i>A seasonal fruit platter</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">
                Side Salads (12 Hour Notice Required)
              </span>
              <span>$2.55/Person</span>
            </div>
            <i>Homemade Macaroni Salad, Potato Salad or Coleslaw</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Coffee Tob Go Box</span>
              <span>$14.00/96oz. (8-10 Cups)</span>
            </div>
            <i>Regular or Decaf Coffee, comes with cups, sugar, and milk</i>
          </li>
        </ul>
        <h3>Corporate Catering</h3>
        <ul id="menu-items">
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Feeds Up To 15 People</span>
              <span>$85.99</span>
            </div>
            <i>
              18 assorted sliced Bagels, Cut up Danishes, 1/2lb. Plain Cream
              Cheese, 1/2lb.Veggie Cream Cheese, 1/2lb. Scallion Cream
              Cheese, 1/4lb. Butter, Sliced Tomato and Onion, 2 Coffee boxes
              with fixings, 1 59oz. Orange Juice (also can add Tuna or Egg
              salads above)
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Feeds Up To 25 People</span>
              <span>$145.99</span>
            </div>
            <i>
         28 assorted sliced Bagels, Cut up Danishes, 1lb. Plain Cream Cheese, 2- 1/2lb Flavored Cream Cheese, 1/4lb. Butter, Sliced Tomato and Onion, 3 Coffee boxes with fixings, 2 59oz. Orange Juice (also can add Tuna or Egg salads above)
            </i>
          </li>

        </ul>
      </div>
    );
  }
}
