import React, { Component } from 'react';
import logo from '../assets/brackets.png';
import background from '../assets/background.jpg';
import '../styles/App.css';
import {Button, Navbar, NavItem, p, h1, h2, h3, h4, h5, a} from 'react-materialize'

class App extends Component {
  render() {

    return (
    <div>
   <header className="v-header container">
   <img className="fullscreen-video-wrap" src={background} alt="background" />
    <div className="header-overlay"></div>
    <div className="header-content text-md-center">
      <h1>Welcome Everyone</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
      <div className="bounce">
        <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
      </div>
    </div>
  </header>
      <div className="App">
        
        <br></br>
          <img src={logo} alt="logo" />
          <h3>Justin Graham</h3>
          <h4>Software Engineer</h4>
          <h5>Web. Mobile. sometimes a bit of both.</h5>
        
        <br></br>
        <p >
          Here you will find information on various projects I have worked on,
        </p>
        <p >
        and technologies I have gained experience in.
        </p>
        
        <div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
