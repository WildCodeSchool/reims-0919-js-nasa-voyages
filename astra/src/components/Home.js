import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeIsOpen: true,
      image: [],
      isLoaded: false
    }; // Par défaut la page d'accueil est visible
  }

  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=KQTkxavQRPB7r5x8jjMimvQ5EaxFCrBM1aG9krC4"
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded: true,
          image: json
        })
      );
  }

  render() {
    return (
      <section>
        <img
          src={this.state.image.url}
          alt={this.state.image.explanation}
          className="backgroundHome"
        />
        <img
          src="https://i.imgur.com/yT7b2Td.png"
          alt="logo astra"
          className="astraLogo"
        />
        <Link to="/Reception" className="enter-button">
          Enter
        </Link>
      </section>
    );
  }
}

export default Home;
