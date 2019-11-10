import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            contry: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        };
    }


    async getWeather() {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${API_KEY}`)
        const data = await api_call.json()
        if(this.state.city && this.state.country ){
        console.log(data)
        if(data.message!="city not found"){
        this.setState({
            city: data.name,    
            country: data.sys.country,  
            temperature: Number((data.main.temp)-273).toFixed(1),
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
         })
        }
        else{
        this.setState({
            city: undefined,
            contry: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please check the input is correct"
         })
        }
        }
        else{
            console.log(data.message)
        this.setState({
            city: undefined,
            contry: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please check the input is correct"
         })
        }
    }



    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={() => { this.getWeather() }} variant="primary">Get Weather</Button>
                    </InputGroup.Prepend>
                    <FormControl name="country" onChange={(event) => this.setState({ country: event.target.value })} placeholder="Country..." />
                    <FormControl name="city" onChange={(event) => this.setState({ city: event.target.value })} placeholder="City..." /> 
              </InputGroup>
               
                {this.state.city && this.state.country && <ListGroup>
                   <ListGroup.Item>Location: {this.state.city}, {this.state.country}</ListGroup.Item>
               </ListGroup>}

                {this.state.temperature && <ListGroup>
                   <ListGroup.Item>Temperature: {this.state.temperature}°C</ListGroup.Item>
               </ListGroup>}
                
                {this.state.humidity && <ListGroup>
                   <ListGroup.Item>Humidity: {this.state.humidity}</ListGroup.Item>
               </ListGroup>}

               {this.state.description && <ListGroup>
                   <ListGroup.Item>Conditions: {this.state.description}</ListGroup.Item>
               </ListGroup>}

               {this.state.error && <ListGroup>
                   <ListGroup.Item>{this.state.error}</ListGroup.Item>
               </ListGroup>}
               
            </div>
        )
    }
}
