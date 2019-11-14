import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import Graph from './Graph'


const API_KEY = 'd674110527020c6fa3a7d540ff7bf7b0'

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

export default class Forms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            contry: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,
            cityid: undefined,
            forecast: [],
            date: [],
            tableVisible: undefined
        };
    }


    async getWeather() {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${API_KEY}`)
        const data = await api_call.json()
        if (this.state.city && this.state.country) {
            console.log(data)
            if (data.message != "city not found") {
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: Number((data.main.temp) - 273).toFixed(1),
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: "",
                    cityid: data.id,
                    tableVisible: undefined
                })
            }
            else {
                this.setState({
                    city: undefined,
                    contry: undefined,
                    temperature: undefined,
                    humidity: undefined,
                    description: undefined,
                    error: "Please check the input is correct",
                    tableVisible: undefined
                })
            }
        }
        else {
            console.log(data.message)
            this.setState({
                city: undefined,
                contry: undefined,
                temperature: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please check the input is correct",
                tableVisible: undefined
            })
        }
    }


    async getForecast() {
        const forecast_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityid}&appid=${API_KEY}`)
        const dataForecast = await forecast_call.json()
        console.log(dataForecast)
        let forecastarr = []
        let datearr = []
        let i = 0
        while (i <= 40) {
            forecastarr.push(Number((dataForecast.list[i].main.temp) - 273).toFixed(1))
            let datedef = new Date()
            datearr.push(new Date(datedef.setTime(Date.parse(dataForecast.list[i].dt_txt))))
            console.log(datearr)
            i += 9
        }

        this.setState({
            forecast: forecastarr,
            date: datearr,
            tableVisible: 1

        })
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



                {this.state.temperature && <Button onClick={() => { this.getForecast() }} variant="primary">Get forecast</Button>}
                {this.state.tableVisible && <Table bordered>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <td>{monthNames[this.state.date[0].getMonth()]} {this.state.date[0].getDate().toString()}th</td>
                            <td>{monthNames[this.state.date[1].getMonth()]} {this.state.date[1].getDate().toString()}th</td>
                            <td>{monthNames[this.state.date[2].getMonth()]} {this.state.date[2].getDate().toString()}th</td>
                            <td>{monthNames[this.state.date[3].getMonth()]} {this.state.date[3].getDate().toString()}th</td>
                            <td>{monthNames[this.state.date[4].getMonth()]} {this.state.date[4].getDate().toString()}th</td>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Temperature</th>
                            <td>{this.state.forecast[0]}°C</td>
                            <td>{this.state.forecast[1]}°C</td>
                            <td>{this.state.forecast[2]}°C</td>
                            <td>{this.state.forecast[3]}°C</td>
                            <td>{this.state.forecast[4]}°C</td>
                        </tr>
                    </tbody>
                </Table>}

                {this.state.tableVisible && <Graph forecast={this.state.forecast} date={this.state.date}/>}
                
            </div>
        )
    }
}
