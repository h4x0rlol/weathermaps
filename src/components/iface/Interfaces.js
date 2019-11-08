import React, { Component } from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="home" title="Text">
 
        </Tab>
        <Tab eventKey="profile" title="Map">
        </Tab>
      </Tabs>
    );
  }


export default class Interfaces extends Component {
    render() {
        return (
            <div>
               <ControlledTabs />
            </div>
        )
    }
}