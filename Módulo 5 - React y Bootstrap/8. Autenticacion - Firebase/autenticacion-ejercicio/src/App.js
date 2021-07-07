import './App.css';
import React from 'react';
import Login from './Login/Login'

// Imports de FIREBASE (1)
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import {firebaseConfig} from './firebase/constantes'

function App() {
  return (
    <div className="App">
      <FirebaseAuthProvider  {...firebaseConfig} firebase={firebase}>  {/* (2) */}
        {/* <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <pre style={{ height: 300, overflow: "auto" }}>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
              );
            }}
          </FirebaseAuthConsumer> */}
          <Login/>
       </FirebaseAuthProvider>
    </div>
  );
}

export default App;
