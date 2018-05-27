import React,  {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase'
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Facebook from 'mui-icons/cmdi/facebook';
import Twitter from 'mui-icons/cmdi/twitter';
import Google from 'mui-icons/cmdi/google';
import Instagram from 'mui-icons/cmdi/instagram';


export default class Author extends Component {

    constructor(props){
        super(props)
        this.state = {
            expanded: false,
            feedback: '',
            openSnack: false
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };
    
    handleReduce = () => {
        this.setState({expanded: false});
    };

    sendFeedback = () => {
        firebase.database().ref().child('feedbacks').push(this.state.feedback).then(() =>{
            this.setState({
                openSnack: true,
                feedback: ''
            })
        })
    }

    handleFeedbackChange = (event) => {
        this.setState({
            feedback: event.target.value
        })
    }

    handleSnackClose = () => {this.setState({openSnack: false})}
    

    render(){
        return(
            <div style={{maxHeight: "28em", overflowY: "scroll"}}>
                <center>
                    <img src="https://png.icons8.com/user/ios7/100" title="User" width="100" height="100" />
                    <h2>Alekhya Lingutla</h2>
                    alekhyalingutla1996@gmail.com
                </center>
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={{margin: '0.5em'}}>
                        <CardHeader
                            title="Send Feedback"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            <div>
                                <TextField
                                    hintText="Message Field"
                                    floatingLabelText="Message Field"
                                    multiLine={true}
                                    fullWidth={true}
                                    rows={1}
                                    value={this.state.feedback}
                                    onChange={this.handleFeedbackChange}
                                />
                            </div>
                            <center>
                                <RaisedButton label="Send" secondary={true} onClick={this.sendFeedback}/>
                            </center>
                        </CardText>
                    </Card>
                    <Snackbar
                        open={this.state.openSnack}
                        message="Thanks for the feedback!"
                        autoHideDuration={2000}
                        onRequestClose={this.handleSnackClose}
                    />
                    <center>
                        <IconButton tooltip='Facebook'>
                            <Facebook />
                        </IconButton>
                        <IconButton tooltip='Google+'>
                            <Google />
                        </IconButton>
                        <IconButton tooltip='Twitter'>
                            <Twitter />
                        </IconButton>
                        <IconButton tooltip='Instagram'>
                            <Instagram />
                        </IconButton>
                    </center>
            </div>
        )
    }
}