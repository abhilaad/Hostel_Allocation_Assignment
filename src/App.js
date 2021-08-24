import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Header from "./components/Header";
import ChooseGender from "./components/ChooseGender";
import { Route, Switch } from "react-router-dom";
import ChooseHostel from "./components/ChooseHostel";

import ChooseRoom from "./components/ChooseRoom";

import BookedPage from "./components/BookedPage";


firebase.initializeApp({
  apiKey: "AIzaSyBemKFNRboKQYIcI3_NyIaG0XFScmnZ7P4",
    authDomain: "hostel-allocation-app.firebaseapp.com",
    databaseURL: "https://hostel-allocation-app-default-rtdb.firebaseio.com",
    projectId: "hostel-allocation-app",
    storageBucket: "hostel-allocation-app.appspot.com",
    messagingSenderId: "260141123201",
    appId: "1:260141123201:web:ba897d082fcea4c1f5af80",
    measurementId: "G-C7GF395EMT",

});



class App extends Component {
  
  state = { isSignedIn: false, pro:false, hno:"",rno:"" };
  xloader = async ()=>{
    const db = firebase.firestore();
const cityRef = db.collection('users').doc('yo');
const doc =  await cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  //history.push('/booked');
  this.setState({...this.state,pro:true})
  let dat = doc.data();
  this.setState({ ...this.state,hno:dat.hostelno,rno:dat.roomno})
  
  
  console.log('Document data:', dat);
  //console.log(this.state);
}
  }
  
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    
     
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ ...this.state,isSignedIn: !!user });
      this.xloader();
      console.log("user", user);
    });
  };
  

  render() {
    
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <div>
            <Header name={firebase.auth().currentUser.displayName} />
            
           
            <Switch>
              <Route path="/" exact>
                {this.state.pro?<BookedPage hno={this.state.hno} rno={this.state.rno} user={firebase.auth().currentUser.displayName} /> :<ChooseGender />}
                </Route> 
              <Route path="/hostel" exact component={ChooseHostel} />
                       

              <Route path="/room" exact component={ChooseRoom} />
            </Switch>
          </div>
        ) : (
          <div>
            <Header />
            <h1 className="h1center">Hostel Allocation</h1>
            <h6 className="h6center">Please sign-in:</h6>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    );
  }
}
export default App;
