import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MapsForm from '../Maps/MapsForm'

const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

const style = {
  map: {
    height: '550px',
    width: '100%',
    flex: 1
  }
}

export default class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      city: undefined,
      contry: undefined,
      temperature: undefined
    };
  }








  async getWeather() {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.markers[0].lat}&lon=${this.state.markers[0].lng}&appid=${API_KEY}`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: Number((data.main.temp) - 273).toFixed(1)
    })
  }


  componentDidUpdate() {
    if (this.state.markers[0] == undefined) {
      const map = this.refs.map.leafletElement
      setTimeout(function () { map.invalidateSize() }, 100);
      //console.log(map)
    }
  }



  addMarker = (e) => {
    const { markers } = this.state
    markers.splice(0, 2, e.latlng)
    this.setState({ markers })
    console.log(markers[0].lat)
  }

  onClick(event) {
    this.addMarker(event);
    this.getWeather();
 }
  render() {
    return (
     <div>
      <Map
        ref="map"
        center={[55.7522200, 37.6155600]}
        onClick={event =>
          this.onClick(event)
        }
        // onClick={this.addMarker}
        // onClick={() => { this.getWeather() }}
        zoom={5}
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
      {this.state.city && <MapsForm city={this.state.city}/>}
      </div>
    );
  }
}

