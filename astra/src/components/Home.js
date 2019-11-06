import React from "react"
import "./Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {homeIsOpen: true} // Par défaut la page d'accueil est visible
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(closeHome => ({      
      homeIsOpen: false
    }))
  }

  render () {
    return (
      <section className={this.state.homeIsOpen ? "Homepage" : "Disabled-Homepage"}>
        <img src="https://i.imgur.com/yT7b2Td.png" alt="logo astra"/>
        <button className="enter-button" onClick = {this.handleClick}>Enter</button>
      </section>
      
    )
  }
}


export default Home