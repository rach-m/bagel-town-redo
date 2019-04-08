import React from "react"
const Soups = () => {
  return(
    <div id = 'soups'>
    <h1 style={{textAlign:'center'}}>Homemade Soups</h1>
    <div >
      < ul style = {
        {
          display: 'flex',
          justifyContent: "space-around"
        }
      } >
      <li><b>NO  DAIRY </b></li>
      <li><b>NO FLOUR</b></li>
      <li><b>NO SOUP MIX</b></li>
      <li><b>NO MSG</b></li>
      </ul>
      </div>
      < h5 style = {
        {
          textAlign: 'center'
        }
      } > All Soups come with Homemade Croutons </h5>
      < h6 style = {
        {
          textAlign: 'center'
        }
      } > 16 oz. - $3 .25 </h6>
        <ul id="menu-items">
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Butternut Squash Soup</span>
            </div>
            <i>Fresh butternut squash pureed into a smooth flavorful soup</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Mushroom Barley Soup *</span>
            </div>
            <i>Loaded with fresh mushrooms and thickened with barley</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Black Bean & Lentil Soup</span>
            </div>
            <i>Heart healthy option with no salt added</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Split Pea Soup</span>
            </div>
            <i>Thick old fashioned meatless goodness</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Tomato Vegetable Soup</span>
            </div>
            <i>Packed with chunks of whole fresh vegetables - contains sugar</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Vegetable Soup</span>
            </div>
            <i>A delicious blend of potato, celery, carrot, and more</i>
          </li>
          <li>
            <div className="menu-item-block">
              <span className="menu-item">Vegetable Barley Soup *</span>
            </div>
            <i>A thick blend of barley and delicious vegetables</i>
          </li>
          </ul>
          <p>* Contains Gluten</p>
    </div>
  )
}

export default Soups
