import React from "react";
import ReactMapboxGl, {Popup, Marker} from "react-mapbox-gl";
import icon from "../../assets/icon.png";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicmFjaDY3NiIsImEiOiJjanBzc2pybmMxZmhuNGVvMzNvNnhtYW1wIn0.Sfb5UddO-q6W__ZTJs6x1Q"
});

export default class Contact extends React.Component {
  state = { display: false };

  displayPopup = () => {
    this.setState({
      display: !this.state.display
    });
  };

  handleSubmit = () => {};

  render() {
    let popup = "";

    if (this.state.display) {
      popup = (
        <Popup
          coordinates={[-73.653956, 40.696412]}
          visible={this.state.display}
          offset={{
            "bottom-left": [12, -38],
            bottom: [0, -38],
            "bottom-right": [-12, -38]
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p>
              <b>Bagel Town</b>
            </p>
            <p>488 Hempstead Avenue West Hempstead, NY 11552</p>
          </div>
        </Popup>
      );
    }

    return (
      <div style={{ display: "flex" }}>
        <div>
          <Map
            onClick={() => {
              this.setState({ display: false });
            }}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "500px",
              width: "500px"
            }}
            center={[-73.653956, 40.696412]}
            zoom={[15]}
          >
            <Marker coordinates={[-73.653956, 40.696412]} anchor="bottom">
              <img
                src={icon}
                alt="location marker"
                style={{ height: "50px", width: "50px" }}
                onClick={this.displayPopup}
              />
            </Marker>
            {popup}
          </Map>
        </div>
        <div>
          <h1> Contact Us</h1>
          <h3>We Love To Hear From YOU!</h3>
          <p>Phone: 516-505-5556</p>
          <p>Fax: 516-505-5557</p>
          <p>Email: bageltownwh@gmail.com</p>

          <form
            name="contactform"
            method="POST"
            action="http://localhost:9000/send_form_email.php"
          >
            <label htmlFor="fullname">Name:</label>
            <input required type="text" name="fullname" />
            <br />
            <label htmlFor="email">Email:</label>
            <input required type="text" name="email" />
            <br />
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" />
            <br />
            <label htmlFor="message">Message:</label>
            <input required type="text" name="message" />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
