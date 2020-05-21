import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Activities extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.Ed}</p>
          <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
          
        </Cell>
        <Cell col={8}>
          <p>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Activities;