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
    // (2)
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
          <Login/>
        </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

export default App;
