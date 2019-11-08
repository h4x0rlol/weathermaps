import ReactDOM from "react-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Interfaces from './iface/interfaces';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
              <Interfaces/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}