import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import App from './App';

//import and configure firebase here
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwav3X6SwgVdQA01joBpLv0OkyG_Vsi88",
  authDomain: "petdiary-info340-2021su.firebaseapp.com",
  projectId: "petdiary-info340-2021su",
  storageBucket: "petdiary-info340-2021su.appspot.com",
  messagingSenderId: "224235376717",
  appId: "1:224235376717:web:f01ed108be3e7132620c04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));