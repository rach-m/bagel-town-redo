import React from "react";
const Bakery = () => {
  return (
    <div>
      <h1 style = {{textAlign: 'center',padding: '30px' }}>Bakery</h1>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <ul id="menu-items">
            <li>
              <div className="menu-item-block">
                <span>Cupcakes</span>
                <span>$0.95</span>
              </div>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Mini Cupcakes</span>
                <span>$0.60</span>
              </div>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Cinnamon Sticks</span>
                <span>$0.85</span>
              </div>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Egg Free Cupcake (per order)</span>
                <span>$1.00</span>
              </div>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Large Cookies</span>
                <span>$1.99</span>
              </div>
              <ul>
                <li>Chocolate Chip</li>
                <li>Oatmeal Raisin</li>
                <li>Sprinkle</li>
                <li>Chocolate Dot</li>
                <li>Black and White</li>
                <li>Pink and White</li>
              </ul>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Large Muffins</span>
                <span>$2.50</span>
              </div>
              <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Blueberry</li>
                <li>Chocolate Chocolate Chip</li>
                <li>Coffee Crumb Cake</li>
                <li>Corn</li>
                <li>Carrot</li>
                <li>Cranberry</li>
                <li>Cappucchino</li>
                <li>Chocolate Chip</li>
                <li>Raisin Bran</li>
              </ul>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Pastries</span>
                <span>$2.50</span>
              </div>
              <ul>
                <li>Apple Turnover</li>
                <li>Apricot Danish</li>
                <li>Chocolate Danish</li>
                <li>Cinnamon Danish</li>
                <li>Cinnamon Bun</li>
                <li>Prune Danish</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4>Mini Baked Goods</h4>
          <ul>
            <li>
              <div className="menu-item-block">
                <span>Pastries</span>
                <span>$9.50 per Package</span>
              </div>
              <ul>
                <li>Apple Turnover</li>
                <li>Cinnamon Buns</li>
                <li>Chocolate Brownie</li>
                <li>Chocolate Rugalah</li>
                <li>Cinnamon Rugalah</li>
                <li>Chocolate Gooey Rugalah</li>
                <li>Rainbow Cake</li>
                <li>Whoopie Pie</li>
              </ul>
            </li>
            <li>
              <div className="menu-item-block">
                <span>Cookies</span>
                <span>$10.00 per Package</span>
              </div>
              <ul>
                <li>Chinese Sprinkle</li>
                <li>Chinese Chocolate Sprinkle</li>
                <li>Chocolate Chip Top</li>
                <li>Colored Sprinkle</li>
                <li>Chocolate Chip</li>
                <li>Oatmeal Raisin</li>
                <li>Linzer Tart</li>
                <li>Sugar</li>
                <li>Black & White</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bakery;
