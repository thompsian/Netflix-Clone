import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: "netflix-clone-thompsian.firebaseapp.com",
    projectId: "netflix-clone-thompsian",
    storageBucket: "netflix-clone-thompsian.appspot.com",
    messagingSenderId: "540238326314",
    appId: "1:540238326314:web:7a6a1940a1715ce680b153",
    measurementId: "G-CZ82JEXEML"
};
  

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
        <>
            <FirebaseContext.Provider value={{ firebase: window.firebase }}>
                <GlobalStyles />
                <App />
            </FirebaseContext.Provider>
        </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
