import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home.react'
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
});



firebase.initializeApp(config);

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount(){
    const db = firebase.database()
    const dbRef = db.ref().child('blogs')
    dbRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({
        data: snapshot.val(),
        loading: false
      })
    })

  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Home style={{'display': this.state.loading? 'none' : 'block'}} data={this.state.data}/>
          <center>
            <div style={{'display': this.state.loading? 'block' : 'none'}}>
                <CircularProgress />
            </div>
          </center>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
