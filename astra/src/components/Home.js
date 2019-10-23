import React from "react"
import "./Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {homeIsOpen: true} // Par défaut l'image d'accueil est visible
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(() => ({      
      homeIsOpen: false
    })
    )
    console.log(this.state)
  }

  render () {
    return (
      <div className="Homepage">
        <img src="https://apod.nasa.gov/apod/image/heao_fleet_big.gif" alt="satellites" />
        <button onClick = {this.handleClick}>Test</button>
      </div>
    )
  }
}


export default Home