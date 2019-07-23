import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Chip, ChipContact } from 'react-mdl';


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
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://europa.eu/capacity4dev/system/files/images/photo/bangladesh.gif) center / cover'}}>BANGLADESH</CardTitle>
    <CardText>
        My first international journey begin with neighbouring country of india, Bangladesh....TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <Chip style={{marginRight:'2px'}} >2006-2010</Chip>

        <Chip style={{marginRight:'2px'}}><ChipContact className="mdl-color--teal mdl-color-text--white">D</ChipContact>Dhaka</Chip>
    </CardMenu>
</Card>


         {/*Blog 2*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://www.techicy.com/wp-content/uploads/2015/01/Indian-Flag-Wallpapers-HD-Images-Free-Download-1024x640.jpg) center / cover'}}>INDIA</CardTitle>
    <CardText>
        Finally after 3 years, it was about time to move back to India...TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}} >2010-2013</Chip>

    <Chip style={{marginRight:'2px'}}><ChipContact className="mdl-color--teal mdl-color-text--white">ND</ChipContact>New Delhi</Chip>
    </CardMenu>
</Card>
{/*Blog 3*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.motosha.com/wp-content/uploads/sri-lanka-flag-1024x569.jpg) center / cover'}}>SRI LANKA</CardTitle>
    <CardText>
        Another journey begins, country known as pearl of the Indian Ocean, Sri Lanka... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
        <CardMenu style={{color: '#fff'}}>
        <Chip style={{marginRight:'2px'}} >2013-2017</Chip>

        <Chip style={{marginRight:'2px'}}><ChipContact className="mdl-color--teal mdl-color-text--white">C</ChipContact>Colombo</Chip>

    </CardMenu>
</Card>
{/*blog 4*/}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://wallpapercave.com/wp/qd96rH3.jpg) center / cover'}}>USA</CardTitle>
    <CardText>
        After visit of two neighbouring countries, finally it's time to visit business capital of the world, 
        NEW YORK, USA... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}} >2017-Present</Chip>

        <Chip style={{marginRight:'2px'}}><ChipContact className="mdl-color--teal mdl-color-text--white">NY</ChipContact>New York</Chip>
    </CardMenu>
</Card>
         {/*Blog 5*/}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://www.techicy.com/wp-content/uploads/2015/01/Indian-Flag-Wallpapers-HD-Images-Free-Download-1024x640.jpg) center / cover'}}>INDIA</CardTitle>
    <CardText>
        Finally, the international tour gets over and time to head back to my country, INDIA... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}} >2017-present</Chip>

    <Chip style={{marginRight:'2px'}}><ChipContact className="mdl-color--teal mdl-color-text--white">K</ChipContact>Kurukshetra</Chip>

    </CardMenu>
</Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          {/*interest 1 */}
<Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3889&q=80) center / cover'}}>PHOTOGRAPHY</CardTitle>
    <CardText style={{color: 'black'}}>
        Photography....TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}}><ChipContact style={{ background: 'url(https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3889&q=80)' }}/>PHOTOGRAPHY</Chip>
    <Chip style={{marginRight:'2px'}}>Nikon 7200</Chip>
    <Chip style={{marginRight:'2px'}}>Iphone 8 Plus</Chip>
    </CardMenu>
</Card>
         {/*interest 2 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80) center / cover'}}>TRAVELLING</CardTitle>
    <CardText style={{color: 'black'}}>
        Travelling... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}}><ChipContact style={{ background: 'url(https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2400&q=80) center / cover' }}/>TRAVELLING</Chip>
    <Chip style={{marginRight:'2px'}}>India</Chip>
    <Chip style={{marginRight:'2px'}}>bangladesh</Chip>
    <Chip style={{marginRight:'2px'}}>Sri Lanka</Chip>
    <Chip style={{marginRight:'2px'}}>USA</Chip>
    </CardMenu>
</Card>

{/*interest 3 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://images8.alphacoders.com/442/thumb-1920-442882.jpg) center / cover'}}>CRICKET</CardTitle>
    <CardText style={{color: 'black'}}>
        Cricket... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}}><ChipContact style={{ background: 'url(https://images8.alphacoders.com/442/thumb-1920-442882.jpg) 0 0 / cover' }}/>CRICKET</Chip>
    <Chip style={{marginRight:'2px'}}>India</Chip>
    </CardMenu>
</Card>

{/*interest 4 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=80) center / cover'}}>BADMINTON</CardTitle>
    <CardText style={{color: 'black'}}>
       Badminton.... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}}><ChipContact style={{ background: 'url(https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=80) 0 0 / cover' }}/>CRICKET</Chip>
    <Chip style={{marginRight:'2px'}}>SAISA</Chip>
    </CardMenu>
</Card>

{/*interest 4 */}
         <Card shadow={5} style={{width: '1000px', margin: 'auto', marginTop: '30px', marginBottom: '30px'}}>
    <CardTitle style={{color: '#fff',  height: '300px', background: 'url(https://akumar17.files.wordpress.com/2016/11/wwwcreator-me_5ojwfg.gif?w=2924) center / cover'}}>Care for Paws (Volunteer Founder)</CardTitle>
    <CardText style={{color: 'black'}}>
        Volunteer Service, CARE FOR PAWs... TAP FOR MORE
    </CardText>
    <CardActions border>
        <Button colored>Click to Read...</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
    <Chip style={{marginRight:'2px'}}><ChipContact style={{ background: 'url(https://akumar17.files.wordpress.com/2016/11/wwwcreator-me_5ojwfg.gif?w=2924) 0 0 / cover' }}/>CFP</Chip>
    <Chip style={{marginRight:'2px'}}>Founded 2016-17</Chip>
    <Chip style={{marginRight:'2px'}}>Save Dogs</Chip>
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
