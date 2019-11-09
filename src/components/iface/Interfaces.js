import React, { Component } from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from './Form'

function ControlledTabs() {
    const [key, setKey] = useState('text');
  
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="text" title="Text">
        <Form/>
        </Tab>
        <Tab eventKey="map" title="Map">
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