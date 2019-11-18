import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const style = {
    map: {
      height: '400px',
      width: '100%'
    }
  }

export default class Maps extends React.Component {
    constructor() {
      super();
      this.state = {
        markers: []
      };
    }
    
    addMarker = (e) => {
        const {markers} = this.state
        markers.splice(0, 2,e.latlng)
        this.setState({markers})
        console.log(markers)
      }
  
    render() {
      return (
        <Map 
          center={[19.4100819, -99.1630388]} 
          onClick={this.addMarker}
          zoom={13} 
          style={style.map}
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.state.markers.map((position, idx) => 
            <Marker key={`marker-${idx}`} position={position}>
            <Popup>
              <span>Popup</span>
            </Popup>
          </Marker>
          )}
        </Map>
      );
    }
  }

