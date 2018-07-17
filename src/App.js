import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      showMenu: false
    }
  }
  render() {
    const { showMenu } = this.state
    return (
      <div className="app">
        <div>
          <nav className="nav-container">
            <div className="brand small">Start Bootstrap</div>
            <div className="awesome">
              <button onClick={() => this.setState({showMenu: !showMenu})}className="menu small">Menu ☰</button>
            </div>
            <div className={showMenu ? "drawer open" : "drawer"}>
              <div className="divfun">
                <div id="list"><a href='#services'>SERVICES</a></div>
                <div id="list">PORTFOLIO</div>
                <div id="list">ABOUT</div>
                <div id="list">TEAM</div>
                <div id="list">CONTACT</div>
              </div>
            </div>

            <div className="brand large">Start Bootstrap</div>
            <div className="large">
              <div id="list"><a href='#services'>SERVICES</a></div>
              <div id="list">PORTFOLIO</div>
              <div id="list">ABOUT</div>
              <div id="list">TEAM</div>
              <div id="list">CONTACT</div>
            </div>
          </nav>

          <div className="body-container">
            <div className="welcome">Welcome to Our Studio!</div>
            <div className="meet">IT'S NICE TO MEET YOU</div>
            <button className="tell">TELL ME MORE</button>
          </div>
        </div>
        <div id="services">
          <div className="title">SERVICES</div>
          <div className="subtitle">Lorem ipsum dolor sit amet consectetur</div>
          <div className="mediacontainer">
            <div>E-Commerce
              <div className="mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </div>
            <div>Responsive Design
              <div className="mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </div>
            <div>Web Security
              <div className="mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
