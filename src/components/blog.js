import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="blog-grid">
          {/* Blog 1 */}
          <Card shadow={5} style={{width: '1000px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://europa.eu/capacity4dev/system/files/images/photo/bangladesh.gif) center / cover'}}>Bangladesh</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

         {/*Blog 2*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://imggmi.com/full/2019/7/23/ab6d4cff7fda3272f0250a90b0c084b8-full.gif.html) center / cover'}}>India</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*Blog 3*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Sri Lanka</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
{/*blog 4*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>USA</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          {/*interest 1 */}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>PHOTOGRAPHY</CardTitle>
    <CardText style={{color: 'black'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
         {/*interest 2 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>TRAVELLING</CardTitle>
    <CardText style={{color: 'black'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*interest 3 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>CRICKET</CardTitle>
    <CardText style={{color: 'black'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*interest 4 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>BADMINTON</CardTitle>
    <CardText style={{color: 'black'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*interest 4 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff',  height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Care for Paws (Volunteer Founder)</CardTitle>
    <CardText style={{color: 'black'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>




        </div>
      ) 
    } 
}
  render() {
    return(
      <div>
      
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Background</Tab>
          <Tab>Interests</Tab>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Blog;
