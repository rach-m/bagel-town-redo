import React from "react";
import "./style.css";
const Beverages = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th>12oz.</th>
            <th>16oz.</th>
            <th>20oz.</th>
            <th>32oz.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hot Coffee</td>
            <td>$1.35</td>
            <td>$1.85</td>
            <td>$1.99</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Hot Tea</td>
            <td>$1.35</td>
            <td>$1.85</td>
            <td>$1.99</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Hot Cocoa</td>
            <td>$1.35</td>
            <td>$1.85</td>
            <td>$1.99</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Iced Coffee</td>
            <td>x</td>
            <td>x</td>
            <td>$2.50</td>
            <td>$3.25</td>
          </tr>
          <tr>
            <td>Iced Tea</td>
            <td>x</td>
            <td>x</td>
            <td>$1.50</td>
            <td>$2.25</td>
          </tr>
        </tbody>
      </table>
      <br />
      <ul>
        <li>Orange Juice</li>
        <ul>
          <li>6oz. - $1.50</li>
          <li>14oz. - $2.20</li>
        </ul>
        <li>
          Chocolate Milk
          <ul>
            <li>$2.00</li>
          </ul>
        </li>
        <li>
          Snapple, Gatorade
          <ul>
            <li>$2.00</li>
          </ul>
        </li>
        <li>
          Soda
          <ul>
            <li>Can - $1.00</li>
          </ul>
          <ul>
            <li>Bottle - $2.00</li>
          </ul>
        </li>
        <li>
          Water
          <ul>
            <li>16oz. - $1.00</li>
          </ul>
          <ul>
            <li>24oz. - $1.49</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Beverages;
