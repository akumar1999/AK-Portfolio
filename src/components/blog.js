import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Blog extends Component {
  render() {
    return(
      <div className>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Welcome to blog</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          </Cell>
          <Cell col={6}>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Blog;
