import ReactDOM from "react-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Interfaces from './iface/Interfaces';

function App() {
    return <div>
        <Interfaces/>
    </div>
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}