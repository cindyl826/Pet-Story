import './index.css';
import { Nav } from "./Nav.js";
import { AboutPage } from './AboutPage';
import JourneyForm from './JourneyForm';
import { Route, Switch } from 'react-router-dom';
import { JourneyDeck } from './JourneyDeck';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//FirebaseUI config
const uiConfig = {
    //which sign in method to use
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //where to show the "display name" on the sign in page
            requireDisplayName: true
        }, //each object is a signin method
        firebase.auth.GoogleAuthProvider.PROVIDER_ID //also log in with Google
    ],
    //page won't show the account chooser
    credentialHelper: 'none',
    //use popup instead of redirect for external sign-up methods -- Google
    signInFlow: 'popup',
    callbacks: {
        //Avoid redirects after sign-in
        signInSuccessWithAuthResult: () => false,
    },
};

function App(props) {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { //run after component loads
        //listen for changes to the authstate (logged in or not)
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                console.log("logged in as " + firebaseUser.displayName);
                setUser(firebaseUser)
                setIsLoading(false)
            } else { //not defined
                console.log("logged out")
                setUser(null);
                setIsLoading(false);
            }
        })
    })

    //if website is loading
    if (isLoading) {
        return (
            <div className="text-center">
                <i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
            </div>
        )
    }

    //A callback func for logging out the current user
    const handleSignOut = () => {
        firebase.auth().signOut()
    }

    let content = null; //content to render

    if (!user) { //if logged out, show signup form
        content = (
            <div className="container">
                <h1>Sign Up</h1>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    } else { // if logged in, show welcome message
        content = (
            <main>
                {user &&
                    <button className="btn btn-warning" onClick={handleSignOut}>
                        Log Out {user.displayName}
                    </button>
                }

                <Switch>
                    <Route exact path="/">
                        <Nav />
                        <h2>Check out The Pets' Stories Here!</h2>
                        <JourneyDeck petList={props.pets} />
                        <JourneyForm />
                    </Route>

                    <Route path="/about">
                        <AboutPage />
                    </Route>

                </Switch>
                <footer>
                    <p>This project was created by INFO 340 SU21 Project Group 6</p>
                    <address>
                        Contact us at <a href="mailto:yw326@uw.edu">yw326@uw.edu</a>
                        , <a href="mailto:kexin@uw.edu">kexin@uw.edu</a>, <a href="mailto:cindy@uw.edu">cindy@uw.edu</a>.
                    </address>
                    <p>&copy; 2021 by Kexin Pei, Cindy Lin, David(Yinqi) Wang</p>
                </footer>
            </main>
        );
    }

    return (
        content
    );
}

export default App;