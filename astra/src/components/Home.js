import React from "react"
import "./Home.css"
import {Link} from 'react-router-dom'

class Home extends React.Component {
  
  render () {
    return (
      <section >
        <img src="https://i.imgur.com/yT7b2Td.png" alt="logo astra"/>
        <Link to='/Game'><button className="enter-button" >Enter</button></Link>
      </section>

    )
  }
}


export default Home