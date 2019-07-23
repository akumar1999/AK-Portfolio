import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Projectresume extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.Ed}</p>          
        </Cell>
        <Cell col={8}>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Projectresume;