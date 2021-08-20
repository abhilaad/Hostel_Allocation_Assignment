import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Header from "./components/Header";
import ChooseGender from "./components/ChooseGender";
import { Route, Switch } from "react-router-dom";
import ChooseHostel from "./components/ChooseHostel";

import ChooseRoom from "./components/ChooseRoom";

firebase.initializeApp({
  apiKey: "AIzaSyBemKFNRboKQYIcI3_NyIaG0XFScmnZ7P4",
  authDomain: "hostel-allocation-app.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
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
      this.setState({ isSignedIn: !!user });
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
              <Route path="/" exact component={ChooseGender} />
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
