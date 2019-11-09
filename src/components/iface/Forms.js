import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = { 
                temperature: "" };
    }


    async getWeather() {
        
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${API_KEY}`)
        const data = await api_call.json()
        console.log(data)
        this.setState({ temperature: data.main.temp})
    }



    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={() => {this.getWeather()}} variant="primary">Get Weather</Button>
                    </InputGroup.Prepend>
                    <FormControl name="country" onChange = {(event) => this.setState({country: event.target.value })} placeholder="Country..." />
                    <FormControl name="city"  onChange = {(event) => this.setState({city: event.target.value })}  placeholder="City..." />
                </InputGroup>
                {this.state.temperature}
            </div>
        )
    }
}
