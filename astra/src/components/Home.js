import React from "react"
import "./Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {homeIsOpen: true} // Par défaut l'image d'accueil est visible
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(closeHome=> ({      
      homeIsOpen: false
    })
    )
    console.log(this.state)
  }

  render () {
    return (
      <section className="Homepage">
        <button className="enter-button" onClick = {this.handleClick}>Test</button>
      </section>
      
    )
  }
}


export default Home