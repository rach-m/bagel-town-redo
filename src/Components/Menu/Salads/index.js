import React from "react";

const Salads = () => {
  return (
    <div>
      <h1>Salads</h1>
      <p>
        * Add 3 for $1.00: Chick peas, Egg whites, Craisins, Raisins,
        Cucumber, Tomato, Carrot, Radish, Red Pepper, Green Pepper, Scallions,
        Mushroom, Corn, Kidney beans, Green Olive, Black Olive, Sun Dried
        Tomato
      </p>
      <p>
        Add one for $2.00: Scoop of Tuna, Scoop of Egg Salad,  Scoop of Egg
        White Spinach
      </p>
      <div id="salads">
        <ul id="menu-items">
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Hard Boiled Egg Plate</span>
              <span>$2.99</span>
            </div>
            <i>3 Hard Boiled Eggs served with Carrot and Celery</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Caesar Salad *</span>
              <span>$4.99</span>
            </div>
            <i>
              Romaine Lettuce with homemade Croutons and House Blend Dressing
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Garden Salad *</span>
              <span>$5.99</span>
            </div>
            <i>
              Lettuce, Cucumber, Carrot, Radish, Green Pepper, and Red Pepper
            </i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Greek Salad *</span>
              <span>$6.99</span>
            </div>
            <i>
              Lettuce, Cucumber, Carrot, Red Onion, Olive, and Feta Cheese
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Salads;
