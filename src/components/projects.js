import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', opacity:'.9', background: 'url(https://miro.medium.com/max/3000/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} >PERSONAL WEBSITE</CardTitle>
            <CardText>
              Used React framework, material UI, nodejs, and yarn with customizing CSS and UI components to create personal portfolio.
              
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', opacity:'.9', background: 'url(https://miro.medium.com/max/1750/1*C3kxjCrJy-aWSMpe2chfaA.png) center / cover'}} >DawaKhana App</CardTitle>
            <CardText>
              mobile app "DawaKhana", used Reactnative, material UI, nodejs, and yarn with customizing CSS and UI components."
              
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', opacity:'.9', background: 'url(https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot-700x408.jpg) center / cover'}} >Python Chatbot</CardTitle>
            <CardText>
            Python based desktop assistant, helping in performing basic tasks i.e., sending mails, 
            opening specific folder. Uses GTTS (google text-to-speech) and smtp library of Python. 
              
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      )
    } /*else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }*/
}
  render() {
    return(
      <div>
      
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
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
export default Projects;
