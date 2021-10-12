import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
}

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
