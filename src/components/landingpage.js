import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="assets/Amit.jpg"
            alt="WELCOME TO MY PORTFOLIO"
             className="avatar-img"/ >

            <div className="banner-text">
              <h1>ASPIRING SOFTWARE DEVELOPER</h1>
              <hr/>
              <p>Welcome to my personal website. Here, you can find all the personal information regarding my education, experiences, skills and also my life as a traveller.</p>

            <hr/>

          <p>Python| C++ | HTML/CSS | Bootstrap | JavaScript | React | React Native</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/amit-kumar-22603417a/" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-linkedin"></i>
          </a>

          {/* Github */}
          <a href="https://github.com/akumar1999" rel="noopener noreferrer" target="_blank">
          <i class="fab fa-github"></i>
          </a>

          {/* Email */}
          <a href="amitrocker1999@gmail.com" rel="noopener noreferrer" target="_blank">
          <i class="far fa-envelope"></i>
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;