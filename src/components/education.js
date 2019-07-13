import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid className="ed-color">
        <Cell col={4}>
          <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.Activities}</p>
          <h7 style={{marginTop:'0px'}}>{this.props.Designation}</h7>
          <p>{this.props.courses}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;