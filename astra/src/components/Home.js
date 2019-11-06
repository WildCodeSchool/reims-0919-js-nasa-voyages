import React from "react"
import "./Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      homeIsOpen: true,
      image: [],
      isLoaded: false
    } // Par défaut la page d'accueil est visible
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(closeHome => ({      
      homeIsOpen: false
    }))
  }

  componentDidMount () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=KQTkxavQRPB7r5x8jjMimvQ5EaxFCrBM1aG9krC4')
      .then(res => res.json())
      .then(json =>
        this.setState({
          isLoaded : true,
          image : json,
        }))
  }

  render () {
    return (
      <section className={this.state.homeIsOpen ? "Homepage" : "Disabled-Homepage"}>
          <img src="https://i.imgur.com/yT7b2Td.png" alt="logo astra" className='astraLogo'/>
          <img src={this.state.image.hdurl} alt="Daily NASA's image" className='backgroundHome'/>
          <button className="enter-button" onClick = {this.handleClick}>Enter</button>
      </section>
      
    )
  }
}


export default Home