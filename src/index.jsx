import React from "react";
import * as ReactDOM from 'react-dom';
import App from './app'
import './global.css'

import { ResultContextProvider } from "./contexts/ResultContextProvider";

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App/>
        </Router>
    </ResultContextProvider>
    ,document.getElementById('root')
)