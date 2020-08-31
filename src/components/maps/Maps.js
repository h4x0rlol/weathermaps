import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import MapsForm from './MapsForm'
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {API_KEY} from '../../utils/constants'

const style = {
  map: {
    height: '744px',
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
      temperature: undefined,
      description: [],
      forecast: [],
      date: [],
      connectionError: undefined,
      textPreview: true
    };
  }

  async getWeather() {
    try {
      const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${this.state.markers[0].lat}&lon=${this.state.markers[0].lng}&appid=${API_KEY}`)
      const data = await api_call.json()
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: Number((data.main.temp) - 273).toFixed(1),
        description: data.weather[0].description,
        connectionError: undefined,
        textPreview: false
      })
    }
    catch (e) {
      this.setState({
        city: undefined,
        connectionError: e.name + ":" + " " + e.message,
        textPreview: false
      })
    }
  }

  async getForecast() {
    const forecast_call = await fetch(`//api.openweathermap.org/data/2.5/forecast?lat=${this.state.markers[0].lat}&lon=${this.state.markers[0].lng}&appid=${API_KEY}`)
    const dataForecast = await forecast_call.json()
    let forecastarr = []
    let datearr = []
    let descriptionarr = []
    let i = 0
    while (i <= 40) {
      forecastarr.push(Number((dataForecast.list[i].main.temp) - 273).toFixed(1))
      let datedef = new Date()
      datearr.push(new Date(datedef.setTime(Date.parse(dataForecast.list[i].dt_txt))))
      descriptionarr.push(dataForecast.list[i].weather[0].description)
      i += 9
    }
    this.setState({
      forecast: forecastarr,
      date: datearr,
      description: descriptionarr,
      textPreview: false
    })
  }

  componentDidUpdate() {
    if (this.state.markers[0] == undefined) {
      const map = this.refs.map.leafletElement
      setTimeout(function () { map.invalidateSize() }, 100);
    }
  }

  addMarker = (e) => {
    const { markers } = this.state
    markers.splice(0, 2, e.latlng)
    this.setState({ markers })
  }

  onClick(event) {
    this.addMarker(event);
    this.getWeather();
    this.getForecast();
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
          zoom={5}
          style={style.map}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position}>
              <Tooltip permanent>
                {this.state.city ? <span>{this.state.city}</span> : <span>This place</span>}
                {/* {!this.state.city && <span>This place</span>} */}
              </Tooltip>
            </Marker>
          )}
        </Map>
        
        {this.state.connectionError=="TypeError: Failed to fetch" && <ListGroup>
          <ListGroup.Item>{this.state.connectionError}<br />Try to change browser or attempt later</ListGroup.Item>
        </ListGroup>}

        {!this.state.city && this.state.connectionError=="TypeError: Cannot read property 'country' of undefined" && <ListGroup>
          <ListGroup.Item>{this.state.connectionError}<br />Wrong latitude or longitude (you scrolled the whole map)</ListGroup.Item>
        </ListGroup>}
        {this.state.date && this.state.temperature && <MapsForm city={this.state.city} country={this.state.country} temperature={this.state.temperature} forecast={this.state.forecast} date={this.state.date} description={this.state.description} connectionError={this.state.connectionError} /> }
            
                     {this.state.textPreview && <Jumbotron className="_map_text">
                            <h3>
                                Choose the place!
                         </h3>   
               </Jumbotron>}

      </div>
    );
  }
}
