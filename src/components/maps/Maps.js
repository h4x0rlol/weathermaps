import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

const style = {
    map: {
      height: '400px',
      width: '100%',
      flex: 1
    }
  }

export default class Maps extends React.Component {
    constructor() {
      super();
      this.state = {
        markers: []
      };
    }
    
    
    componentDidMount () {
      const map = this.refs.map.leafletElement
      setTimeout(function(){ map.invalidateSize()}, 1000);
    } 


    addMarker = (e) => {
        const {markers} = this.state
        markers.splice(0, 2,e.latlng)
        this.setState({markers})
        console.log(markers[0].lat)
       
      }

      async getWeather(){
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`)
        const data = await api_call.json()
      }
  
    render() {
      return (
        <Map
          ref="map"
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

