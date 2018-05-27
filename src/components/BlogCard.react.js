import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import HeartOutline from 'mui-icons/cmdi/heart-outline';
import Heart from 'mui-icons/cmdi/heart';
import shortid from 'shortid'
import ReactDOM from 'react-dom';


export default class BlogCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            expanded: false,
            liked: false,
            id: shortid.generate()
          };
    }

      handleExpandChange = (expanded) => {
        this.setState({expanded: expanded})

      };

      handleExpand = () => {
        this.setState({expanded: true});
      };
    
      handleReduce = () => {
        this.setState({expanded: false});
      };

      handleToggleLike = () => {
        this.setState({liked: !this.state.liked})
      }

      displayText = (x) => {
        // let div = document.createElement('div')
        // div.innerHTML = this.props.data.body
        // console.log(div, typeof div )
        // return <div>{div}</div>
        // ReactDOM.findDOMNode(this.refs[this.state.id]).innerHTML = this.props.data.body
        this.mydiv.innerHTML = this.props.data.body
      }

      render() {
        
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{margin: '0.5em'}}>
                <CardHeader
                  title={this.props.data.title.substring(0,30)+"..."}
                  subtitle={this.props.data.subTitle.substring(0,30)+"..."}
                  avatar={<Avatar>AL</Avatar>}
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardTitle title={this.props.data.title} subtitle={this.props.data.subTitle +"\n"+this.props.data.timeStamp} expandable={true}/>
                <CardText expandable={true} style={{maxHeight: "25em", overflowY: 'scroll'}}>
                  {/* <div ref={(div)=>{div.innerHTML = this.props.data.body}}></div> */}
                  <div ref={(div)=>{div === null ? null : div.innerHTML = this.props.data.body}}></div>
                  
                  {/* {this.displayText()} */}
                </CardText>
                <CardActions expandable={true}>
                  <Checkbox
                      checkedIcon={<Heart />}
                      uncheckedIcon={<HeartOutline />}
                      checked={this.state.liked}
                      style={{margin: '0.5em'}}
                      onClick={this.handleToggleLike}
                      label={this.state.liked? 'You and 1K+': '1K+'}
                  />
                </CardActions>
          </Card>
        )
      }

}