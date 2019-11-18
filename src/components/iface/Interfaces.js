import React, { Component } from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Forms from './Forms'
import Maps from '../Maps/Maps'

function ControlledTabs() {
  const [key, setKey] = useState('text');
  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="text" title="Text">
        <Forms/>
      </Tab>
      <Tab eventKey="map" title="Map">
        <Maps/>
      </Tab>
      <Tab eventKey="description" title="Choose how you want to know the weather" disabled
      >
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