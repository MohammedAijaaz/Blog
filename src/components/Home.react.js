import React,  {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Body from './Body.react'
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import Person from 'material-ui/svg-icons/social/person';
import Books from 'material-ui/svg-icons/action/book';
import Dialog from 'material-ui/Dialog';
import Author from './Author.react'
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import Facebook from 'mui-icons/cmdi/facebook';
import Twitter from 'mui-icons/cmdi/twitter';
import Google from 'mui-icons/cmdi/google';
import Instagram from 'mui-icons/cmdi/instagram';
import Particles from 'react-particles-js';

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state = {open: false, openAuthor: false, openSnack: true}
    }

    handleToggle = () => this.setState({open: !this.state.open});  
    handleClose = () => this.setState({open: false});  

    handleAuthorToggle = () => this.setState({openAuthor: !this.state.openAuthor});  
    handleAuthorClose = () => this.setState({openAuthor: false});

    handleSnackClose = () => {this.setState({openSnack: false})}

    displayBody = () => {
        return (
            <div>
                <Body data={this.props.data}/>
            </div>
        )
    }

    openAboutAuthor = () => {
        this.handleAuthorToggle()
        // this.handleClose()
    }

    render(){
        return(
            <div>
                <AppBar
                title="My Blog!"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                iconElementRight={<IconButton tooltip='About Author' onClick={this.openAboutAuthor}><Person /></IconButton>}
                onLeftIconButtonTouchTap={this.handleToggle}
            />
            <Drawer 
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                docked={false}
            >
                <div style={{padding: '1em'}}>
                    <Avatar>AL</Avatar>
                    &nbsp;&nbsp;<b>Alekhya Lingutla</b>
                </div>
                <Divider />
                <MenuItem onClick={this.handleClose} leftIcon={<Books />} primaryText='Blogs'/>
                <MenuItem onClick={this.openAboutAuthor} leftIcon={<Person />} primaryText='About Author'/>
                <Divider />
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
            </Drawer>
            
            {this.displayBody()}
            <Dialog
                //title="Alekhya Lingutla"
                modal={false}
                open={this.state.openAuthor}
                onRequestClose={this.handleAuthorClose}
            >
                <Author />
            </Dialog>
            <Snackbar
                open={this.state.openSnack}
                message="Happy reading! :)"
                autoHideDuration={2000}
                onRequestClose={this.handleSnackClose}
            />
            </div>
        )
    }
}